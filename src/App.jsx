import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import BikeCard from "./components/BikeCard";
import BikeData from "./assets/BikeData.js";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import FourWheelerAd from "./components/FourWheelerAd";
import Blog from "./components/Blog";
import About from "./components/About";

const App = () => {
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Service />
                <About />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
                  {BikeData.map((bike) => (
                    <BikeCard key={bike.bikeId} {...bike} />
                  ))}
                </div>
                <FourWheelerAd />
                <Testimonials />
                <Contact />
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/blog/:bikeId" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
