import Link from "next/link";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-700">
                        💧 Water Fogging Systems
                    </div>
                    <nav className="flex gap-8 text-gray-700 font-medium">
                        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                        <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
                        <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
                    </nav>
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