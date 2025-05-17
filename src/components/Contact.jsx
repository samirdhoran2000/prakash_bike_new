import React, { useState } from "react";
import { Phone, Mail, Send, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // if (!formData.lastName.trim()) {
    //   newErrors.lastName = "Last name is required";
    // }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required";
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = "Email address is invalid";
    // }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Format WhatsApp message
    const whatsappMessage = `Hello Hinjawadi Rides! My name is ${
      formData.firstName
    } ${formData.lastName}. ${
      formData.message ? formData.message : "I'm interested in renting a bike."
    }`;

    // Create WhatsApp URL with phone number and encoded message
    const whatsappUrl = `https://wa.me/917378753636?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
            Get In{" "}
            <span className="relative">
              Touch
              {/* <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-400/30"></span> */}
            </span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or ready to rent a bike? Fill out the form below or
            contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-400/10 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+917378753636"
                      className="text-lg font-medium hover:text-yellow-400 transition-colors"
                    >
                      (+91) 73787-53636
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-yellow-400/10 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:contact@hinjawadibike.com"
                      className="text-lg font-medium hover:text-yellow-400 transition-colors"
                    >
                      contact@hinjawadibike.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-yellow-400/10 p-3 rounded-full mr-4">
                    <MessageSquare className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <a
                      href="https://wa.me/917378753636"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium hover:text-yellow-400 transition-colors"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/30">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-yellow-400">
                    Opening Hours:
                  </span>
                  <br />
                  Monday to Sunday: 7:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-yellow-400/20">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-300 mb-1 text-sm"
                  >
                    First Name <span className="text-yellow-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 border ${
                        errors.firstName ? "border-red-500" : "border-gray-700"
                      } 
                               rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-yellow-400 transition-colors`}
                      placeholder="John"
                    />
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-300 mb-1 text-sm"
                  >
                    Last Name {/* <span className="text-yellow-400">*</span> */}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 border ${
                        errors.lastName ? "border-red-500" : "border-gray-700"
                      } 
                               rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-yellow-400 transition-colors`}
                      placeholder="Doe"
                    />
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-1 text-sm"
                >
                   Email {/*<span className="text-yellow-400">*</span> */}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } 
                             rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-yellow-400 transition-colors`}
                    placeholder="john.doe@example.com"
                  />
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Phone <span className="text-yellow-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 border ${
                      errors.phone ? "border-red-500" : "border-gray-700"
                    } 
                             rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-yellow-400 transition-colors`}
                    placeholder="9876543210"
                  />
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white 
                         focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-black p-3 
                       rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Contact via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            By contacting us, you agree to our{" "}
            <Link to="/privacy" className="text-yellow-400 hover:underline">
              Privacy Policy
            </Link>
            . We&apos;ll never share your information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
