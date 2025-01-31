import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Star,
  Gauge,
  Fuel,
  Clock,
  Shield,
  Layout,
  Smartphone,
  Ruler,
} from "lucide-react";

const TvsRaider125 = () => {
  const navigate = useNavigate();

  const specs = [
    { icon: <Ruler />, label: "Length", value: "2070 mm" },
    { icon: <Ruler />, label: "Width", value: "785 mm" },
    { icon: <Ruler />, label: "Height", value: "1028 mm" },
    { icon: <Ruler />, label: "Wheelbase", value: "1326 mm" },
    { icon: <Ruler />, label: "Ground Clearance", value: "180 mm" },
    { icon: <Gauge />, label: "Weight", value: "123 kg" },
    { icon: <Fuel />, label: "Fuel Capacity", value: "10 L" },
  ];

  const features = [
    {
      title: "Digital Console",
      desc: "Connected TFT console providing essential information and connectivity options",
      icon: <Layout />,
    },
    {
      title: "SmartXonnect",
      desc: "Connect your smartphone via TVS Connect app for navigation, voice commands, and more",
      icon: <Smartphone />,
    },
    {
      title: "Safety Features",
      desc: "240mm front disc brake and 130mm rear drum brake with Synchronized Braking Technology",
      icon: <Shield />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/api/placeholder/1200/600"
          alt="TVS Raider 125"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm transition-all"
        >
          <ChevronLeft size={20} />
          Back
        </button>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 -mt-32 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1">
              <Star size={14} />
              COMMUTER
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">TVS Raider 125</h1>
          <p className="text-lg text-gray-300">
            A commuter motorcycle combining sporty design with advanced features
            and efficient performance.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-yellow-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Specifications Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-gray-800/30 p-4 rounded-lg text-center"
              >
                <div className="text-yellow-400 flex justify-center mb-2">
                  {spec.icon}
                </div>
                <p className="text-sm text-gray-400 mb-1">{spec.label}</p>
                <p className="font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Performance</h2>
          <div className="bg-gray-800/30 rounded-xl p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Gauge className="text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">3-Valve Engine</h3>
                <p className="text-gray-400">
                  Best-in-class pickup and performance
                </p>
              </div>
              <div>
                <Fuel className="text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">67 km/l</h3>
                <p className="text-gray-400">Impressive fuel efficiency</p>
              </div>
              <div>
                <Clock className="text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Responsive</h3>
                <p className="text-gray-400">Quick acceleration and handling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Section */}
        <div className="text-center py-12 bg-gradient-to-t from-gray-800/50 to-transparent rounded-xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Next Ride?</h2>
          <p className="text-gray-300 mb-6">
            Experience the perfect blend of performance and comfort
          </p>
          <a
            href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20TVS%20Raider%20125"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Book Now
            <ChevronLeft size={20} className="rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TvsRaider125;
