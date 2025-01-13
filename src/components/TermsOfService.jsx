import { FileText } from "lucide-react";
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
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="text-yellow-500 w-6 h-6" />
          <h1 className="text-3xl font-bold text-yellow-500">
            Terms of Service
          </h1>
        </div>
        <p className="mb-6">
          Welcome to{" "}
          <span className="font-bold text-yellow-500">Hinjawadi Rides</span>! (
          <a
            href="https://hinjawadibike.com"
            className="text-yellow-400 underline"
          >
            https://hinjawadibike.com
          </a>
          )
        </p>
        <p className="mb-6">
          These Terms of Service (&ldquo;Terms&ldquo;) govern your use of our website and
          the bicycle rental services offered by{" "}
          <span className="font-bold text-yellow-500">Hinjawadi Rides</span>{" "}
          (&ldquo;Services&ldquo;). By accessing or using our website or Services, you agree
          to be bound by these Terms.
        </p>
        <div className="space-y-6">
          {/* Section */}
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              1. Eligibility
            </h2>
            <p>
              You must be at least 18 years old and legally capable of entering
              into contracts to use the Services.
            </p>
          </section>
          {/* Section */}
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              2. Services Offered
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold text-yellow-400">Rental Bikes</span>:
                We provide a variety of bicycles for rent on a short-term or
                long-term basis.
              </li>
              <li>
                <span className="font-bold text-yellow-400">
                  Sale & Service
                </span>
                : We offer bicycles for purchase as well as repair and
                maintenance services.
              </li>
            </ul>
          </section>
          {/* Section */}
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              3. Rental Bike Terms
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-yellow-300">
                  3.1 Booking and Payment
                </h3>
                <p>
                  Rentals can be booked online or on-site at our location.
                  Payment is due at the time of booking or pickup.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-300">
                  3.2 Rental Period and Rates
                </h3>
                <p>
                  Rental periods and rates will be clearly displayed on the
                  website during booking. Late returns are subject to additional
                  charges.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-300">
                  3.3 Rider Responsibility
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    You are responsible for the safe and proper use of the
                    rented bicycle.
                  </li>
                  <li>Follow all traffic laws and regulations while riding.</li>
                  <li>We recommend wearing a helmet for safety.</li>
                </ul>
              </div>
            </div>
          </section>
          {/* Additional Sections */}
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              4. Sale & Service Terms
            </h2>
            <p>
              We offer bicycles for sale and a variety of repair and maintenance
              services. Prices will be communicated clearly.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              5. Disclaimer of Warranties
            </h2>
            <p>
              The Services, bicycles, and products are provided &ldquo;as is&ldquo; without
              warranties of any kind.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              Hinjawadi Rides is not liable for any damages arising from the use
              of our services or products.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Hinjawadi Rides from
              claims arising from your use of the Services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              8. Termination
            </h2>
            <p>
              We may terminate your access to the website and Services at any
              time without notice.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              9. Governing Law
            </h2>
            <p>
              These Terms shall be governed by the laws of [Insert your country
              here].
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">
              10. Contact Us
            </h2>
            <p>
              If you have any questions, please contact us at{" "}
              <a
                href="mailto:contact@hinjawadibike.com"
                className="text-yellow-400 underline"
              >
                contact@hinjawadibike.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
