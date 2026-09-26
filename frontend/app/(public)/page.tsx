import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Beat the Heat with Professional Water Fogging Systems
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Cooling solutions for restaurants, farms, factories, and homes —
            installed and maintained by experts across Maharashtra.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We design, install, and maintain high-pressure water fogging and
            mist cooling systems for restaurants, farmhouses, factories, and
            residential spaces. Our systems reduce temperatures by up to 10°C,
            settle dust, and create a comfortable outdoor environment —
            without the cost of traditional air conditioning.
          </p>
        </div>
      </section>

      {/* Services Glimpse Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌫️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fogging Installation
              </h3>
              <p className="text-gray-600">
                Complete setup of high-pressure fogging systems tailored to
                your space.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Maintenance & AMC
              </h3>
              <p className="text-gray-600">
                Annual maintenance contracts to keep your system running
                smoothly year-round.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Equipment Rental
              </h3>
              <p className="text-gray-600">
                Short-term rental options for events and seasonal cooling
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Installations Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-gray-600 italic mb-4">
                "Excellent installation and the team was very professional.
                Our restaurant's outdoor seating is so much cooler now."
              </p>
              <p className="font-semibold text-gray-900">— Rajesh Deshmukh</p>
              <p className="text-sm text-gray-500">Restaurant Owner, Nashik</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-gray-600 italic mb-4">
                "Quick response for AMC service calls. Highly recommend for
                farmhouse cooling needs."
              </p>
              <p className="font-semibold text-gray-900">— Sunita Patil</p>
              <p className="text-sm text-gray-500">Farmhouse Owner, Pune</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                How much does a fogging system cost?
              </h3>
              <p className="text-gray-600">
                Cost depends on area size and requirements. Contact us for a
                free, customized quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Do you provide AMC (Annual Maintenance Contract)?
              </h3>
              <p className="text-gray-600">
                Yes, we offer flexible AMC plans with scheduled visits
                throughout the year.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                How long does installation take?
              </h3>
              <p className="text-gray-600">
                Most residential and small commercial installations are
                completed within 1-2 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Beat the Heat?
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