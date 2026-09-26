"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
                <div className="w-full px-8 py-5 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold flex items-center gap-2">
                        WATER FOGGING SYSTEMS
                    </Link>

                    {/* Center Nav with Dropdowns */}
                    <nav className="hidden md:flex items-center gap-10 font-semibold text-sm">
                        <div
                            className="relative"
                            onMouseEnter={() => setOpenMenu("services")}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            <button className="flex items-center gap-1 hover:text-blue-300 transition">
                                SERVICES <ChevronDown size={16} />
                            </button>
                            {openMenu === "services" && (
                                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-2 w-56">
                                    <Link href="/services/installation" className="block px-4 py-2 hover:bg-gray-100">Fogging Installation</Link>
                                    <Link href="/services/amc" className="block px-4 py-2 hover:bg-gray-100">Maintenance & AMC</Link>
                                    <Link href="/services/rental" className="block px-4 py-2 hover:bg-gray-100">Equipment Rental</Link>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setOpenMenu("solutions")}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            <button className="flex items-center gap-1 hover:text-blue-300 transition">
                                SOLUTIONS <ChevronDown size={16} />
                            </button>
                            {openMenu === "solutions" && (
                                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-2 w-56">
                                    <Link href="/solutions/restaurants" className="block px-4 py-2 hover:bg-gray-100">Restaurants</Link>
                                    <Link href="/solutions/farmhouses" className="block px-4 py-2 hover:bg-gray-100">Farmhouses</Link>
                                    <Link href="/solutions/factories" className="block px-4 py-2 hover:bg-gray-100">Factories</Link>
                                    <Link href="/solutions/residential" className="block px-4 py-2 hover:bg-gray-100">Residential</Link>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setOpenMenu("resources")}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            <button className="flex items-center gap-1 hover:text-blue-300 transition">
                                RESOURCES <ChevronDown size={16} />
                            </button>
                            {openMenu === "resources" && (
                                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-2 w-56">
                                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                                    <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                                    <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Right side */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
                        <Link href="/login" className="hover:text-blue-300 transition">
                            LOG IN
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                            GET STARTED
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p>© 2026 Water Fogging Systems. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}