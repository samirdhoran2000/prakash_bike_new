import { useState } from 'react';
import {
  Phone,
  Mail,
  Globe,
  Menu,
  X,
  MessageCircle,
  FileText,
  Users,
  Monitor,
} from "lucide-react";

const WebAgencySite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const portfolioItems = [
      {
        id: 1,
        category: "Goals",
        image: "/api/placeholder/600/400",
        bgColor: "bg-gray-100",
      },
      {
        id: 2,
        category: "Qualities",
        image: "/api/placeholder/600/400",
        bgColor: "bg-green-50",
      },
      {
        id: 3,
        category: "Benefits",
        image: "/api/placeholder/600/400",
        bgColor: "bg-pink-50",
      },
      {
        id: 4,
        category: "Computing",
        image: "/api/placeholder/600/400",
        bgColor: "bg-green-50",
      },
      {
        id: 5,
        category: "Fitness",
        image: "/api/placeholder/600/400",
        bgColor: "bg-pink-50",
      },
      {
        id: 6,
        category: "Budget",
        image: "/api/placeholder/600/400",
        bgColor: "bg-blue-50",
      },
    ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-pink-600 rounded-full"></div>
          <span className="ml-2 font-bold text-sm md:text-base">
            SOMEWHEREDIGITAL
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X color="black" /> : <Menu color="black" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            Possesser
          </a>
          <a href="#" className="text-gray-600">
            Follow
          </a>
          <a href="#" className="text-gray-600">
            About
          </a>
          <a href="#" className="text-gray-600">
            Projects
          </a>
          <a href="#" className="text-gray-600">
            Results
          </a>
          <button className="px-4 py-2 text-white bg-black rounded">
            Contact
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-50">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600">
                Home
              </a>
              <a href="#" className="text-gray-600">
                Possesser
              </a>
              <a href="#" className="text-gray-600">
                Follow
              </a>
              <a href="#" className="text-gray-600">
                About
              </a>
              <a href="#" className="text-gray-600">
                Projects
              </a>
              <a href="#" className="text-gray-600">
                Results
              </a>
              <button className="px-4 py-2 text-white bg-black rounded w-full">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-64 md:h-96">
        <img
          src="/api/placeholder/1200/400"
          alt="San Francisco Bridge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16">
          <p className="text-pink-600 text-sm md:text-base">Power & Research</p>
          <h1 className="text-3xl md:text-5xl font-bold text-black mt-2">
            Web Development
            <br />
            Development Agency
          </h1>
          <p className="mt-4 text-gray-800 max-w-xl text-sm md:text-base">
            Get to know who. Web development with striking major project teams
            development right and proud with a the billion off theremoval
            genius, measuring history signature.
          </p>
          <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 bg-pink-600 text-white rounded-md w-fit text-sm md:text-base">
            Call now free
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 md:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-orange-50 p-4 md:p-6 rounded-lg">
            <img
              src="/api/placeholder/100/100"
              alt="Feature 1"
              className="mb-4"
            />
          </div>
          <div className="bg-green-50 p-4 md:p-6 rounded-lg">
            <img
              src="/api/placeholder/100/100"
              alt="Feature 2"
              className="mb-4"
            />
          </div>
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
            <img
              src="/api/placeholder/100/100"
              alt="Feature 3"
              className="mb-4"
            />
          </div>
          <div className="bg-pink-50 p-4 md:p-6 rounded-lg flex items-start">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Eatrp Catorain?
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Swiftly push some true reality enhance and receive hit still
                your very answer wherever answer shared every point.
              </p>
              <button className="px-4 py-2 bg-pink-600 text-white rounded text-sm md:text-base">
                Connect free
              </button>
            </div>
          </div>
        </div>
      </div>
      <FeatureSection />

      {/* Agency Section */}
      <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-pink-500 text-sm mb-4">Our Services</p>
            <h1 className="text-4xl font-bold mb-4">Aman Qvartinents Agency</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core we uphold right images testing corrosra eth alerting and row
              like that catte cip not, orgreinssorne alerttype an dimestite
              strartyrear.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`${item.bgColor} rounded-2xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-105`}
              >
                <div className="p-6">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.category}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center mt-16">
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 bg-purple-200 rounded-lg transform rotate-45"></div>
              <div className="absolute inset-2 bg-purple-100 rounded-lg transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 md:px-16 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Anaverw Aphiyion
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Circle task utilize one the service at your types function a
          government no value add to extend superb unit results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt={`Team member ${i}`}
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 md:px-16 py-8 md:py-12">
        <div className="bg-white rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-pink-600 text-sm md:text-base">
              Progress To Features
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Web docnnolynts
              <br />
              Lrakehotip
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl text-sm md:text-base">
              United down middle and supplies car bringing the a special to
              trying, position a your stand. Allow that way write go more free
              was by realized still extend creased.
            </p>
            <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 bg-pink-600 text-white rounded text-sm md:text-base">
              Get simply
            </button>
          </div>
          <img
            src="/api/placeholder/400/300"
            alt="CTA"
            className="w-full md:w-1/3 rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 md:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Projects Portfolios</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Two bits mistake</li>
              <li>Service coperation</li>
              <li>Nothing at home</li>
              <li>Normal design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Beliuo</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Profile</li>
              <li>Services</li>
              <li>Collection</li>
              <li>Remadey item</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                Career
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                News Data
              </li>
              <li className="flex items-center">
                <Globe size={16} className="mr-2" />
                Estimate
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              Found up material moving the developing time being research length
              done.
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="/api/placeholder/40/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2">
                <p className="font-bold">Nash Nures</p>
                <p className="text-sm text-gray-400">Management section</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">© 2024 All rights reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};



const FeatureSection = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-400" />,
      bgColor: 'bg-orange-50',
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      bgColor: 'bg-green-50',
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      bgColor: 'bg-pink-50',
    },
    {
      icon: <Monitor className="w-8 h-8 text-blue-400" />,
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Container - Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Grid of 4 Cards */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 - Chat/Messages */}
              <div className="bg-orange-50 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full mb-4"></div>
                  <div className="w-6 h-6 bg-green-400 rounded-full absolute -right-2 top-0"></div>
                  <div className="w-24 h-6 bg-green-100 rounded-lg"></div>
                </div>
              </div>

              {/* Card 2 - Document */}
              <div className="bg-green-50 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <div className="relative">
                  <div className="w-28 h-36 bg-white rounded-lg shadow-md p-4">
                    <div className="w-6 h-6 bg-green-400 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-6 h-6 bg-yellow-400 rounded-full absolute -right-2 -top-2"></div>
                </div>
              </div>

              {/* Card 3 - Chat Bubble */}
              <div className="bg-pink-50 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <div className="relative">
                  <div className="w-14 h-14 bg-yellow-400 rounded-lg mb-4"></div>
                  <div className="w-10 h-10 bg-orange-400 rounded-full absolute -right-4 bottom-0"></div>
                  <div className="w-4 h-4 bg-red-400 rounded-full absolute -left-2 top-0"></div>
                </div>
              </div>

              {/* Card 4 - Desktop */}
              <div className="bg-blue-50 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-28 bg-white rounded-lg shadow-md p-4">
                    <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-6 h-6 bg-blue-400 rounded-full absolute -left-2 -bottom-2"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full absolute right-0 top-0"></div>
                </div>
              </div>
            </div>
          </div>
<HeroSection/>
          {/* Right Side - Hero Content */}
          <div className="lg:w-1/2 flex items-center">
            <div className="bg-pink-50 rounded-2xl p-8 w-full min-h-[calc(100%-2rem)] flex flex-col justify-center relative overflow-hidden">
              <h1 className="text-4xl font-bold mb-6">Eatrp Catorain?</h1>
              <p className="text-gray-600 mb-8 text-lg max-w-md">
                Semetib youll strefd cha reality cranyates safvespare lee istll
                your cra reilatian whichitem arraif smostpomry yext.
              </p>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors w-40 text-lg">
                Overview
              </button>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8">
                <div className="w-20 h-20 relative">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full absolute top-0 right-0 opacity-20"></div>
                  <div className="w-6 h-6 bg-purple-400 rounded-full absolute bottom-0 left-0 opacity-20"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full absolute top-4 left-4 opacity-20"></div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <div className="w-16 h-16 relative">
                  <div className="w-6 h-6 bg-pink-400 rounded-full absolute bottom-0 right-0 opacity-20"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full absolute top-0 left-0 opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const HeroSection = () => {
  // Decorative elements for the curved lines
  const DecorativeLines = () => (
    <>
      {/* Purple decorative elements */}
      <div className="absolute left-0 top-0">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-400">
          <path 
            d="M10 25C15 25 20 20 20 15C20 20 25 25 30 25" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="opacity-40"
          />
        </svg>
      </div>
      <div className="absolute right-20 bottom-10">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-400">
          <path 
            d="M10 25C15 25 20 20 20 15C20 20 25 25 30 25" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="opacity-40"
          />
        </svg>
      </div>
      
      {/* Yellow decorative element */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="20" viewBox="0 0 40 20" className="text-yellow-400">
          <path 
            d="M0 10C10 10 10 0 20 0C30 0 30 10 40 10" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="opacity-60"
          />
        </svg>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-full overflow-hidden bg-white p-4">
              <img
                src="/api/placeholder/800/600"
                alt="Woman working on laptop"
                className="rounded-3xl w-full h-full object-cover"
              />
              {/* Circle in top-left corner */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-pink-100 rounded-full opacity-80"></div>
              
              <DecorativeLines />
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="lg:w-1/2">
            <div className="max-w-xl">
              {/* Pink label */}
              <div className="mb-4">
                <span className="text-pink-500 text-sm">Projects Features</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                Web docnnolynts
                <br />
                Lrakehotip
              </h1>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                URELE dooler gilefu pindrengadu cain fencping the
                e lipporal nn insing prabioc cyond dent. Abin titan teci
                extin, glwing brenpade og tinetbed ohit riseted casaer
                ephreeping ta arfer deref goord cal orer hweb haste and
                hig set odving rheals.
              </p>

              {/* Button */}
              <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export  {HeroSection};

export {FeatureSection};

export default WebAgencySite;