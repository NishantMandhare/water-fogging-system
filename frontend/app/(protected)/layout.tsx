"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.replace("/login");
        } else {
            setAllowed(true);
        }
    }, [router]);

    if (!allowed) {
        return null;
    }

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <main style={{ flex: 1, padding: "20px" }}>{children}</main>
        </div>
    );
}