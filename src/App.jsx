import "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
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
import About from "./components/About";
import VehicleDetailPage from "./components/VehicleDetailPage";
import CommingSoon from "./components/CommingSoon.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import WebAgencySite from "./components/Company.jsx";
import FAQ from "./components/FAQ.jsx";

// Initialize Google Analytics
ReactGA.initialize("G-9DZ0BJ023F");

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <TrackPageView />
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <ScrollToTop />

        {/* SEO Optimization */}
        <Helmet>
          <title>
            Gurukrupa Sale and Rentals | Two-Wheeler & Four-Wheeler Rental |
            Hinjawadi Rides
          </title>
          <meta
            name="description"
            content="Rent the best bikes and scooters at affordable prices in Hinjawadi, Pune. Explore our range of two-wheelers and four-wheelers for an amazing ride."
          />
          <meta
            name="keywords"
            content="bike rental, rent bikes, affordable bike rental, bike hire, Hinjawadi bike, scooter rental, two-wheeler rental, four-wheeler rental, Pune bike rental"
          />
          <meta name="author" content="Gurukrupa Sale and Rentals" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Gurukrupa Rental and Sales Services",
              description:
                "Rent the best bikes and scooters at affordable prices in Hinjawadi, Pune. We offer a wide range of two-wheelers and four-wheelers for rental.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lakshmi Chowk Road",
                addressLocality: "Hinjawadi",
                addressRegion: "Pune",
                postalCode: "411057",
                addressCountry: "India",
              },
              telephone: "+91-7378753636",
              url: "https://hinjawadibike.com",
              image: "https://hinjawadibike.com/Bike_Logo.png",
              priceRange: "$$",
            })}
          </script>
        </Helmet>

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
                <FAQ />

              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/company" element={<WebAgencySite />} />
          <Route path="/bikes/comming_soon" element={<CommingSoon />} />
          <Route
            path="/vehicles/tata-altroz-icng"
            element={<VehicleDetailPage />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
