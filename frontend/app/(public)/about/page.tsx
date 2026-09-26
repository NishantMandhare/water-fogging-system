export default function AboutPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 px-6 text-center">
                <h1 className="text-4xl font-bold text-white mb-2">About Us</h1>
                <p className="text-blue-50">
                    Cooling Maharashtra, one installation at a time.
                </p>
            </section>

            {/* Our Story */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Founded with a simple goal — to make outdoor spaces comfortable
                        even in the harshest summer heat — Water Fogging Systems has
                        grown into a trusted name for cooling solutions across
                        Maharashtra.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From restaurants and farmhouses to factories and homes, we design
                        systems that reduce temperature, settle dust, and create better
                        environments — without the high running costs of traditional air
                        conditioning.
                    </p>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-600">
                            Deliver reliable, affordable cooling to every space that needs
                            it.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <div className="text-4xl mb-4">⭐</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Our Quality
                        </h3>
                        <p className="text-gray-600">
                            We use only high-grade components tested for Indian weather
                            conditions.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Our Promise
                        </h3>
                        <p className="text-gray-600">
                            Honest pricing and support that doesn't end after installation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}