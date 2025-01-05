import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="relative z-20 px-4 sm:px-6 lg:px-8 py-4 bg-black bg-opacity-80">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-extrabold text-yellow-400 tracking-wide">
            SHIFT
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
            <li>
              <a
                href="#services"
                className="hover:text-yellow-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-80 border-t border-gray-800">
            <ul className="px-4 py-4 space-y-4 flex flex-col justify-center items-center">
              <li>
                <a
                  href="#services"
                  className="block text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-yellow-400 drop-shadow-lg">
          SHIFT
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4 mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl">
          A futuristic journey begins with a single ride. Rent the yellow sports
          bike of tomorrow and conquer the roads of Mammoth, California.
        </p>
          <a
                    href="tel:+917378753636"
                  >
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-bold text-base sm:text-lg hover:bg-transparent hover:text-yellow-400 border border-yellow-400 transition-all duration-300 transform hover:scale-105">
          Call Now
        </button></a>
      </div>
    </header>
  );
};

export default Hero;
