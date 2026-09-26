"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Customer {
    id: number;
    name: string;
}

interface Invoice {
    id: number;
    invoiceNo: string;
    paidAmount: number;
    customer: Customer;
}

export default function PaymentsPage() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [invoiceId, setInvoiceId] = useState("");
    const [amount, setAmount] = useState("");
    const [method, setMethod] = useState("Cash");
    const [reference, setReference] = useState("");
    const [notes, setNotes] = useState("");
    const [lastResult, setLastResult] = useState<{
        amount: number;
        newPaidAmount: number;
        invoiceNo: string;
    } | null>(null);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const data = await api.get("/invoices");
                setInvoices(data);
            } catch (error) {
                alert((error as Error).message);
            }
        };

        fetchInvoices();
    }, []);

    const handleSubmit = async () => {
        try {
            const result = await api.post("/payments", {
                invoiceId,
                amount,
                method,
                reference,
                notes,
            });

            const selectedInvoice = invoices.find((inv) => inv.id === Number(invoiceId));

            setLastResult({
                amount: Number(amount),
                newPaidAmount: result.updatedInvoice.paidAmount,
                invoiceNo: selectedInvoice ? selectedInvoice.invoiceNo : "",
            });

            const data = await api.get("/invoices");
            setInvoices(data);

            setInvoiceId("");
            setAmount("");
            setMethod("Cash");
            setReference("");
            setNotes("");
        } catch (error) {
            alert((error as Error).message);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Record Payment</h1>

            {lastResult && (
                <div className="mt-6 rounded-lg border border-green-700 bg-green-950 p-4">
                    <p className="font-semibold text-green-400">Payment recorded!</p>
                    <p className="text-sm text-slate-300">
                        ₹{lastResult.amount} added to {lastResult.invoiceNo}. New paid
                        amount: ₹{lastResult.newPaidAmount}
                    </p>
                </div>
            )}

            <div className="mt-6 grid grid-cols-1 gap-3 rounded-lg border border-slate-700 p-4 sm:grid-cols-2">
                <select
                    value={invoiceId}
                    onChange={(e) => setInvoiceId(e.target.value)}
                    className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                >
                    <option value="">Select Invoice</option>
                    {invoices.map((invoice) => (
                        <option key={invoice.id} value={invoice.id}>
                            {invoice.invoiceNo} — {invoice.customer.name} (Paid: ₹
                            {invoice.paidAmount})
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                />

                <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                >
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cheque">Cheque</option>
                </select>

                <input
                    placeholder="Reference (optional)"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                />

                <input
                    placeholder="Notes (optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white sm:col-span-2"
                />

                <button
                    onClick={handleSubmit}
                    className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-500 sm:col-span-2"
                >
                    Record Payment
                </button>
            </div>
        </div>
    );
}