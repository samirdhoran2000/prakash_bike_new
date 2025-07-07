import { useState, useEffect } from "react";
import { Search, Filter, ChevronDown, Grid3X3, List, Bike } from "lucide-react";
import TwoWheelerCard from "./TwoWheelerCard";

export default function TwoWheelerShowcase({ vehicles = [] }) {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    fuelType: "",
    engineCapacityCC: { min: "", max: "" },
    manufacturingYear: { min: "", max: "" },
    brand: "",
  });
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("brand");
  const [sortOrder, setSortOrder] = useState("asc");

  // Extract unique values for filters
  const uniqueBrands = [...new Set(vehicles.map((v) => v.brand))].sort();
  const uniqueFuelTypes = [...new Set(vehicles.map((v) => v.fuelType))].sort();

  // Min/Max values for range filters
  const minYear = Math.min(
    ...vehicles.map((v) => v.manufacturingYear || Infinity)
  );
  const maxYear = Math.max(...vehicles.map((v) => v.manufacturingYear || 0));
  const minEngine = Math.min(
    ...vehicles.map((v) => v.engineCapacityCC || Infinity)
  );
  const maxEngine = Math.max(...vehicles.map((v) => v.engineCapacityCC || 0));

  // Effect to filter and sort vehicles when filters, search, or sort changes
  useEffect(() => {
    let result = [...vehicles];

    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (v) =>
          v.brand?.toLowerCase().includes(term) ||
          v.model?.toLowerCase().includes(term)
      );
    }

    // Apply filters
    if (filters.brand) {
      result = result.filter((v) => v.brand === filters.brand);
    }

    if (filters.fuelType) {
      result = result.filter((v) => v.fuelType === filters.fuelType);
    }

    if (filters.manufacturingYear.min) {
      result = result.filter(
        (v) => v.manufacturingYear >= Number(filters.manufacturingYear.min)
      );
    }

    if (filters.manufacturingYear.max) {
      result = result.filter(
        (v) => v.manufacturingYear <= Number(filters.manufacturingYear.max)
      );
    }

    if (filters.engineCapacityCC.min) {
      result = result.filter(
        (v) => v.engineCapacityCC >= Number(filters.engineCapacityCC.min)
      );
    }

    if (filters.engineCapacityCC.max) {
      result = result.filter(
        (v) => v.engineCapacityCC <= Number(filters.engineCapacityCC.max)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "brand":
          comparison = a.brand?.localeCompare(b.brand);
          break;
        case "year":
          comparison = (a.manufacturingYear || 0) - (b.manufacturingYear || 0);
          break;
        case "engine":
          comparison = (a.engineCapacityCC || 0) - (b.engineCapacityCC || 0);
          break;
        case "mileage":
          comparison = (a.mileageKMPL || 0) - (b.mileageKMPL || 0);
          break;
        default:
          comparison = a.brand?.localeCompare(b.brand);
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    setFilteredVehicles(result);
  }, [vehicles, filters, searchTerm, sortBy, sortOrder]);

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  // Handle range filter changes
  const handleRangeFilterChange = (category, minOrMax, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [minOrMax]: value,
      },
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      fuelType: "",
      engineCapacityCC: { min: "", max: "" },
      manufacturingYear: { min: "", max: "" },
      brand: "",
    });
    setSearchTerm("");
  };

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Set sort field
  const handleSortChange = (field) => {
    if (sortBy === field) {
      toggleSortOrder();
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Bike size={28} className="text-yellow-400" />
            <h1 className="text-2xl font-bold text-white">
              <span className="text-yellow-400">Two</span>Wheelers
            </h1>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid"
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list"
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by brand or model..."
                className="bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4 py-2"
            >
              <Filter size={18} className="text-yellow-400" />
              <span>Filters</span>
              <ChevronDown
                size={16}
                className={`text-gray-400 transform transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [field, order] = e.target.value.split("-");
                  setSortBy(field);
                  setSortOrder(order);
                }}
                className="bg-gray-800 text-white rounded-lg px-4 py-2 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="brand-asc">Brand (A-Z)</option>
                <option value="brand-desc">Brand (Z-A)</option>
                <option value="year-desc">Newest First</option>
                <option value="year-asc">Oldest First</option>
                <option value="engine-desc">Engine: High to Low</option>
                <option value="engine-asc">Engine: Low to High</option>
                <option value="mileage-desc">Mileage: High to Low</option>
                <option value="mileage-asc">Mileage: Low to High</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Brand Filter */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Brand
                  </label>
                  <select
                    value={filters.brand}
                    onChange={(e) =>
                      handleFilterChange("brand", e.target.value)
                    }
                    className="bg-gray-700 text-white rounded w-full px-3 py-2"
                  >
                    <option value="">All Brands</option>
                    {uniqueBrands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fuel Type Filter */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Fuel Type
                  </label>
                  <select
                    value={filters.fuelType}
                    onChange={(e) =>
                      handleFilterChange("fuelType", e.target.value)
                    }
                    className="bg-gray-700 text-white rounded w-full px-3 py-2"
                  >
                    <option value="">All Types</option>
                    {uniqueFuelTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year Range */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Year Range
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      min={minYear}
                      max={maxYear}
                      value={filters.manufacturingYear.min}
                      onChange={(e) =>
                        handleRangeFilterChange(
                          "manufacturingYear",
                          "min",
                          e.target.value
                        )
                      }
                      className="bg-gray-700 text-white rounded w-full px-3 py-2"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      min={minYear}
                      max={maxYear}
                      value={filters.manufacturingYear.max}
                      onChange={(e) =>
                        handleRangeFilterChange(
                          "manufacturingYear",
                          "max",
                          e.target.value
                        )
                      }
                      className="bg-gray-700 text-white rounded w-full px-3 py-2"
                    />
                  </div>
                </div>

                {/* Engine Capacity Range */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Engine Capacity (CC)
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      min={minEngine}
                      max={maxEngine}
                      value={filters.engineCapacityCC.min}
                      onChange={(e) =>
                        handleRangeFilterChange(
                          "engineCapacityCC",
                          "min",
                          e.target.value
                        )
                      }
                      className="bg-gray-700 text-white rounded w-full px-3 py-2"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      min={minEngine}
                      max={maxEngine}
                      value={filters.engineCapacityCC.max}
                      onChange={(e) =>
                        handleRangeFilterChange(
                          "engineCapacityCC",
                          "max",
                          e.target.value
                        )
                      }
                      className="bg-gray-700 text-white rounded w-full px-3 py-2"
                    />
                  </div>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={resetFilters}
                  className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2 mr-2"
                >
                  Reset
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg px-4 py-2"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count & Info */}
        <div className="mb-4 text-gray-400">
          Showing {filteredVehicles.length} of {vehicles.length} vehicles
        </div>

        {/* Vehicle Grid/List */}
        {filteredVehicles.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredVehicles.map((vehicle) => (
              <TwoWheelerCard
                key={vehicle.id}
                vehicle={vehicle}
                showDetails={viewMode === "list"}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No vehicles match your search criteria
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg px-4 py-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
