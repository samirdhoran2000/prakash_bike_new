import React from "react";

const Service = () => {
  const services = [
    {
      icon: "🏍️",
      title: "Daily Rentals",
      description:
        "Perfect for quick getaways or short-term adventures. Choose from our sporty lineup of bikes for an exhilarating ride.",
    },
    {
      icon: "⏳",
      title: "Long-Term Rentals",
      description:
        "Looking for an extended adventure? Our discounted long-term rental packages are tailored for travelers who love the open road.",
    },
    {
      icon: "🎉",
      title: "Group Packages",
      description:
        "Ideal for friends, families, or corporate outings. Enjoy special rates for group rentals with added perks.",
    }
   
  ];

  return (
    <section
      id="services"
      className="py-20 lg:py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-4 tracking-wide">
            Discover Our Services
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-yellow-400/20 
                         hover:border-yellow-400 shadow-lg hover:shadow-yellow-400/20 
                         transition-all duration-500 ease-in-out
                         hover:transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 bg-yellow-400 text-black flex items-center justify-center 
                             rounded-xl text-3xl font-bold transform
                             group-hover:rotate-12 group-hover:scale-110
                             transition-all duration-500 ease-in-out"
                >
                  {service.icon}
                </div>
                <h3 className="ml-4 text-2xl font-bold text-yellow-400 
                               group-hover:text-yellow-300 group-hover:translate-x-2
                               transition-all duration-500">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-white 
                            transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
