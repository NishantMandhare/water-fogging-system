"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Customer {
    id: number;
    name: string;
}

interface Inquiry {
    id: number;
    requirement: string | null;
    area: string | null;
    location: string | null;
    budget: string | null;
    source: string | null;
    status: string;
    customer: Customer;
}

export default function InquiriesPage() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [customerId, setCustomerId] = useState("");
    const [requirement, setRequirement] = useState("");
    const [area, setArea] = useState("");
    const [location, setLocation] = useState("");
    const [budget, setBudget] = useState("");
    const [source, setSource] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [inquiriesData, customersData] = await Promise.all([
                    api.get("/inquiries"),
                    api.get("/customers"),
                ]);
                setInquiries(inquiriesData);
                setCustomers(customersData);
            } catch (error) {
                alert((error as Error).message);
            }
        };

        fetchData();
    }, []);


    const handleSubmit = async () => {
        try {
            await api.post("/inquiries", {
                customerId,
                requirement,
                area,
                location,
                budget,
                source,
            });

            const data = await api.get("/inquiries");
            setInquiries(data);

            setShowForm(false);
            setCustomerId("");
            setRequirement("");
            setArea("");
            setLocation("");
            setBudget("");
            setSource("");
        } catch (error) {
            alert((error as Error).message);
        }
    };

    const statusOptions = [
        "NEW",
        "CONTACTED",
        "SITE_VISIT_SCHEDULED",
        "QUOTED",
        "CONVERTED",
        "LOST",
    ];

    const handleStatusChange = async (id: number, newStatus: string) => {
        try {
            await api.patch(`/inquiries/${id}/status`, { status: newStatus });
            const data = await api.get("/inquiries");
            setInquiries(data);
        } catch (error) {
            alert((error as Error).message);
        }
    };


    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Inquiries</h1>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setCustomerId("");
                        setRequirement("");
                        setArea("");
                        setLocation("");
                        setBudget("");
                        setSource("");
                    }}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
                >
                    {showForm ? "Cancel" : "Add Inquiry"}
                </button>
            </div>

            {showForm && (
                <div className="mt-6 grid grid-cols-1 gap-3 rounded-lg border border-slate-700 p-4 sm:grid-cols-2">
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
                        placeholder="Requirement"
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />
                    <input
                        placeholder="Source"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                    />

                    <button
                        onClick={handleSubmit}
                        className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-500 sm:col-span-2"
                    >
                        Save
                    </button>
                </div>
            )}

            <div className="mt-6 rounded-lg border border-slate-700 p-4">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-700 text-slate-400">
                            <th className="px-3 py-2">Customer</th>
                            <th className="px-3 py-2">Requirement</th>
                            <th className="px-3 py-2">Area</th>
                            <th className="px-3 py-2">Source</th>
                            <th className="px-3 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inquiries.map((inquiry) => (
                            <tr key={inquiry.id} className="border-b border-slate-800">
                                <td className="px-3 py-2">{inquiry.customer.name}</td>
                                <td className="px-3 py-2">{inquiry.requirement}</td>
                                <td className="px-3 py-2">{inquiry.area}</td>
                                <td className="px-3 py-2">{inquiry.source}</td>
                                <td className="px-3 py-2">
                                    <select
                                        value={inquiry.status}
                                        onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                                        className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-white"
                                    >
                                        {statusOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}