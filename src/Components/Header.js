import React, { useState, useCallback } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

function Header({ cartCount, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const history = useHistory();

  // Debounce function to delay search
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((term) => {
      if (onSearch) onSearch(term);
    }, 300),
    [onSearch]
  );

  // Update search term and trigger debounced search
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term); // Call debounced search
  };

  const handleSearchClick = () => {
    if (onSearch) onSearch(searchTerm);
    history.push("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-2 fixed top-0 w-full z-10 shadow-md">
      <div className="container-fluid mx-auto flex justify-between items-center">
        {/* KING BAKERS logo */}
        <Link
          className="text-white text-3xl font-bold tracking-wide  py-1 hover:text-yellow-300 no-underline transition duration-300 ease-in-out"
          to="/"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          KING BAKERS
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            className="text-white text-lg hover:text-yellow-300 no-underline hover:scale-105 transition duration-300 ease-in-out"
            to="/"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Home
          </Link>
          <Link
            className="text-white text-lg hover:text-yellow-300 no-underline hover:scale-105 transition duration-300 ease-in-out"
            to="/add"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Add Product
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-500 md:hidden flex flex-col items-center space-y-4 py-4">
            <Link
              className="text-white text-lg hover:text-yellow-300 no-underline"
              to="/"
              onClick={toggleMobileMenu}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Home
            </Link>
            <Link
              className="text-white text-lg hover:text-yellow-300 no-underline"
              to="/add"
              onClick={toggleMobileMenu}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Add Product
            </Link>
          </div>
        )}

        {/* Search Bar and Button */}
        <div className="hidden md:flex items-center ml-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
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

        {/* Shopping Cart Icon */}
        <Link
          to="/cart"
          className="text-white text-lg hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110 relative ml-6"
        >
          <FaShoppingCart size={28} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center transform translate-x-2 -translate-y-2 shadow-lg">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Search Bar */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex items-center justify-center p-4 bg-blue-500">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="px-3 py-2 rounded-lg text-gray-700 w-3/4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          />
          <button
            onClick={handleSearchClick}
            className="ml-2 px-4 py-2 text-blue-700 font-semibold rounded-lg shadow-md bg-white border border-blue-700 hover:bg-blue-100 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
