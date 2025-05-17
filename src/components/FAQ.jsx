import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  // FAQ data in JSON format
  const faqData = [
    {
      question: "How do I rent a bike?",
      answer:
        "Renting a bike is easy! You can typically book directly through our website with just a few simple steps, or visit us in person at our convenient location.",
    },
    {
      question: "Can I book a bike in advance?",
      answer:
        "Absolutely! We highly recommend booking in advance, especially during busy seasons, to ensure you get the perfect bike for your adventure.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand plans can change. We offer a flexible cancellation policy. Please refer to our terms and conditions for specifics, but we aim to make it as hassle-free as possible for you.",
    },
    {
      question: "What happens if I need to change my booking?",
      answer:
        "No problem at all! Just contact us as soon as possible, and we'll do our best to accommodate your requested changes based on availability.",
    },
    {
      question:
        "How far in advance should I book, especially during peak season?",
      answer:
        "For the best selection, we recommend booking as far in advance as you can, particularly if you're planning your rental during weekends, holidays, or our peak season.",
    },
    {
      question: "Can I rent a bike for multiple days?",
      answer:
        "Yes, you certainly can! We offer convenient multi-day rental options so you can enjoy exploring at your own pace.",
    },
  ];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function for opening/closing FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
            Frequently Asked{" "}
            <span className="relative">
              Questions
              <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-400/30"></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our bike rental services. If
            you can&apos;t find what you&apos;re looking for, feel free to
            contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-yellow-400/20 rounded-lg overflow-hidden
                       hover:border-yellow-400/50 transition-all duration-300"
              >
                <button
                  className="w-full p-5 text-left bg-black/40 backdrop-blur-sm flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-lg font-semibold text-white">
                      {item.question}
                    </span>
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-400" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-5 bg-gray-900/80 text-gray-300 border-t border-yellow-400/20">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Launch Date Badge */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-2">
            <span className="text-yellow-400 font-semibold">
              New Bike Models Available
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 
                   rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
