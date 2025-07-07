import React from "react";
import { ChevronRight, Users, Gauge, Fuel, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FourWheelerAd = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // This navigation relies on react-router-dom setup in your main application.
    navigate("/vehicles/tata-altroz-icng");
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 animate-gradient-shift"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400 animate-fade-in-up">
            Special Offer
          </h2>
          <p className="text-gray-400 mt-2 animate-fade-in-up-delay">
            Tata Altroz iCNG - Premium Hatchback
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/80 animate-border-glow">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative h-64 flex items-center justify-center">
              <img
                src="/Tata_Altroz.jpeg"
                alt="Tata Altroz iCNG"
                className="w-full h-full object-contain animate-image-float"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400 animate-fade-in-up-delay-2">
                Tata Altroz iCNG
              </h3>
              <p className="text-gray-300 animate-fade-in-up-delay-3">
                Experience the perfect blend of performance and efficiency with
                the Tata Altroz iCNG. Featuring innovative Twin Cylinder
                Technology and advanced safety features.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg animate-icon-pop">
                  <Users size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">5 Seater</span>
                </div>
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg animate-icon-pop delay-1">
                  <Gauge size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">27.8 km/kg</span>
                </div>
                <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg animate-icon-pop delay-2">
                  <Fuel size={16} className="text-yellow-400/80 mb-1" />
                  <span className="text-xs text-white/60">CNG/Petrol</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  <button
                    onClick={handleReadMore}
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Shine effect for Read More button */}
                    <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine-button"></span>
                    <BookOpen size={16} />
                    <span>Read More</span>
                  </button>
                  <a
                    href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20Tata%20Altroz%20iCNG."
                    className="inline-flex items-center gap-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:translate-x-1 group relative overflow-hidden"
                  >
                    {/* Shine effect for Book Now button */}
                    <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine-button-delay"></span>
                    <span>Book Now</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
                <p className="text-lg font-medium text-white/90 animate-fade-in-up-delay-4">
                  ₹2999<span className="text-white/60">/day</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes image-float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes border-glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(252, 211, 77, 0.3); /* yellow-400/30 */
          }
          50% {
            box-shadow: 0 0 15px rgba(252, 211, 77, 0.7); /* yellow-400/70 */
          }
        }

        @keyframes icon-pop {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes shine-button {
          0% {
            transform: translateX(-100%) skewX(-30deg);
          }
          100% {
            transform: translateX(200%) skewX(-30deg);
          }
        }

        .animate-gradient-shift {
          background-size: 200% 100%; /* Ensure gradient covers more area for movement */
          animation: gradient-shift 30s linear infinite alternate;
        }

        .animate-image-float {
          animation: image-float 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0; /* Ensures element is hidden before animation */
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-4 {
          animation: fade-in-up 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite alternate;
        }

        .animate-icon-pop {
          animation: icon-pop 1.5s ease-in-out infinite alternate;
        }

        .animate-icon-pop.delay-1 {
          animation-delay: 0.3s;
        }
        .animate-icon-pop.delay-2 {
          animation-delay: 0.6s;
        }

        .animate-shine-button {
          animation: shine-button 2s infinite linear;
        }

        .animate-shine-button-delay {
          animation: shine-button 2s infinite linear 0.5s; /* Slightly delayed shine */
        }
      `}</style>
    </section>
  );
};

export default FourWheelerAd;
