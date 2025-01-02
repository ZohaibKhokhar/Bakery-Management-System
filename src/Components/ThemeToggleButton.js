import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';  // Heroicons v2 imports

function ThemeToggleButton({ onClick, theme }) {
  console.log('Current theme:', theme);  // Debugging the current theme
  const themeButtonClass = `ml-2 p-2 rounded-full transition duration-300 ease-in-out
  bg-blue-700 text-white border-blue-800 hover:bg-blue-600`;
  return (
    
    <button
      onClick={onClick}
      className="ml-2 p-2 rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
    >
      {theme === 'light' ? (
        // Render MoonIcon in light theme
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        // Render SunIcon in dark theme
      
        <MoonIcon className="w-6 h-6 rounded-full text-blue-900 " />
      )}
    </button>
    
  );
}

export default ThemeToggleButton;
