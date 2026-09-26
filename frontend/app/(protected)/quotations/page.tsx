"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Customer {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    sellingPrice: number;
}

interface QuotationItem {
    id: number;
    quantity: number;
    rate: number;
    product: Product;
}

interface Quotation {
    id: number;
    quotationNo: string;
    status: string;
    discount: number | null;
    gstPercent: number | null;
    customer: Customer;
    items: QuotationItem[];
}

export default function QuotationsPage() {
    const [quotations, setQuotations] = useState<Quotation[]>([]);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [quotationNo, setQuotationNo] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [discount, setDiscount] = useState("");
    const [gstPercent, setGstPercent] = useState("18");
    const [notes, setNotes] = useState("");
    const [items, setItems] = useState([{ productId: "", quantity: "1", rate: "" }]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [quotationsData, customersData, productsData] = await Promise.all([
                    api.get("/quotations"),
                    api.get("/customers"),
                    api.get("/products"),
                ]);
                setQuotations(quotationsData);
                setCustomers(customersData);
                setProducts(productsData);
            } catch (error) {
                alert((error as Error).message);
            }
        };

        fetchData();
    }, []);

    const addItemRow = () => {
        setItems([...items, { productId: "", quantity: "1", rate: "" }]);
    };

    const removeItemRow = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const updateItemRow = (index: number, field: string, value: string) => {
        const updated = [...items];
        updated[index] = { ...updated[index], [field]: value };

        if (field === "productId") {
            const selectedProduct = products.find((p) => p.id === Number(value));
            if (selectedProduct) {
                updated[index].rate = String(selectedProduct.sellingPrice);
            }
        }

        setItems(updated);
    };

    const handleSubmit = async () => {
        try {
            await api.post("/quotations", {
                quotationNo,
                customerId,
                discount: discount ? Number(discount) : 0,
                gstPercent: gstPercent ? Number(gstPercent) : 18,
                notes,
                items: items.map((item) => ({
                    productId: Number(item.productId),
                    quantity: Number(item.quantity),
                    rate: Number(item.rate),
                })),
            });

            const data = await api.get("/quotations");
            setQuotations(data);

            setShowForm(false);
            setQuotationNo("");
            setCustomerId("");
            setDiscount("");
            setGstPercent("18");
            setNotes("");
            setItems([{ productId: "", quantity: "1", rate: "" }]);
        } catch (error) {
            alert((error as Error).message);
        }
    };

    const calculateTotal = (quotation: Quotation) => {
        const subtotal = quotation.items.reduce(
            (sum, item) => sum + item.quantity * item.rate,
            0
        );
        const afterDiscount = subtotal - (quotation.discount || 0);
        const gst = (afterDiscount * (quotation.gstPercent || 0)) / 100;
        return afterDiscount + gst;
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Quotations</h1>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setQuotationNo("");
                        setCustomerId("");
                        setDiscount("");
                        setGstPercent("18");
                        setNotes("");
                        setItems([{ productId: "", quantity: "1", rate: "" }]);
                    }}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
                >
                    {showForm ? "Cancel" : "Add Quotation"}
                </button>
            </div>

            {showForm && (
                <div className="mt-6 space-y-4 rounded-lg border border-slate-700 p-4">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <input
                            placeholder="Quotation No (e.g. Q-2026-002)"
                            value={quotationNo}
                            onChange={(e) => setQuotationNo(e.target.value)}
                            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                        />
                        <select
                            value={customerId}
                            onChange={(e) => setCustomerId(e.target.value)}
                            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                        >
                            <option value="">Select Customer</option>
                            {customers.map((customer) => (
                                <option key={customer.id} value={customer.id}>
                                    {customer.name}
                                </option>
                            ))}
                        </select>
                        <input
                            type="number"
                            placeholder="Discount"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                        />
                        <input
                            type="number"
                            placeholder="GST %"
                            value={gstPercent}
                            onChange={(e) => setGstPercent(e.target.value)}
                            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                        />
                    </div>

                    <input
                        placeholder="Notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />

                    <div>
                        <p className="mb-2 text-sm font-semibold text-slate-300">Items</p>
                        <div className="space-y-2">
                            {items.map((item, index) => (
                                <div key={index} className="flex gap-2">
                                    <select
                                        value={item.productId}
                                        onChange={(e) => updateItemRow(index, "productId", e.target.value)}
                                        className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                                    >
                                        <option value="">Select Product</option>
                                        {products.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.name}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="number"
                                        placeholder="Qty"
                                        value={item.quantity}
                                        onChange={(e) => updateItemRow(index, "quantity", e.target.value)}
                                        className="w-20 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Rate"
                                        value={item.rate}
                                        onChange={(e) => updateItemRow(index, "rate", e.target.value)}
                                        className="w-28 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                                    />
                                    <button
                                        onClick={() => removeItemRow(index)}
                                        className="rounded-md bg-red-600 px-3 text-sm hover:bg-red-500"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={addItemRow}
                            className="mt-2 rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:bg-slate-800"
                        >
                            + Add Item
                        </button>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-500"
                    >
                        Save
                    </button>
                </div>
            )}

            <div className="mt-6 space-y-4">
                {quotations.map((quotation) => (
                    <div
                        key={quotation.id}
                        className="rounded-lg border border-slate-700 p-4"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">{quotation.quotationNo}</p>
                                <p className="text-sm text-slate-400">
                                    {quotation.customer.name}
                                </p>
                            </div>
                            <p className="text-lg font-bold">
                                ₹{calculateTotal(quotation).toFixed(2)}
                            </p>
                        </div>

                        <table className="mt-3 w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-700 text-slate-400">
                                    <th className="px-2 py-1">Product</th>
                                    <th className="px-2 py-1">Qty</th>
                                    <th className="px-2 py-1">Rate</th>
                                    <th className="px-2 py-1">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotation.items.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-800">
                                        <td className="px-2 py-1">{item.product.name}</td>
                                        <td className="px-2 py-1">{item.quantity}</td>
                                        <td className="px-2 py-1">₹{item.rate}</td>
                                        <td className="px-2 py-1">₹{item.quantity * item.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}