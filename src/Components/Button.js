// src/components/Button.js
import React from 'react';

const Button = ({ onClick, children, type = "button", isLoading = false, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled}
      className={`w-full p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out font-semibold tracking-wide ${isLoading ? 'bg-blue-500' : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800'} text-white`}
    >
      {isLoading ? 'Adding... ' : children}
    </button>
  );
};

export default Button;
