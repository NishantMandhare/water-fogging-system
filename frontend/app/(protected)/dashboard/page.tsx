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
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      <h2>Customers</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.mobile}</td>
              <td>{customer.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}