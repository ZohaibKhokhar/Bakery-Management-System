// src/components/Button.js
import React from 'react';

const Button = ({ onClick, children, type = "button", isLoading = false, disabled = false }) => {
  
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled}
      className={`w-full p-3  shadow-lg hover:shadow-xl transition-all rounded-lg  duration-300 ease-in-out font-semibold tracking-wide ${isLoading ? 'bg-blue-900' : 'bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-700 hover:scale-105 tracking-wide'} text-white`}
    >
      {isLoading ? 'Adding... ' : children}
    </button>
  );
  
};

export default Button;
