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
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const navigate = useNavigate();
  return (
    <article className="relative group">
      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 border border-white/10 hover:border-yellow-500/20">
        {/* Category Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
            <Star size={12} className="text-yellow-400" />
            {category.toUpperCase()}
          </span>
        </div>

        {/* Image Container */}
        <div className="relative h-44 mb-4 rounded-lg overflow-hidden bg-gradient-to-b from-transparent to-black/30">
          <img
            className="w-full h-full object-contain mix-blend-luminosity hover:mix-blend-normal transform transition-all duration-500 group-hover:scale-105"
            src={imgSrc}
            alt={`Image of ${bikeName}`}
            loading="lazy"
          />
        </div>

        {/* AdSense Ad Unit */}
        {/* <div className="my-4">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div> */}

        {/* Content */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-white/90">{bikeName}</h2>
          <p className="text-sm text-white/60 line-clamp-2">{desc}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
              <Gauge size={14} className="text-yellow-400/80 mb-1" />
              <span className="text-xs text-white/60">{mileage}</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
              <Clock size={14} className="text-yellow-400/80 mb-1" />
              <span className="text-xs text-white/60">{topSpeed}</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-2 rounded-lg">
              <Fuel size={14} className="text-yellow-400/80 mb-1" />
              <span className="text-xs text-white/60">{fuelType}</span>
            </div>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <p className="text-sm font-medium text-white/80">
              ₹{ammount}<span className="text-white/60">/day</span>
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:translate-x-1"
            >
              Details
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Read Blog Button */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <button
              onClick={() => navigate(`/blog/${bikeId}`)}
              className="inline-flex items-center gap-1 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:translate-x-1"
            >
              Read Blog
              <ChevronRight size={14} />
            </button>
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
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </article>
  );
};

export default BikeCard;
