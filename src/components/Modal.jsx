import { ChevronRight, Star, Clock, Gauge, Fuel } from "lucide-react";

const Modal = ({ bike, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl bg-gray-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white/90 transition-colors"
        >
          ×
        </button>

        <div className="p-6">
          {/* Image Section */}
          <div className="relative h-56 mb-6 rounded-lg overflow-hidden bg-gradient-to-b from-transparent to-black/5">
            <img
              src={bike.imgSrc}
              alt={bike.bikeName}
              className="w-full h-full object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                <Star size={12} />
                {bike.category.toUpperCase()}
              </span>
              <h2 className="text-2xl font-medium text-white/90">{bike.bikeName}</h2>
            </div>

            <p className="text-white/60">{bike.desc}</p>

            {/* Specifications */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg space-y-2">
                <div className="flex justify-center">
                  <Gauge className="text-yellow-400/80" size={20} />
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/60">Mileage</p>
                  <p className="text-sm font-medium text-white/90">{bike.mileage}</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg space-y-2">
                <div className="flex justify-center">
                  <Clock className="text-yellow-400/80" size={20} />
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/60">Top Speed</p>
                  <p className="text-sm font-medium text-white/90">{bike.topSpeed}</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg space-y-2">
                <div className="flex justify-center">
                  <Fuel className="text-yellow-400/80" size={20} />
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/60">Fuel Type</p>
                  <p className="text-sm font-medium text-white/90">{bike.fuelType}</p>
                </div>
              </div>
            </div>

            {/* Price and Action */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <p className="text-lg font-medium text-white/90">
                ₹{bike.ammount}<span className="text-white/60">/day</span>
              </p>
              <a
                href={`https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20${bike.bikeName}.`}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:translate-x-1"
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
export default Modal;
