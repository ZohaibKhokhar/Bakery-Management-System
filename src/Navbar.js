import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-blue-500 p-2 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* KING BAKERS logo */}
        <Link
          className="text-white text-3xl font-bold tracking-wide px-4 py-1 hover:text-yellow-300 no-underline transition duration-300 ease-in-out"
          to="/"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          KING BAKERS
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8 ml-16">
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
    </nav>
  );
}

export default Navbar;
