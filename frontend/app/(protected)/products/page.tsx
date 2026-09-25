"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Product {
    id: number;
    name: string;
    sku: string;
    category: string | null;
    description: string | null;
    costPrice: number | null;
    sellingPrice: number;
    stock: number;
    minStock: number;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [name, setName] = useState("");
    const [sku, setSku] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [costPrice, setCostPrice] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [stock, setStock] = useState("");
    const [minStock, setMinStock] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await api.get("/products");
                setProducts(data);
            } catch (error) {
                alert((error as Error).message);
            }
        };

        fetchProducts();
    }, []);

    const handleSubmit = async () => {
        try {
            const payload = {
                name,
                sku,
                category,
                description,
                costPrice: costPrice ? Number(costPrice) : null,
                sellingPrice: Number(sellingPrice),
                stock: stock ? Number(stock) : 0,
                minStock: minStock ? Number(minStock) : 5,
            };

            if (editingId) {
                await api.put(`/products/${editingId}`, payload);
            } else {
                await api.post("/products", payload);
            }

            const data = await api.get("/products");
            setProducts(data);

            setShowForm(false);
            setEditingId(null);
            setName("");
            setSku("");
            setCategory("");
            setDescription("");
            setCostPrice("");
            setSellingPrice("");
            setStock("");
            setMinStock("");
        } catch (error) {
            alert((error as Error).message);
        }
    };

    const handleEdit = (product: Product) => {
        setEditingId(product.id);
        setName(product.name);
        setSku(product.sku);
        setCategory(product.category || "");
        setDescription(product.description || "");
        setCostPrice(product.costPrice ? String(product.costPrice) : "");
        setSellingPrice(String(product.sellingPrice));
        setStock(String(product.stock));
        setMinStock(String(product.minStock));
        setShowForm(true);
    };

    const handleDelete = async (id: number) => {
        const confirmed = confirm("Delete this product?");
        if (!confirmed) return;

        try {
            await api.delete(`/products/${id}`);
            const data = await api.get("/products");
            setProducts(data);
        } catch (error) {
            alert((error as Error).message);
        }
    };


    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Products</h1>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setEditingId(null);
                        setName("");
                        setSku("");
                        setCategory("");
                        setDescription("");
                        setCostPrice("");
                        setSellingPrice("");
                        setStock("");
                        setMinStock("");
                    }}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
                >
                    {showForm ? "Cancel" : "Add Product"}
                </button>
            </div>

            {showForm && (
                <div className="mt-6 grid grid-cols-1 gap-3 rounded-lg border border-slate-700 p-4 sm:grid-cols-2">
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="SKU"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        type="number"
                        placeholder="Cost Price"
                        value={costPrice}
                        onChange={(e) => setCostPrice(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        type="number"
                        placeholder="Selling Price"
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        type="number"
                        placeholder="Stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        type="number"
                        placeholder="Min Stock"
                        value={minStock}
                        onChange={(e) => setMinStock(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />

                    <button
                        onClick={handleSubmit}
                        className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-500 sm:col-span-2"
                    >
                        {editingId ? "Update" : "Save"}
                    </button>
                </div>
            )}

            <div className="mt-6 rounded-lg border border-slate-700 p-4">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-700 text-slate-400">
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">SKU</th>
                            <th className="px-3 py-2">Category</th>
                            <th className="px-3 py-2">Price</th>
                            <th className="px-3 py-2">Stock</th>
                            <th className="px-3 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-slate-800">
                                <td className="px-3 py-2">{product.name}</td>
                                <td className="px-3 py-2">{product.sku}</td>
                                <td className="px-3 py-2">{product.category}</td>
                                <td className="px-3 py-2">₹{product.sellingPrice}</td>
                                <td className="px-3 py-2">{product.stock}</td>
                                <td className="space-x-3 px-3 py-2">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="text-blue-400 hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}