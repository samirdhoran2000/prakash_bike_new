import { Mail, Shield } from "lucide-react";
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
        {/* Header Section */}
        <div className="flex items-center mb-6 text-yellow-400">
          <Shield className="w-8 h-8" />
          <h1 className="ml-3 text-3xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Effective Date: January 13, 2025
        </p>
        <p className="mb-6">
          This Privacy Policy describes how Hinjawadi Rides (&ldquo;we,&ldquo; &ldquo;us,&ldquo; or
          &ldquo;our&ldquo;) collects, uses, and discloses your information when you use our
          website,{" "}
          <a
            href="https://hinjawadibike.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            https://hinjawadibike.com/
          </a>{" "}
          (the &ldquo;Site&ldquo;).
        </p>

        {/* Information We Collect */}
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Information We Collect
        </h2>
        <p className="mb-4">We collect two types of information on the Site:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Personal Information:</span> This
            includes information that can be used to identify you, such as your
            name, billing address, shipping address, email address, and phone
            number. We only collect this information when you choose to provide
            it.
          </li>
          <li>
            <span className="font-semibold">Device Information:</span> We
            automatically collect certain information about your device when you
            visit the Site, such as browser type, IP address, time zone,
            cookies, and interactions with the Site.
          </li>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            To process your rental bike reservations and provide customer
            service.
          </li>
          <li>
            To understand how you use the Site and improve its functionality.
          </li>
          <li>To personalize content and offers you see on the Site.</li>
          <li>
            To show you targeted advertising through third-party advertising
            companies.
          </li>
        </ul>

        {/* Google AdSense */}
        <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">
          Google AdSense
        </h2>
        <p className="mb-4">
          Our Site uses Google AdSense to display advertisements. You can learn
          more about Google&apos;s privacy practices and opt out of personalized
          advertising by visiting their{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Advertising Privacy Page
          </a>
          .
        </p>

        {/* Children's Privacy */}
        <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">
          Children&apos;s Privacy
        </h2>
        <p className="mb-4">
          Our Site is not directed to children under the age of 13. We do not
          knowingly collect personal information from children under 13. If we
          become aware of such data, we will delete it.
        </p>

        {/* Contact Us */}
        <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">
          Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, feel free to
          contact us at:
        </p>
        <div className="flex items-center mt-2">
          <Mail className="w-5 h-5 text-yellow-400" />
          <a
            href="mailto:contact@hinjawadibike.com"
            className="ml-2 text-yellow-400 hover:underline"
          >
            contact@hinjawadibike.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
