"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

interface Customer {
  id: number;
  name: string;
  mobile: string;
  city: string | null;
}

export default function DashboardPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

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

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-6 rounded-lg border border-slate-700 p-4">
        <h2 className="mb-4 text-lg font-semibold">Customers</h2>

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-slate-800">
                <td className="px-3 py-2">{customer.id}</td>
                <td className="px-3 py-2">{customer.name}</td>
                <td className="px-3 py-2">{customer.mobile}</td>
                <td className="px-3 py-2">{customer.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}