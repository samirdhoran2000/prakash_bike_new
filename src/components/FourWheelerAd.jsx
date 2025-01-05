import React from "react";
import { ChevronRight, Users, Gauge, Fuel } from "lucide-react";

const FourWheelerAd = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400">Special Offer</h2>
          <p className="text-gray-400 mt-2">Premium Four Wheeler Available</p>
        </div>

        <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative h-64">
              {/* Replace '/car-image.jpg' with your actual car image path */}
              <img
                src="./Yellow_Bike.webp"
                alt="Four Wheeler"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">
                Your Car Model
              </h3>
              <p className="text-gray-300">
                Comfortable family car perfect for your journey. Available for
                daily and weekly rentals.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
                  <Users size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">5 Seater</span>
                </div>
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
                  <Gauge size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">15 km/l</span>
                </div>
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
                  <Fuel size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">Petrol</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="text-lg font-medium text-white/90">
                  ₹2999<span className="text-white/60">/day</span>
                </p>
                <a
                  href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20car%20rental."
                  className="inline-flex items-center gap-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:translate-x-1"
                >
                  Book Now
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourWheelerAd;
