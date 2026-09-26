import Link from "next/link";
import Image from "next/image";

export default function RentalPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero-rental.jpg"
                        alt="Equipment rental"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 pt-40 pb-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Equipment Rental
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Short-term fogging equipment rental for events, weddings, and
                        seasonal cooling needs.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-gray-900 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition inline-block"
                    >
                        Get a Free Quote →
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        What's Included
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Flexible Duration
                            </h3>
                            <p className="text-gray-600">
                                Rent for a single day, a weekend event, or an entire summer
                                season.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Delivery & Setup
                            </h3>
                            <p className="text-gray-600">
                                We deliver, install, and remove the equipment — no hassle for
                                you.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                On-Call Support
                            </h3>
                            <p className="text-gray-600">
                                Our team is on standby during your event in case anything
                                needs adjusting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Planning an Event?
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