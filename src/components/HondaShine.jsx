import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Gauge,
  Weight,
  Fuel,
  Battery,
  Calendar,
//   Speedometer,
  Wrench,
  PaintBucket,
  CircleGauge,
} from "lucide-react";

const HondaShine = () => {
  const navigate = useNavigate();

  const colors = [
    { name: "Black", class: "bg-gray-900" },
    { name: "Rebel Red Metallic", class: "bg-red-600" },
    { name: "Geny Grey Metallic", class: "bg-gray-500" },
    { name: "Athletic Blue Metallic", class: "bg-blue-600" },
    { name: "Imperial Red Metallic", class: "bg-red-700" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-b from-gray-900 to-gray-800">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10 flex items-center gap-2 text-white/80 hover:text-white"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <img
          src="/api/placeholder/800/600"
          alt="Honda Shine"
          className="w-full h-full object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 -mt-20">
        <div className="bg-white rounded-xl shadow-xl p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Honda Shine
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-gray-900">
                ₹82,081
              </span>
              <span className="text-sm text-gray-500">Ex-showroom Price</span>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="text-gray-600" size={20} />
                <span className="text-sm text-gray-600">Engine</span>
              </div>
              <p className="font-medium">123.94cc</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Battery className="text-gray-600" size={20} />
                <span className="text-sm text-gray-600">Power</span>
              </div>
              <p className="font-medium">10.59 bhp</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Weight className="text-gray-600" size={20} />
                <span className="text-sm text-gray-600">Weight</span>
              </div>
              <p className="font-medium">113 kg</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Fuel className="text-gray-600" size={20} />
                <span className="text-sm text-gray-600">Mileage</span>
              </div>
              <p className="font-medium">55 kmpl</p>
            </div>
          </div>

          {/* Detailed Specs */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CircleGauge size={20} />
                Engine & Performance
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Engine Type</span>
                    <span>123.94cc, Single-cylinder</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Max Power</span>
                    <span>10.59 bhp @ 7,500 rpm</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Max Torque</span>
                    <span>11 Nm @ 5,500 rpm</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Transmission</span>
                    <span>5-speed manual</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Cooling</span>
                    <span>Air-cooled</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Starting</span>
                    <span>Electric/Kick</span>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Wrench size={20} />
                Features & Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Braking System</span>
                    <span>Combined Braking System (CBS)</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Front Suspension</span>
                    <span>Telescopic fork</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Rear Suspension</span>
                    <span>Dual spring-loaded hydraulic</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Fuel Tank Capacity</span>
                    <span>10.5 liters</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Seat Height</span>
                    <span>791 mm</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Ground Clearance</span>
                    <span>162 mm</span>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PaintBucket size={20} />
                Available Colors
              </h2>
              <div className="flex gap-4 flex-wrap">
                {colors.map((color) => (
                  <div key={color.name} className="text-center">
                    <div
                      className={`w-12 h-12 rounded-full ${color.class} shadow-lg mb-2`}
                    ></div>
                    <span className="text-sm text-gray-600">{color.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 flex justify-center">
            <a
              href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20Honda%20Shine"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Book Now
              <ArrowLeft size={20} className="rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HondaShine;
