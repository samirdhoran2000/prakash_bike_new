const HondaActiva125 = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src="/api/placeholder/800/400"
            alt="Honda Activa 125"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Honda Activa 125
            </h1>
            <p className="text-white/80 text-lg">
              The Perfect Balance of Power and Comfort
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Engine and Performance
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-white/60 text-sm">Engine Capacity</p>
                  <p className="text-white font-medium">124cc</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-white/60 text-sm">Max Power</p>
                  <p className="text-white font-medium">8.19 bhp</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-white/60 text-sm">Torque</p>
                  <p className="text-white font-medium">10.4 Nm</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-white/60 text-sm">Mileage</p>
                  <p className="text-white font-medium">47 kmpl</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Dimensions and Weight
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-white/60 text-sm">Kerb Weight</p>
                  <p className="text-white font-medium">110 kg</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-white/60 text-sm">Seat Height</p>
                  <p className="text-white font-medium">712 mm</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-white/60 text-sm">Ground Clearance</p>
                  <p className="text-white font-medium">162 mm</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-white/60 text-sm">Wheelbase</p>
                  <p className="text-white font-medium">1,260 mm</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Available Colors
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-black" />
                  <span className="text-white/80">Pearl Night Star Black</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-800" />
                  <span className="text-white/80">Mid Night Blue Metallic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-600" />
                  <span className="text-white/80">Heavy Grey Metallic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-600" />
                  <span className="text-white/80">Rebel Red Metallic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-white" />
                  <span className="text-white/80">Pearl Precious White</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/80">Drum</span>
                  <span className="text-white font-medium">₹1,00,042</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Drum Alloy</span>
                  <span className="text-white font-medium">₹1,04,271</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Disc</span>
                  <span className="text-white font-medium">₹1,08,141</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">H-Smart</span>
                  <span className="text-white font-medium">₹1,09,787</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917378753636?text=Hello%20Gurukrupa%20Sales%20and%20Services,%20I'd%20like%20to%20inquire%20about%20the%20Honda%20Activa%20125."
              className="block w-full bg-green-500 hover:bg-green-400 text-white text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HondaActiva125;