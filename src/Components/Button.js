// src/components/Button.js
import React from 'react';

const Button = ({ onClick, children, type = "button", isLoading = false, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled}
      className={`w-full p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out font-semibold tracking-wide ${isLoading ? 'bg-blue-500' : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:scale-104 tracking-wide'} text-white`}
    >
      {isLoading ? 'Adding... ' : children}
    </button>
  );
};

export default Button;
//mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide