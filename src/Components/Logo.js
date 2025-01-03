// Logo.js
import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      className="text-white text-2xl font-bold tracking-wide py-1 hover:text-yellow-300 no-underline transition duration-300 ease-in-out"
      to="/"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Butter & Bliss
    </Link>
  );
}

export default Logo;
