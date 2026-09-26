import Link from "next/link";
import Image from "next/image";

export default function FactoriesPage() {
    return (
        <div>
            <section className="relative bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/solution-factories.jpg"
                        alt="Factory fogging system"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 pt-40 pb-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Cooling for Factories
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Reduce heat and settle airborne dust on the factory floor,
                        keeping workers safe and productive.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-gray-900 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition inline-block"
                    >
                        Get a Free Quote →
                    </Link>
                </div>
            </section>

            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Why Factories Choose Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Dust Suppression
                            </h3>
                            <p className="text-gray-600">
                                Fine mist settles airborne dust particles, improving air
                                quality on the floor.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Worker Safety
                            </h3>
                            <p className="text-gray-600">
                                Lower ambient temperature reduces heat stress for staff
                                during long shifts.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Industrial-Grade Build
                            </h3>
                            <p className="text-gray-600">
                                High-pressure pumps and piping designed for continuous,
                                heavy-duty use.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Cool Your Facility?
                </h2>
                <p className="text-blue-50 mb-8">
                    Get a free, no-obligation quote today.
                </p>
                <Link
                    href="/contact"
                    className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition inline-block"
                >
                    Get a Free Quote
                </Link>
            </section>
        </div>
    );
}