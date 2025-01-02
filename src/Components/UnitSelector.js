import React from 'react';

const UnitSelector = ({ selectedUnit, onUnitChange, theme }) => {
  const units = ["piece", "pack", "bottle", "box", "loaf", "dozen", "kg"];

  const labelClass = `block mb-2 ${
    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
  }`;

  const selectClass = `w-full p-2 border  focus:outline-none focus:ring-2 ${
    theme === 'light'
      ? 'bg-white text-gray-700 border-gray-300 focus:ring-blue-500'
      : 'bg-gray-800 text-gray-200 border-gray-600 focus:ring-blue-400'
  }`;

  return (
    <div className="mb-4">
      <label htmlFor="unit" className={labelClass}>
        Unit
      </label>
      <select
        id="unit"
        name="unit"
        value={selectedUnit}
        onChange={(e) => onUnitChange(e.target.value)}
        required
        className={selectClass}
      >
        <option value="" disabled>
          Select unit
        </option>
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
