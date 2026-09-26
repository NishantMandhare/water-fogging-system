import Link from "next/link";

export default function FaqPage() {
  const faqs = [
    {
      q: "How much does a fogging system cost?",
      a: "Cost depends on area size and requirements. Contact us for a free, customized quote.",
    },
    {
      q: "Do you provide AMC (Annual Maintenance Contract)?",
      a: "Yes, we offer flexible AMC plans with scheduled visits throughout the year.",
    },
    {
      q: "How long does installation take?",
      a: "Most residential and small commercial installations are completed within 1-2 days.",
    },
    {
      q: "Is the mist safe for plants and furniture?",
      a: "Yes, our fine mist is designed to cool the air without soaking surfaces, plants, or furniture.",
    },
    {
      q: "Can I rent equipment for a one-time event?",
      a: "Yes, we offer short-term rental options for weddings, parties, and seasonal events.",
    },
    {
      q: "Which areas do you service?",
      a: "We currently serve customers across Maharashtra, including Pune, Nashik, and surrounding areas.",
    },
  ];

  return (
    <div>
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-white/80 max-w-xl mx-auto">
          Everything you need to know about our fogging and mist cooling
          systems.
        </p>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {item.q}
              </h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Still Have Questions?
        </h2>
        <p className="text-blue-50 mb-8">
          Get in touch and we'll help you find the right solution.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition inline-block"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}