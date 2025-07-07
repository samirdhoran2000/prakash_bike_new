import { useState } from "react";
import { X, Calendar, Send } from "lucide-react";

const BookingForm = ({ bikeName, bikeImg, rent, onClose, bike }) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Get tomorrow's date in YYYY-MM-DD format
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrowFormatted);

  const handleBooking = () => {
    const message = `Hello, I'd like to book the ${bikeName} from ${startDate} to ${endDate}.`;
    const whatsappUrl = `https://wa.me/917378753636?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-900 border border-yellow-400 rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-yellow-400">Book Your Ride</h2>
          <p className="text-gray-400">
            You are booking the{" "}
            <span className="font-semibold text-white">{bikeName}</span>.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={bikeImg}
            alt={bikeName}
            className="w-48 h-32 object-contain"
          />
        </div>

        <div className="space-y-4">
          <div className="relative">
            <label
              htmlFor="start-date"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Start Date
            </label>
            <div className="flex items-center">
              <Calendar size={20} className="absolute left-3 text-yellow-400" />
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                min={today}
                className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-4 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="end-date"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              End Date
            </label>
            <div className="flex items-center">
              <Calendar size={20} className="absolute left-3 text-yellow-400" />
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate}
                className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-4 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleBooking}
            disabled={!startDate || !endDate}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            Book on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
