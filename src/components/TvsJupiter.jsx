import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Star,
  Clock,
  Gauge,
  Fuel,
  Shield,
  Smartphone,
  Battery,
  HardDrive,
} from "lucide-react";

const TvsJupiter = () => {
  const { id } = useParams();

  // In a real app, you'd fetch bike details based on id
  const bikeDetails = {
    name: "TVS Jupiter Disc SmartXonnect",
    price: "₹74,691",
    category: "Scooter",
    imgSrc: "/api/placeholder/800/400",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-b from-gray-800 to-gray-900">
        <Link
          to="/"
          className="absolute top-4 left-4 z-10 flex items-center gap-2 text-white/80 hover:text-white"
        >
          <ChevronLeft size={20} />
          Back
        </Link>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={bikeDetails.imgSrc}
            alt={bikeDetails.name}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900">
          <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
            <Star size={12} />
            {bikeDetails.category.toUpperCase()}
          </span>
          <h1 className="text-4xl font-bold mb-2">{bikeDetails.name}</h1>
          <p className="text-xl text-white/60">
            Starting from {bikeDetails.price}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Smartphone className="text-yellow-400" size={24} />,
              title: "SmartXonnect",
              description:
                "Bluetooth connectivity with voice navigation & alerts",
            },
            {
              icon: <Gauge className="text-yellow-400" size={24} />,
              title: "Engine",
              description: "113.3cc with 5.9 kW power output",
            },
            {
              icon: <Battery className="text-yellow-400" size={24} />,
              title: "iGO Assist",
              description: "10% more mileage with enhanced pickup",
            },
            {
              icon: <HardDrive className="text-yellow-400" size={24} />,
              title: "Storage",
              description: "33L under-seat storage for two helmets",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Features */}
        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">SmartXonnect Technology</h2>
            <p className="text-white/80 leading-relaxed">
              Experience next-level connectivity with smartphone integration via
              Bluetooth. Access voice-assisted navigation, receive call and SMS
              alerts, and monitor your smart mileage indicators right from your
              phone.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Comfort & Convenience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Storage Solutions
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li>• 33-liter under-seat storage</li>
                  <li>• 2-liter front glove box</li>
                  <li>• USB charging port</li>
                  <li>• Retractable bag hooks</li>
                </ul>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Riding Comfort</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Longest seat in segment</li>
                  <li>• Ergonomic controls</li>
                  <li>• Large front leg space</li>
                  <li>• Optimized pillion comfort</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Color Options */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Available Colors</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Dawn Blue Matte", color: "bg-blue-800" },
                { name: "Galactic Copper Matte", color: "bg-amber-600" },
                { name: "Starlight Blue Gloss", color: "bg-blue-500" },
                { name: "Titanium Grey Matte", color: "bg-gray-600" },
                { name: "Lunar White Gloss", color: "bg-gray-100" },
                { name: "Meteor Red Gloss", color: "bg-red-600" },
              ].map((color, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${color.color} shadow-lg mb-2`}
                  ></div>
                  <p className="text-sm text-white/60">{color.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Next Ride?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of technology and comfort with the TVS
            Jupiter Disc SmartXonnect.
          </p>
          <a
            href={`https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20TVS%20Jupiter%20Disc%20SmartXonnect.`}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Book Now
            <ChevronLeft size={20} className="rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TvsJupiter;
