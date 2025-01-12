import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Star, Clock, Gauge, Fuel } from "lucide-react";
import Modal from "./Modal";

const BikeCard = ({
  bikeId,
  imgSrc,
  bikeName,
  category,
  ammount,
  mileage,
  topSpeed,
  fuelType,
  desc,
  navigateTo
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <article className="relative group">
      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 border border-white/10 hover:border-yellow-500/20">
        {/* Category Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full text-xs font-medium">
            <Star size={10} className="text-yellow-400" />
            {category.toUpperCase()}
          </span>
        </div>

        {/* Image Container */}
        <div className="relative h-36 mb-3 rounded-lg overflow-hidden bg-gradient-to-b from-transparent to-black/30">
          <img
            className="w-full h-full object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 group-hover:scale-105"
            src={imgSrc}
            alt={`Image of ${bikeName}`}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h2 className="text-base font-medium text-white/90">{bikeName}</h2>
          <p className="text-xs text-white/60 line-clamp-2">{desc}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-1">
            <div className="flex flex-col items-center bg-white/5 p-1.5 rounded-lg">
              <Gauge size={12} className="text-yellow-400/80 mb-0.5" />
              <span className="text-xs text-white/60">{mileage}</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-1.5 rounded-lg">
              <Clock size={12} className="text-yellow-400/80 mb-0.5" />
              <span className="text-xs text-white/60">{topSpeed}</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-1.5 rounded-lg">
              <Fuel size={12} className="text-yellow-400/80 mb-0.5" />
              <span className="text-xs text-white/60">{fuelType}</span>
            </div>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <p className="text-sm font-medium text-white/80">
              ₹{ammount}
              <span className="text-white/60">/day</span>
            </p>
            <div className="flex gap-2">
              <button
                // onClick={() => navigate(navigateTo)}
                onClick={() => navigate('/bikes/comming_soon')}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Blog
                <ChevronRight size={12} />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 hover:translate-x-1"
              >
                Details
                <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        bike={{
          bikeId,
          imgSrc,
          bikeName,
          category,
          ammount,
          mileage,
          topSpeed,
          fuelType,
          desc,
          navigateTo
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </article>
  );
};

export default BikeCard;
