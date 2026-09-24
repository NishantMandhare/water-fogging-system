"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
    { label: "Dashboard", href: "/dashboard" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.replace("/login");
    };

    return (
        <aside
            style={{
                width: "220px",
                minHeight: "100vh",
                padding: "20px",
                borderRight: "1px solid #333",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h2>Fogging System</h2>
            <nav style={{ flex: 1 }}>
                {menuItems.map((item) => (
                    <div key={item.href} style={{ margin: "12px 0" }}>
                        <Link
                            href={item.href}
                            style={{ fontWeight: pathname === item.href ? "bold" : "normal" }}
                        >
                            {item.label}
                        </Link>
                    </div>
                ))}
            </nav>
            <button onClick={handleLogout}>Logout</button>
        </aside>
    );
}