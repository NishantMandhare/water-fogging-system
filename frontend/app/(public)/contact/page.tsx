"use client";

import { useState } from "react";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const whatsappClass =
    "bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center gap-2";
  const callClass =
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center gap-2";

  const handleSubmit = async () => {
    setError("");

    if (!name.trim() || !mobile.trim() || !requirement.trim()) {
      setError("कृपया सगळी fields भरा.");
      return;
    }
    if (!/^\d{10}$/.test(mobile.trim())) {
      setError("कृपया वैध 10-digit mobile number टाका.");
      return;
    }

    setSubmitting(true);
    try {
      // TODO: replace with actual API call once backend is ready
      console.log("Form submitted:", { name, mobile, requirement });
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSubmitted(true);
      setName("");
      setMobile("");
      setRequirement("");
    } catch (err) {
      setError("काहीतरी चूक झाली, कृपया पुन्हा प्रयत्न करा.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-full py-16 px-6">
      <div className="max-w-2xl mx-auto mb-8 flex gap-4 flex-wrap justify-center">
        <a
          href="https://wa.me/918928657733"
          target="_blank"
          rel="noopener noreferrer"
          className={whatsappClass}
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>
        <a href="tel:+918928657733" className={callClass}>
          <Phone size={20} />
          Call Us Now
        </a>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="mx-auto text-green-500 mb-4" size={48} />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Thank you!
            </h2>
            <p className="text-gray-600 mb-6">
              तुमची request मिळाली आहे. आमची टीम लवकरच संपर्क करेल.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-blue-600 font-semibold hover:underline"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Request a Quote
            </h1>
            <p className="text-gray-600 mb-8">
              Fill the form below and our team will contact you soon.
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Patil"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What do you need?
                </label>
                <textarea
                  placeholder="e.g. Fogging system for farmhouse, 2000 sq ft"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition"
              >
                {submitting ? "Sending..." : "Submit Request"}
              </button>
            </div>
          </>
        )}
      </div>
    </div >
  );
}