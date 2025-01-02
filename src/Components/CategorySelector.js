// CategorySelector.js
import React from 'react';

const CategorySelector = ({ categories, onCategoryChange, theme }) => {
  const labelClass = `text-lg font-bold ${
    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
  }`;

  const selectClass = `w-64 p-2 border rounded-lg shadow-md transition-colors ease-in-out duration-200 
    ${
      theme === 'light'
        ? 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 focus:ring-blue-500'
        : 'bg-gray-800 text-gray-200 border-gray-600 hover:border-blue-300 focus:ring-blue-400'
    }`;

  const optionClass = `${
    theme === 'light' ? 'text-gray-700 bg-white' : 'text-gray-200 bg-gray-800'
  }`;

  return (
    <div className="flex items-center justify-center mb-6 space-x-5">
      <label className={labelClass}>Filter Products:</label>
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className={selectClass}
      >
        <option value="" className={optionClass}>
          All Categories
        </option>
        {categories.map((category) => (
          <option key={category} value={category} className={optionClass}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
