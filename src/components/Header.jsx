import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center space-x-2">
              <img
                src="/Bike_Logo.png"
                alt="Hinjawadi Rides Logo"
                className={`transition-all duration-300
                   w-8 h-8 md:w-10 md:h-10
                `}
              />
              <div
                className={`font-extrabold text-yellow-400 tracking-wide transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl sm:text-2xl"
                }`}
              >
                Hinjawadi Rides
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#services"
                className="hover:text-yellow-400 transition-colors text-white"
              >
                Services
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition-colors text-white"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-colors text-white"
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-black shadow-lg">
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
                <Link
                  to="/about"
                  className="block text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
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
      </div>
    </nav>
  );
};

export default Header;
