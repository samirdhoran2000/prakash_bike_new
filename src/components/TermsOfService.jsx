import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="text-yellow-400 hover:text-yellow-300 mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-invert">
          <p className="text-gray-300 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              1. Rental Agreement
            </h2>
            <p className="text-gray-300">
              By renting a vehicle from Hinjawadi Rides, you agree to the
              following terms and conditions...
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              2. Eligibility Requirements
            </h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Must be 18 years or older</li>
              <li>Valid driver&apos;s license</li>
              <li>Valid insurance coverage</li>
              <li>Credit card for security deposit</li>
            </ul>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
