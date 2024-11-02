// ThemeToggleButton.js
import React from 'react';

function ThemeToggleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="ml-2 px-4 py-2 text-blue-700 font-semibold rounded-lg shadow-md bg-white border border-blue-700 hover:bg-blue-100 transition duration-300 ease-in-out"
    >
      Change Theme
    </button>
  );
}

export default ThemeToggleButton;
