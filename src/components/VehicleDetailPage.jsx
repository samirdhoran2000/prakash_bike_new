import React from "react";
import { ArrowLeft, Shield, Settings, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VehicleDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-yellow-400 mb-6 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft size={20} />
          Back to Listings
        </button>

        {/* Hero Section */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-8 border border-yellow-400/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/Tata_Altroz.jpeg"
              alt="Tata Altroz iCNG"
              className="w-full h-auto rounded-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                Tata Altroz iCNG
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                A premium hatchback that seamlessly integrates CNG technology
                without compromising on performance, safety, or comfort.
              </p>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20Tata%20Altroz%20iCNG."
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Book Now
                </a>
                <span className="text-2xl font-bold text-white/90 flex items-center">
                  ₹2999
                  <span className="text-white/60 text-base ml-1">/day</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Innovations */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-yellow-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Innovations</h2>
            </div>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Twin Cylinder Technology:
                </span>{" "}
                Optimized boot space with dual CNG cylinders
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Single Advanced ECU:
                </span>{" "}
                Smooth transitions between fuel modes
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Direct CNG Start:
                </span>{" "}
                Start directly in CNG mode
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Auto-Switch:
                </span>{" "}
                Automatic fuel mode switching
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Quick Refuel:
                </span>{" "}
                Special nozzle for faster refueling
              </li>
            </ul>
          </div>

          {/* Safety Features */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-yellow-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Safety</h2>
            </div>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Micro Switch:
                </span>{" "}
                Prevents accidental starts during refueling
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Advanced Materials:
                </span>{" "}
                Prevents gas leakage
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Thermal Protection:
                </span>{" "}
                Safety in high-temperature situations
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Leak Detection:
                </span>{" "}
                Automatic mode switch on gas leak
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Additional Features:
                </span>{" "}
                Dual airbags, ABS with EBD, Corner Stability Control
              </li>
            </ul>
          </div>

          {/* Comfort & Convenience */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-yellow-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Comfort</h2>
            </div>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Voice Sunroof:
                </span>{" "}
                Control via voice commands
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  iRA Technology:
                </span>{" "}
                Connected car features
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Premium Seats:
                </span>{" "}
                Luxurious fabric upholstery
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">
                  Stylish Wheels:
                </span>{" "}
                Dual-tone alloy design
              </li>
              <li className="text-gray-300">
                <span className="font-semibold text-yellow-400">Engine:</span>{" "}
                1.2L Revotron with 27.8 km/kg mileage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
