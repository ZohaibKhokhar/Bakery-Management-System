// NavLinks.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks({ toggleMobileMenu, isMobile }) {
  return (
    <div className={`flex ${isMobile ? 'flex-col space-y-4 py-4' : 'items-center space-x-8'}`}>
      <Link
        className="text-white text-lg hover:text-yellow-300 no-underline hover:scale-105 transition duration-300 ease-in-out"
        to="/"
        onClick={isMobile ? toggleMobileMenu : null}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Home
      </Link>
      {/*<Link
        className="text-white text-lg hover:text-yellow-300 no-underline hover:scale-105 transition duration-300 ease-in-out"
        to="/products"
        onClick={isMobile ? toggleMobileMenu : null}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Products
      </Link>*/}
      <Link
        className="text-white text-lg hover:text-yellow-300 no-underline hover:scale-105 transition duration-300 ease-in-out"
        to="/add"
        onClick={isMobile ? toggleMobileMenu : null}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Add Product
      </Link>
    </div>
  );
}

export default NavLinks;
