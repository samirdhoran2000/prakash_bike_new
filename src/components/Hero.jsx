import { useState, useEffect } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background with continuous animation */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 bg-no-repeat"
        style={{
          backgroundImage: "url('./Yellow_Bike.webp')",
        }}
      ></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 animate-custom-pulse"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => {
          const particleSize = `${5 + Math.random() * 10}px`; // Generate one random size
          const pulseDuration = `${Math.random() * (5 - 2 + 1) - 2}s`; // Random pulse duration between 5s and 10s
          return (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-400 opacity-70 animate-float animate-custom-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 10}s`, // Float animation duration
                animationDelay: `${Math.random() * 7}s`,
                width: particleSize,
                height: particleSize,
                animation: `custom-pulse ${pulseDuration} cubic-bezier(0.4, 0, 0.6, 1) infinite, float ${
                  3 + Math.random() * 10
                }s linear infinite` /* Combined animations */,
              }}
            ></div>
          );
        })}
      </div>

      {/* Animated circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0">
        {[...Array(4)].map((_, i) => {
          const animationDuration = `${4 + Math.random() * 4}s`; // Random duration between 4s and 8s for frequency
          const animationDelay = `${Math.random() * 2}s`; // Random delay up to 2s
          const rotation = `${Math.random() * 360}deg`; // Random rotation for "direction"
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-yellow-400/30 rounded-full animate-ping"
              style={{
                width: `${(i + 1) * 100}px`,
                height: `${(i + 1) * 100}px`,
                animationDuration: animationDuration,
                animationDelay: animationDelay,
                transform: `translate(-50%, -50%) rotate(${rotation})` /* Apply random rotation */,
              }}
            ></div>
          );
        })}
      </div>

      {/* Animated diagonal lines */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(6)].map((_, i) => {
          const animationDuration = `${6 + Math.random() * 6}s`; // Random duration between 6s and 12s
          const animationDelay = `${Math.random() * 5}s`; // Random delay up to 5s
          const rotation = `${10 + Math.random() * 10}deg`; // Random rotation between 10deg and 20deg
          const topPosition = `${Math.random() * 100}%`; // Random vertical position

          return (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent animate-slidein"
              style={{
                top: topPosition,
                left: "-100%",
                width: "300%",
                transform: `rotate(${rotation})`,
                animationDuration: animationDuration,
                animationDelay: animationDelay,
              }}
            ></div>
          );
        })}
      </div>

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-4 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-scanline"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 animate-pulse">
          Hinjawadi Rides
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-6 mb-10 max-w-xl sm:max-w-2xl lg:max-w-3xl">
          A futuristic journey begins with a single ride. Rent the yellow sports
          bike of tomorrow and conquer the roads of Hinjawadi, Pune,
          Maharashtra.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a href="tel:+917378753636" className="group">
            <button className="relative flex items-center justify-center gap-2 bg-black border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-bold text-base sm:text-lg overflow-hidden">
              {/* Button animation overlay */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 animate-shine"></div>
              </div>

              {/* Button content */}
              <Phone className="animate-bounce" size={20} />
              <span>Call Now</span>
            </button>
          </a>

          <a href="mailto:contact@hinjawadirides.com" className="group">
            <button className="relative flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-base sm:text-lg overflow-hidden">
              {/* Button animation overlay */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 animate-shine"></div>
              </div>

              {/* Button content */}
              <Mail className="animate-bounce" size={20} />
              <span>Contact Us</span>
            </button>
          </a>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-yellow-400" size={32} />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.2);
          }
        }

        @keyframes slidein {
          0% {
            transform: translateX(-100%) rotate(15deg);
          }
          100% {
            transform: translateX(100%) rotate(15deg);
          }
        }

        @keyframes scanline {
          0% {
            top: -5%;
          }
          100% {
            top: 105%;
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }

        .animate-slidein {
          animation: slidein infinite linear;
        }

        .animate-scanline {
          animation: scanline 4s infinite linear;
        }

        .animate-shine {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shine 3s infinite;
        }

        /* Custom Keyframes for the Pulse Animation */
        @keyframes custom-pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        /* Custom Class to apply the animation */
        .animate-custom-pulse {
          animation: custom-pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </header>
  );
};

export default Hero;
