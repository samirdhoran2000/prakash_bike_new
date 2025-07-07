import React, { useState } from 'react';
import BikeCard from './BikeCard';
import BikeData from '../assets/BikeData.js';

const BikeCatalog = () => {
  const [bikes, setBikes] = useState(BikeData);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterBikes(event.target.value, category);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    filterBikes(searchTerm, event.target.value);
  };

  const filterBikes = (search, cat) => {
    let filteredBikes = BikeData;

    if (cat !== 'all') {
      filteredBikes = filteredBikes.filter((bike) => bike.category === cat);
    }

    if (search) {
      filteredBikes = filteredBikes.filter((bike) =>
        bike.bikeName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setBikes(filteredBikes);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Fleet</h1>
      <div className="flex justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white w-1/3"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white"
        >
          <option value="all">All</option>
          <option value="bike">Bikes</option>
          <option value="scooter">Scooters</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bikes.map((bike) => (
          <BikeCard key={bike.bikeId} {...bike} />
        ))}
      </div>
    </div>
  );
};

export default BikeCatalog;
