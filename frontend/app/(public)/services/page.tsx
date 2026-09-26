export default function ServicesPage() {
    const services = [
        {
            icon: "🌫️",
            title: "Fogging System Installation",
            description:
                "Complete design and installation of high-pressure fogging systems for outdoor and semi-outdoor spaces.",
        },
        {
            icon: "❄️",
            title: "Mist Cooling Solutions",
            description:
                "Energy-efficient mist cooling for restaurants, patios, farms, and factories — up to 10°C temperature drop.",
        },
        {
            icon: "🔧",
            title: "Maintenance & AMC",
            description:
                "Flexible Annual Maintenance Contracts with scheduled service visits to keep your system running year-round.",
        },
        {
            icon: "📦",
            title: "Equipment Rental",
            description:
                "Short-term rental of fogging equipment for events, weddings, and seasonal cooling requirements.",
        },
        {
            icon: "🏭",
            title: "Industrial Cooling",
            description:
                "Large-scale fogging and dust-settling systems designed for factories and warehouses.",
        },
        {
            icon: "🏡",
            title: "Residential Cooling",
            description:
                "Compact, quiet systems for homes, balconies, and terraces at affordable prices.",
        },
    ];

    return (
        <div>
            <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 px-6 text-center">
                <h1 className="text-4xl font-bold text-white mb-2">Our Services</h1>
                <p className="text-blue-50">
                    Complete cooling solutions for every space.
                </p>
            </section>

            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}