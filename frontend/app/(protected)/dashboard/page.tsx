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

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-slate-700 p-4">
          <p className="text-sm text-slate-400">Total Customers</p>
          <p className="mt-2 text-3xl font-bold">{customers.length}</p>
        </div>
      </div>
    </div>
  );
}