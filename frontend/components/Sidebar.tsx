"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Customers", href: "/customers" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.replace("/login");
    };

    return (
        <aside className="flex min-h-screen w-64 flex-col bg-slate-900 p-4 text-white">
            <h2 className="mb-6 text-xl font-bold">Fogging System</h2>

            <nav className="flex-1 space-y-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-md px-3 py-2 text-sm ${pathname === item.href
                            ? "bg-blue-600 font-semibold"
                            : "text-slate-300 hover:bg-slate-800"
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <button
                onClick={handleLogout}
                className="rounded-md bg-slate-800 px-3 py-2 text-sm hover:bg-red-600"
            >
                Logout
            </button>
        </aside>
    );
}