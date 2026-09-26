import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-nozzle-closeup.jpg"
            alt="About Water Fogging Systems"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 pt-40 pb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            10+ years of designing and installing mist cooling systems across
            Maharashtra.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We started with a simple goal — help people beat the heat without
            the high cost and environmental impact of traditional air
            conditioning. Since then, we've installed over 500 fogging and
            mist cooling systems for restaurants, farmhouses, factories, and
            homes across the region.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every system we build is custom designed for the space, tested
            thoroughly, and backed by responsive AMC support — because
            cooling shouldn't stop working when you need it most.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
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

      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let's Cool Your Space
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