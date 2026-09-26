"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSubmit = async () => {
    console.log("Form submitted:", name, mobile, requirement);
  };

  return (
    <div className="bg-gray-50 min-h-full py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h1>
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
              type="text"
              placeholder="10-digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}