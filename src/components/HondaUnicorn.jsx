import React from "react";
import {
  ChevronRight,
  Star,
  Clock,
  Gauge,
  Fuel,
  Weight,
  Ruler,
  Battery,
  Shield,
  PaintBucket,
} from "lucide-react";

const HondaUnicorn = () => {
  const specs = [
    { icon: <Gauge />, label: "Engine", value: "162.71cc BS6" },
    { icon: <Battery />, label: "Power", value: "12.73 bhp" },
    { icon: <Clock />, label: "Top Speed", value: "106 km/h" },
    { icon: <Fuel />, label: "Mileage", value: "50 kmpl" },
    { icon: <Weight />, label: "Weight", value: "140 kg" },
    { icon: <Ruler />, label: "Seat Height", value: "798 mm" },
    { icon: <Shield />, label: "ABS", value: "Single Channel" },
    { icon: <PaintBucket />, label: "Colors", value: "6 Options" },
  ];

  const colors = [
    { name: "Imperial Red Metallic", class: "bg-red-600" },
    { name: "Pearl Siren Blue", class: "bg-blue-600" },
    { name: "Pearl Igneous Black", class: "bg-gray-900" },
    { name: "Mat Axis Gray Metallic", class: "bg-gray-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src="/api/placeholder/1200/800"
          alt="Honda Unicorn"
          className="w-full h-full object-cover opacity-75 mix-blend-overlay"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80">
          <div className="max-w-7xl mx-auto">
            <span className="inline-flex items-center gap-1 bg-yellow-500/90 text-black px-4 py-1 rounded-full text-sm font-medium mb-4">
              <Star size={16} />
              PREMIUM COMMUTER
            </span>
            <h1 className="text-4xl font-bold text-white mb-2">
              Honda Unicorn 2025
            </h1>
            <p className="text-xl text-white/90">Starting from ₹1,19,479</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-3">{spec.icon}</div>
              <p className="text-sm text-gray-500">{spec.label}</p>
              <p className="text-lg font-semibold">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Honda Unicorn is a well-regarded commuter motorcycle in India,
            known for its refined engine, comfortable ride, and fuel efficiency.
            The 2025 model comes with significant upgrades including a digital
            instrument cluster, LED headlamp, and a Type-C USB charging port.
          </p>
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xl font-semibold mb-4">Available Colors</h3>
            <div className="flex gap-4">
              {colors.map((color, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full ${color.class} shadow-md mb-2`}
                  ></div>
                  <p className="text-sm text-gray-600">{color.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price and Booking */}
        <div className="bg-blue-900 text-white rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to ride?</h2>
              <p className="text-white/80 mb-4">
                Book your Honda Unicorn today and experience the perfect blend
                of power and comfort.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <ChevronRight size={16} />
                  EMI starting from ₹4,618/month
                </p>
                <p className="flex items-center gap-2">
                  <ChevronRight size={16} />
                  Free service for first year
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-3xl font-bold mb-4">₹1,19,479</p>
              <a
                href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20Honda%20Unicorn"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:translate-x-1"
              >
                Book Now
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HondaUnicorn;
