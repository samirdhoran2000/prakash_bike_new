import React from "react";
import { ChevronRight, Users, Gauge, Fuel, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FourWheelerAd = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/vehicles/tata-altroz-icng");
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400">Special Offer</h2>
          <p className="text-gray-400 mt-2">
            Tata Altroz iCNG - Premium Hatchback
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative h-64">
              <img
                src="/Tata_Altroz.jpeg"
                alt="Tata Altroz iCNG"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">
                Tata Altroz iCNG
              </h3>
              <p className="text-gray-300">
                Experience the perfect blend of performance and efficiency with
                the Tata Altroz iCNG. Featuring innovative Twin Cylinder
                Technology and advanced safety features.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
                  <Users size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">5 Seater</span>
                </div>
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
                  <Gauge size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">27.8 km/kg</span>
                </div>
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
                  <Fuel size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">CNG/Petrol</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  <button
                    onClick={handleReadMore}
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    <BookOpen size={16} />
                    Read More
                  </button>
                  <a
                    href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20Tata%20Altroz%20iCNG."
                    className="inline-flex items-center gap-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:translate-x-1"
                  >
                    Book Now
                    <ChevronRight size={16} />
                  </a>
                </div>
                <p className="text-lg font-medium text-white/90">
                  ₹2999<span className="text-white/60">/day</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourWheelerAd;
