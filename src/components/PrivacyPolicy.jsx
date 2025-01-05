import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <div className="prose prose-invert">
          <p className="text-gray-300 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-300">
              We collect information that you provide directly to us when making
              a reservation, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Name and contact information</li>
              <li>Driver&apos;s license details</li>
              <li>Payment information</li>
              <li>Rental preferences and history</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-300">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Process your reservations</li>
              <li>Communicate with you about your rentals</li>
              <li>Improve our services</li>
              <li>Send promotional materials (with your consent)</li>
            </ul>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
