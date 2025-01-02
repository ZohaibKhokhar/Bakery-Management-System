import React from 'react';
import { useHistory } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'; // Heroicons v2 import

function SearchBar({ searchTerm, onSearchChange, onSearch, theme }) {
  const history = useHistory();

  // Input field classes based on the theme
  const inputClass = `px-3 py-2 rounded-lg ${theme === 'light' ? 'text-gray-700 bg-white border-gray-300' : ' text-black border-gray-600'}`;

  // Button classes based on the theme
  const buttonClass = `ml-2 p-2 rounded-full transition duration-300 ease-in-out
  bg-white text-blue-900 border-blue-800 hover:bg-blue-600`;

  const handleSearchClick = () => {
    onSearch(searchTerm);
    history.push("/products");
  };

  return (
    <div className="flex items-center ml-4">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search products..."
        className={inputClass}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      />
      <button
        onClick={handleSearchClick}
        className={buttonClass}
      >
        <MagnifyingGlassIcon className="w-6 h-6" /> {/* Heroicon Search Icon for v2 */}
      </button>
    </div>
  );
}

export default SearchBar;
