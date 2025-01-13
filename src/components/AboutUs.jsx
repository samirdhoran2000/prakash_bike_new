import { Bike, Wrench, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="text-yellow-400 hover:text-yellow-300 mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 text-center">
          About Hinjawadi Rides: Your Gateway to Two-Wheeled Freedom
        </h1>
        <p className="text-gray-300 leading-relaxed mb-6">
          Welcome to <span className="text-yellow-400">Hinjawadi Rides</span> (
          <a
            href="https://hinjawadibike.com/"
            className="text-yellow-400 hover:underline"
          >
            https://hinjawadibike.com/
          </a>
          ), your one-stop shop for all things cycling in Hinjawadi. We&apos;re
          passionate about helping riders of all levels explore the city and
          beyond on two wheels.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Driven by Experience
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Founded by <span className="text-yellow-400">Prakash Indure</span>, a
          cycling industry veteran with over 5 years of experience, Hinjawadi
          Rides was born out of a desire to make cycling accessible and
          enjoyable for everyone. Prakash&apos;s in-depth knowledge of bikes and
          the local cycling scene ensures we provide you with the best possible
          service.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          More Than Just Rentals
        </h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Bike className="text-yellow-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Rental Bikes
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Choose from a wide selection of well-maintained bikes to suit
                your riding style and adventure, from city cruisers to mountain
                bikes.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <ShoppingCart className="text-yellow-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Sales & Service
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Looking to buy a bike or get your existing one tuned up? We
                offer a curated selection of bikes for sale and a full-service
                workshop to keep your ride running smoothly.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-yellow-400 mt-8 mb-4">
          Our Commitment
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          At Hinjawadi Rides, we believe cycling is more than just
          transportation. It&apos;s a way to explore, get exercise, and connect
          with nature. We&apos;re dedicated to providing you with the tools and
          support you need to enjoy the ride.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Ready to Explore?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Browse our rental bikes online or visit our shop to chat with our
          friendly staff and find the perfect bike for your next adventure.
          We&apos;re here to answer your questions and get you rolling!
        </p>

        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Have a question or need help planning your ride? Get in touch with us
          via email at{" "}
          <a
            href="mailto:contact@hinjawadibike.com"
            className="text-yellow-400 hover:underline"
          >
            contact@hinjawadibike.com
          </a>{" "}
          or visit us at our shop. Let&apos;s hit the road!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
