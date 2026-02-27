import { useState } from "react";
import {
  Bike,
  Clock,
  Fuel,
  Gauge,
  ChevronDown,
  ChevronUp,
  Shield,
  Settings,
  DollarSign,
  Zap,
  Scale,
  Ruler,
  Users,
} from "lucide-react";

export default function TwoWheelerCard({ vehicle, showDetails = false }) {
  const [expanded, setExpanded] = useState(showDetails);

  if (!vehicle) return null;

  // Handle required properties that might be missing
  const {
    id = "",
    brand = "",
    model = "",
    manufacturingYear = "",
    engineCapacityCC = "",
    fuelType = "",
    mileageKMPL = "",
    colorOptions = [],
    features = [],
    warrantyYears,
    seatingCapacity,
    dimensions,
    transmissionType,
    driveType,
    price,
    powerHP,
    topSpeedKMPH,
    weightKg,
    emissionStandard,
    brakes,
    abs,
  } = vehicle;

  // Handle variants for styles based on fuel type
  const getFuelIcon = () => {
    switch (fuelType) {
      case "Electric":
        return <Zap size={18} className="text-yellow-400" />;
      case "Hybrid":
        return <Zap size={18} className="text-yellow-400" />;
      default:
        return <Fuel size={18} className="text-yellow-400" />;
    }
  };

  // Get background gradient based on fuel type
  const getCardGradient = () => {
    switch (fuelType) {
      case "Electric":
        return "from-gray-900 to-gray-950";
      case "Hybrid":
        return "from-gray-900 to-gray-950";
      default:
        return "from-gray-900 to-gray-950";
    }
  };

  return (
    <div
      className={`w-full rounded-lg bg-gradient-to-br ${getCardGradient()} border border-gray-800 shadow-xl overflow-hidden`}
    >
      {/* Card Header */}
      <div className="px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Bike size={22} className="text-yellow-400" />
          <h2 className="text-lg font-bold text-white">
            <span className="text-yellow-400">{brand}</span> {model}
          </h2>
        </div>
        <div className="bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full px-3 py-1 text-xs font-medium text-yellow-400">
          {manufacturingYear}
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {/* Engine */}
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs mb-1">Engine</span>
            <div className="flex items-center">
              <Settings size={16} className="text-yellow-400 mr-2" />
              <span className="text-white font-medium">
                {engineCapacityCC} CC
              </span>
            </div>
          </div>

          {/* Fuel Type */}
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs mb-1">Fuel</span>
            <div className="flex items-center">
              {getFuelIcon()}
              <span className="text-white font-medium ml-2">{fuelType}</span>
            </div>
          </div>

          {/* Mileage */}
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs mb-1">Mileage</span>
            <div className="flex items-center">
              <Gauge size={16} className="text-yellow-400 mr-2" />
              <span className="text-white font-medium">{mileageKMPL} KMPL</span>
            </div>
          </div>
        </div>

        {/* Additional information shown when expanded */}
        {expanded && (
          <div className="mt-4 border-t border-gray-800 pt-4">
            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
              {transmissionType && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Transmission</span>
                  <span className="text-white">{transmissionType}</span>
                </div>
              )}

              {driveType && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Drive</span>
                  <span className="text-white">{driveType}</span>
                </div>
              )}

              {topSpeedKMPH && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Top Speed</span>
                  <span className="text-white">{topSpeedKMPH} km/h</span>
                </div>
              )}

              {powerHP && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Power</span>
                  <span className="text-white">{powerHP} HP</span>
                </div>
              )}

              {weightKg && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Weight</span>
                  <div className="flex items-center">
                    <Scale size={14} className="text-yellow-400 mr-1" />
                    <span className="text-white">{weightKg} kg</span>
                  </div>
                </div>
              )}

              {seatingCapacity && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Seating</span>
                  <div className="flex items-center">
                    <Users size={14} className="text-yellow-400 mr-1" />
                    <span className="text-white">
                      {seatingCapacity} Persons
                    </span>
                  </div>
                </div>
              )}

              {dimensions && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Dimensions</span>
                  <div className="flex items-center">
                    <Ruler size={14} className="text-yellow-400 mr-1" />
                    <span className="text-white text-sm">
                      {dimensions.lengthMm}×{dimensions.widthMm}×
                      {dimensions.heightMm} mm
                    </span>
                  </div>
                </div>
              )}

              {emissionStandard && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Emission</span>
                  <div className="flex items-center">
                    <Shield size={14} className="text-yellow-400 mr-1" />
                    <span className="text-white">{emissionStandard}</span>
                  </div>
                </div>
              )}

              {warrantyYears && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Warranty</span>
                  <div className="flex items-center">
                    <Clock size={14} className="text-yellow-400 mr-1" />
                    <span className="text-white">
                      {warrantyYears} {warrantyYears === 1 ? "Year" : "Years"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            {features && features.length > 0 && (
              <div className="mt-4">
                <h3 className="text-gray-300 text-sm font-medium mb-2">
                  Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {colorOptions && colorOptions.length > 0 && (
              <div className="mt-4">
                <h3 className="text-gray-300 text-sm font-medium mb-2">
                  Available Colors
                </h3>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((color, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Brakes & Safety */}
            {brakes && (
              <div className="mt-4">
                <h3 className="text-gray-300 text-sm font-medium mb-2">
                  Brakes & Safety
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs">Front</span>
                    <span className="text-white">{brakes.front}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-xs">Rear</span>
                    <span className="text-white">{brakes.rear}</span>
                  </div>
                  {abs !== undefined && (
                    <div className="flex items-center col-span-2">
                      <Shield size={14} className="text-yellow-400 mr-1" />
                      <span className="text-white">
                        ABS: {abs ? "Yes" : "No"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Price */}
            {price && (
              <div className="mt-4 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Price</span>
                  <div className="flex items-center">
                    <DollarSign size={16} className="text-yellow-400 mr-1" />
                    <span className="text-yellow-400 font-bold">
                      {typeof price === "number"
                        ? price.toLocaleString()
                        : price}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div
        className="px-6 py-3 bg-gray-900 border-t border-gray-800 flex justify-center items-center cursor-pointer hover:bg-gray-800 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-yellow-400 text-sm mr-1">
          {expanded ? "Hide Details" : "Show Details"}
        </span>
        {expanded ? (
          <ChevronUp size={16} className="text-yellow-400" />
        ) : (
          <ChevronDown size={16} className="text-yellow-400" />
        )}
      </div>
    </div>
  );
}
