// src/components/UnitSelector.js
import React from 'react';

const UnitSelector = ({ selectedUnit, onUnitChange }) => {
  const units = ["piece", "pack", "bottle", "box", "loaf", "dozen","kg"];

  return (
    <div className="">
      <label htmlFor="unit" className="block text-gray-700 mb-2">Unit</label>
      <select
        id="unit"
        name="unit"
        value={selectedUnit}
        onChange={(e) => onUnitChange(e.target.value)}
        required
        className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
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
