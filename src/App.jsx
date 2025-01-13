import "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import RoyalEnfieldDetailPage from "./components/RoyalEnfieldDetailPage";
// import HondaActiva125 from "./components/HondaActiva125.jsx";
// import TvsRaider125 from "./components/TvsRaider.jsx";
// import TvsJupiter from "./components/TvsJupiter.jsx";
// import HondaShine from "./components/HondaShine.jsx";
// import VespaClassic from "./components/VespaClassic.jsx";
// import HondaUnicorn from "./components/HondaUnicorn.jsx";
// import VehicleCard from "./components/VehicleCard.jsx";
import CommingSoon from "./components/CommingSoon.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AboutUs from "./components/AboutUs.jsx";
// import Header from "./components/Header";

const App = () => {
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <ScrollToTop />
        {/* <Header /> */}

        <Helmet>
          <title>
            Gurukrupa Sale and Rentals, Two Wheeler & Four Wheeler, Hinjawadi
            Bike Rental Bikes and Scooter | Hinjawadi Rides
          </title>
          <meta
            name="description"
            content="Gurukrupa Rental and Bikes & Services, operating under the brand name Hinjawadi Rides, based in Hinjawadi, Pune, offers a diverse selection of two-wheeler and four-wheeler rental options. Our fleet includes well-maintained bikes, scooters, and cars, ensuring a safe and enjoyable ride for our customers. We provide flexible rental plans—daily, weekly, and monthly—to accommodate various needs. Our commitment to customer satisfaction is reflected in our professional service and competitive pricing.

For more information or to make a booking, please visit our website at [hinjawadibike.com](https://hinjawadibike.com/) or contact us at +91 73787-53636. "
          />
        </Helmet>
        <Helmet>
          <meta
            name="keywords"
            content="Gurukrupa Rental Shop, rental services, tools rental, equipment rental, party supplies, affordable rentals, reliable rentals, Gurukrupa Sales and Services, Lakshmi Chowk Road Hinjawadi, Behind MRF Showroom, Near Mukai Food Court, Mukai Nagar, Hinjawadi-411057, Pune, Maharashtra, India rentals, Hinjewadi Rentals, Hinjewadi"
          />
          <meta
            name="author"
            content="Prakash Indure, Gurukrupa Rental and Sales & Services Shop"
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "Gurukrupa Rental and Sales Services",
              description:
                "Explore a wide range of high-quality rental products at Gurukrupa Rental & Sales Services Shop. From tools and equipment to party supplies, we offer affordable and reliable rental solutions. Serving Hinjawadi, Pune, Maharashtra, India with convenient rental services.",
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
              image:
                "https://github.com/samirdhoran2000/prakash_bike_new/blob/main/public/Bike_Logo.png",
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
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/about" element={<AboutUs />} />

          {/* <Route
            path="/bikes/royal_enfield_classic_350"
            element={<RoyalEnfieldDetailPage />}
          />
          <Route path="/bikes/honda_activa_125" element={<HondaActiva125 />} />
          <Route path="/bikes/tvs_raider" element={<TvsRaider125 />} />
          <Route path="/bikes/tvs_jupiter" element={<TvsJupiter />} />
          <Route path="/bikes/honda_shine" element={<HondaShine />} />
          <Route path="/bikes/vespa_classic" element={<VespaClassic />} />
          <Route path="/bikes/honda_unicorn" element={<HondaUnicorn />} />
          <Route path="/bikes/any" element={<VehicleCard />} /> */}
          <Route path="/bikes/comming_soon" element={<CommingSoon />} />
          {/* <Route path="/blog" element={<HondaShineBlogArticle />} /> */}

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
