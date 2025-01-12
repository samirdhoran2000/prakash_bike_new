import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-gray-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-12 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <p className="italic">
              &ldquo;The best bike rental service ever!&quot;
            </p>
            <span className="block mt-4 font-bold">- Samir, Pune</span>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <p className="italic">
              &ldquo;Loved the retro vibes and smooth rides.&ldquo;
            </p>
            <span className="block mt-4 font-bold">- Amol, Pune</span>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <p className="italic">
              &ldquo;Hinjawadi Rides made my mountain trip unforgettable.&ldquo;
            </p>
            <span className="block mt-4 font-bold">- Nikhil, Mumbai</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
