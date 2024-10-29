import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
  return (
    <footer className="bg-blue-500 p-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side: Brand Info */}
        <div className="text-white text-center md:text-left">
          <h3 className="text-2xl font-bold">BAKER KING</h3>
          <p className="text-sm">Delicious baked goods, fresh every day!</p>
        </div>

        {/* Center: Social Media Icons */}
        <div className="flex space-x-4 my-4 md:my-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300 hover:scale-150 ease-in-out"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300 hover:scale-150 ease-in-out"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300 hover:scale-150 ease-in-out"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300 hover:scale-150 ease-in-out"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Right Side: Footer Links */}
        <div className="text-white text-center md:text-right">
          <Link to="/" className="block md:inline-block text-white hover:text-yellow-300 transition no-underline hover:scale-105 duration-300 ease-in-out" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Home
          </Link>
          <span className="mx-2 hidden md:inline-block">|</span>
          <Link to="/add" className="block md:inline-block text-white hover:text-yellow-300 transition no-underline hover:scale-105 duration-300 ease-in-out" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Add Product
          </Link>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center text-white mt-6">
        <p className="text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>© 2024 BAKER KING. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
