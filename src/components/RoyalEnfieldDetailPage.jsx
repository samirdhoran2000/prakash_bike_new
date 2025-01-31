// DetailPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Heart,
  Share2,
  Camera,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const DetailPage = () => {
  const { id } = useParams();
  const [isSpecsVisible, setIsSpecsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images array - replace with your actual images
  const images = [
    "/Royal_Enfield_Classic_350.png",
    "/Royal_Enfield_Classic_350.png",
    "/Royal_Enfield_Classic_350.png",
  ];

  const specifications = {
    engine: {
      displacement: "349cc",
      type: "Air-oil cooled, single-cylinder",
      maxPower: "20.2 bhp @ 6,100 rpm",
      maxTorque: "27 Nm @ 4,000 rpm",
      transmission: "5-speed gearbox",
    },
    chassis: {
      frame: "Twin downtube spine frame",
      frontSuspension: "41mm telescopic forks, 130mm travel",
      rearSuspension: "Twin-tube emulsion shock absorbers, 80mm travel",
      frontBrake: "300mm disc",
      rearBrake: "270mm disc",
    },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white/90">
      {/* Hero Section with Image Gallery */}
      <div className="relative h-96 bg-black">
        <img
          src={images[currentImageIndex]}
          alt={`Royal Enfield Classic 350 - View ${currentImageIndex + 1}`}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Navigation and Actions */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white/90"
          >
            <ChevronLeft size={20} />
            Back to Bikes
          </Link>
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
              <Share2 size={20} />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
              <Camera size={20} />
            </button>
          </div>
        </div>

        {/* Title and Overview */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Royal Enfield Classic 350
            </h1>
            <div className="flex gap-4 text-sm">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                Classic Series
              </span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                Available Now
              </span>
            </div>
          </div>

          <p className="text-xl text-white/80 leading-relaxed">
            The Royal Enfield Classic 350 is a motorcycle that blends timeless
            design with modern engineering, drawing inspiration from the 1950
            Royal Enfield G2 model.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Iconic Design
            </h3>
            <p className="text-white/70">
              Classic teardrop tank, distinctive thump, and hallmark casquette
              headlamp
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Superior Comfort
            </h3>
            <p className="text-white/70">
              Upright riding posture with ample cushioning and ergonomic
              controls
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Modern Performance
            </h3>
            <p className="text-white/70">
              349cc engine with advanced technology for smooth, reliable rides
            </p>
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="mt-12">
          <button
            onClick={() => setIsSpecsVisible(!isSpecsVisible)}
            className="w-full flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
          >
            <span className="text-lg font-semibold">
              Technical Specifications
            </span>
            <ChevronDown
              size={20}
              className={`transform transition-transform ${
                isSpecsVisible ? "rotate-180" : ""
              }`}
            />
          </button>

          {isSpecsVisible && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/5 rounded-xl">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                  Engine
                </h3>
                <ul className="space-y-3">
                  {Object.entries(specifications.engine).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-white/60">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      <span className="text-white/90">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                  Chassis
                </h3>
                <ul className="space-y-3">
                  {Object.entries(specifications.chassis).map(
                    ([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="text-white/60">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                        <span className="text-white/90">{value}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Booking Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Ready for an Adventure?
          </h3>
          <p className="text-white/80 mb-6">
            Experience the legendary Royal Enfield Classic 350 yourself. Book
            now for a test ride or rental.
          </p>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20Royal%20Enfield%20Classic%20350.`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:translate-x-1"
            >
              Book Now
              <ChevronRight size={20} />
            </a>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
