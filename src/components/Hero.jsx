import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <header className="relative bg-black text-white min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 bg-no-repeat"
        style={{
          backgroundImage: "url('./Yellow_Bike.webp')",
        }}
      ></div>

      {/* Navigation */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-yellow-400 drop-shadow-lg">
          Hinjawadi Rides
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4 mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl">
          A futuristic journey begins with a single ride. Rent the yellow sports
          bike of tomorrow and conquer the roads of Hinjawadi, Pune,
          Maharashtra.
        </p>
        <a href="tel:+917378753636">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-bold text-base sm:text-lg hover:bg-transparent hover:text-yellow-400 border border-yellow-400 transition-all duration-300 transform hover:scale-105">
            Call Now
          </button>
        </a>
      </div>
    </header>
  );
};

export default Hero;
