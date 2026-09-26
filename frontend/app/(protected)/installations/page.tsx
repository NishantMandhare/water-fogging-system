"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Customer {
    id: number;
    name: string;
}

interface Technician {
    id: number;
    name: string;
    email: string;
}

interface Installation {
    id: number;
    status: string;
    scheduledDate: string | null;
    completedDate: string | null;
    materialsUsed: string | null;
    laborCost: number | null;
    notes: string | null;
    customer: Customer;
    technician: Technician;
}

export default function InstallationsPage() {
    const [installations, setInstallations] = useState<Installation[]>([]);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [technicians, setTechnicians] = useState<Technician[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [installationsData, customersData, techniciansData] =
                    await Promise.all([
                        api.get("/installations"),
                        api.get("/customers"),
                        api.get("/auth/users"),
                    ]);
                setInstallations(installationsData);
                setCustomers(customersData);
                setTechnicians(techniciansData);
            } catch (error) {
                alert((error as Error).message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold">Installations</h1>

            <div className="mt-6 rounded-lg border border-slate-700 p-4">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-700 text-slate-400">
                            <th className="px-3 py-2">Customer</th>
                            <th className="px-3 py-2">Technician</th>
                            <th className="px-3 py-2">Scheduled Date</th>
                            <th className="px-3 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {installations.map((installation) => (
                            <tr key={installation.id} className="border-b border-slate-800">
                                <td className="px-3 py-2">{installation.customer.name}</td>
                                <td className="px-3 py-2">{installation.technician.name}</td>
                                <td className="px-3 py-2">
                                    {installation.scheduledDate
                                        ? new Date(installation.scheduledDate).toLocaleDateString()
                                        : "-"}
                                </td>
                                <td className="px-3 py-2">{installation.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}