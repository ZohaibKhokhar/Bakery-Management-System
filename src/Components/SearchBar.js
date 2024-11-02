// SearchBar.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function SearchBar({ searchTerm, onSearchChange, onSearch }) {
  const history = useHistory();

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
        className="px-3 py-2 rounded-lg text-gray-700"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      />
      <button
        onClick={handleSearchClick}
        className="ml-2 px-4 py-2 text-blue-700 font-semibold rounded-lg shadow-md bg-white border border-blue-700 hover:bg-blue-100 transition duration-300 ease-in-out"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
