import React from "react";
import { ChevronRight, Award, Clock, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Premium Quality",
      description:
        "Our fleet consists of well-maintained bikes that undergo regular service checks",
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you with any queries or concerns",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Expert Team",
      description:
        "Professional team with years of experience in bike rentals and maintenance",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-4">
            About SHIFT
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img
                src="./Sun_Bike.webp"
                alt="About SHIFT"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 bg-yellow-400 text-black p-4 rounded-lg">
              <p className="text-2xl font-bold">5+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">
              Your Premier Destination for Premium Bike Rentals
            </h3>
            <p className="text-gray-300 leading-relaxed">
              At SHIFT, we&apos;re passionate about providing exceptional bike rental
              experiences. Founded in 2018, we&apos;ve been serving riders with a
              curated fleet of well-maintained bikes, personalized service, and
              competitive rates.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-400/20
                           hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 
                       rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
            >
              Contact Us
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
