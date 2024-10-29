// AddToCartButton.js
import React from 'react';

const AddToCartButton = ({ onAddToCart }) => {
  return (
    <button
      onClick={onAddToCart}
      className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
