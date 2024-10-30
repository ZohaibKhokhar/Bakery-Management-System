// CategorySelector.js
import React from 'react';

const CategorySelector = ({ categories, onCategoryChange }) => {
  return (
    <div className="flex items-center text-blue-600 justify-center mb-6 space-x-4">
      <label className="text-lg font-bold text-gray-700">Filter Products:</label>
      <select 
        onChange={(e) => onCategoryChange(e.target.value)} 
        className="w-64 p-3 border border-gray-300 rounded-lg shadow-md hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors ease-in-out duration-200 bg-white text-gray-700 font-medium tracking-wide"
      >
        <option value="" className="text-gray-500 font-semibold">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category} className="text-gray-700">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
