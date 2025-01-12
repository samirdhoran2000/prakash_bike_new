import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-black text-gray-300">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-black via-yellow-400 to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Company Info Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-2">
                  Hinjawadi Rides
                </h2>
                <p className="text-gray-400 max-w-sm">
                  Your premier destination for premium bike rentals in Mammoth,
                  California. Experience the thrill of the road with our
                  top-tier service.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-400">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-400 flex items-center justify-center 
                               transition-all duration-300 hover:transform hover:scale-110 group"
                      aria-label={label}
                    >
                      <Icon
                        size={20}
                        className="text-gray-300 group-hover:text-black transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <address className="not-italic text-gray-400 hover:text-gray-300 transition-colors">
                      Gurukrupa Sales and Services,
                      <br />
                      Lakshmi Chowk Road Hinjawadi,
                      <br />
                      Behind MRF Showroom,
                      <br />
                      Mukai Nagar, Hinjawadi-411057,
                      <br />
                      Pune, Maharashtra
                    </address>
                  </div>

                  <a
                    href="tel:+917378753636"
                    className="flex items-center space-x-3 group"
                  >
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                      +91 7378753636
                    </span>
                  </a>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-400">
                      24/7 Support Available
                    </span>
                  </div>

                  <a
                    href="mailto:contact@hinjawadibike.com"
                    className="flex items-center space-x-3 group"
                  >
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                      contact@hinjawadibike.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-yellow-400">Find Us</h3>
              <div
                className="relative rounded-lg overflow-hidden border-2 border-yellow-400/20 hover:border-yellow-400/50 
                            transition-all duration-300 shadow-lg hover:shadow-yellow-400/20"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.9210663529684!2d73.7354821376651!3d18.598310616009293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb1058e0556f%3A0xb0a9356c5227a980!2sGuru%20Krupa%20Bike%20Rentals!5e!3m2!1sen!2sin!4v1707385263850!5m2!1sen!2sin"
                  className="w-full h-64 md:grayscale grayscale-0 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="text-yellow-400">
                Gurukrupa Sales and Services
              </span>
              . All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
