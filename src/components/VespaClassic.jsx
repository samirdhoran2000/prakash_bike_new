import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Star,
  Clock,
  Gauge,
  Shield,
  Wrench,
  Palette,
  Battery,
} from "lucide-react";

const VespaClassic = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/api/placeholder/1200/800"
          alt="Vespa Classic"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <button
              onClick={() => navigate(-1)}
              className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
              Back
            </button>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                  <Star size={14} />
                  PREMIUM
                </span>
                <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Available
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Vespa Classic Series
              </h1>
              <p className="text-xl text-white/80">Vintage Meets Modern</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80">
                The Vespa Classic series offers a blend of vintage aesthetics
                and modern technology, available in both 125cc and 150cc
                variants. These scooters are designed for individuals who value
                style, comfort, safety, and agility.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: Wrench,
                  title: "Monocoque Chassis",
                  desc: "Patented design for durability",
                },
                {
                  icon: Shield,
                  title: "Safety Systems",
                  desc: "ABS/CBS equipped",
                },
                { icon: Battery, title: "USB Charging", desc: "Built-in port" },
                { icon: Clock, title: "Quick Start", desc: "Instant ignition" },
                {
                  icon: Palette,
                  title: "Color Options",
                  desc: "Multiple choices",
                },
                {
                  icon: Gauge,
                  title: "i-get Engine",
                  desc: "Smooth performance",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl space-y-3 hover:bg-white/10 transition-colors"
                >
                  <feature.icon className="text-yellow-400" size={24} />
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Design & Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Design and Features</h2>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-2">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  </div>
                  <p>
                    Timeless Aesthetics: The Vespa Classic combines futuristic
                    design with vintage elements, featuring sharp lines and bold
                    curves.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  </div>
                  <p>
                    Color Options: Available in a range of striking reds, blues,
                    and subtle hues to suit various styles.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  </div>
                  <p>
                    Utility Features: Includes ample under-seat storage, an
                    automatic boot lamp, and a conveniently located bag hook.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 space-y-6">
              <h2 className="text-xl font-bold">Models and Pricing</h2>
              <div className="space-y-4">
                {[
                  { model: "Classic VXL 125", price: "1,29,532" },
                  { model: "Classic VXL 150", price: "1,42,994" },
                  { model: "Classic ZX 125", price: "1,15,414" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span>{item.model}</span>
                    <span className="font-medium">₹{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20Vespa%20Classic."
                  className="block w-full text-center bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VespaClassic;
