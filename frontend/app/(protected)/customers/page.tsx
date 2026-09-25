"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Customer {
    id: number;
    name: string;
    mobile: string;
    city: string | null;
}

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState("");

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const data = await api.get("/customers");
                setCustomers(data);
            } catch (error) {
                alert((error as Error).message);
            }
        };

        fetchCustomers();
    }, []);

    const handleSave = async () => {
        try {
            await api.post("/customers", { name, mobile, city });

            const data = await api.get("/customers");
            setCustomers(data);

            alert("Customer saved!");
            setName("");
            setMobile("");
            setCity("");
        } catch (error) {
            alert((error as Error).message);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmed = confirm("Delete this customer?");
        if (!confirmed) return;

        try {
            await api.delete(`/customers/${id}`);
            const data = await api.get("/customers");
            setCustomers(data);
        } catch (error) {
            alert((error as Error).message);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Customers</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
                >
                    {showForm ? "Cancel" : "Add Customer"}
                </button>
            </div>

            {showForm && (
                <div className="mt-6 space-y-3 rounded-lg border border-slate-700 p-4">
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <button
                        onClick={handleSave}
                        className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-500"
                    >
                        Save
                    </button>
                </div>
            )}

            <div className="mt-6 rounded-lg border border-slate-700 p-4">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-700 text-slate-400">
                            <th className="px-3 py-2">ID</th>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Mobile</th>
                            <th className="px-3 py-2">City</th>
                            <th className="px-3 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="border-b border-slate-800">
                                <td className="px-3 py-2">{customer.id}</td>
                                <td className="px-3 py-2">{customer.name}</td>
                                <td className="px-3 py-2">{customer.mobile}</td>
                                <td className="px-3 py-2">{customer.city}</td>
                                <td className="px-3 py-2">
                                    <button
                                        onClick={() => handleDelete(customer.id)}
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