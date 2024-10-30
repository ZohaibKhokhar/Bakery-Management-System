// src/components/UnitSelector.js
import React from 'react';

const UnitSelector = ({ selectedUnit, onUnitChange }) => {
  const units = ["piece", "pack", "bottle", "box", "loaf", "dozen"];

  return (
    <div className="">
      <label htmlFor="unit" className="block text-gray-700 font-normal mb-2">Unit</label>
      <select
        id="unit"
        name="unit"
        value={selectedUnit}
        onChange={(e) => onUnitChange(e.target.value)}
        required
        className="w-full p-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white text-gray-700"
      >
        <option value="" disabled>Select unit</option>
        {units.map((unit) => (
          <option key={unit} value={unit}>
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnitSelector;
