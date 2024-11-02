// CartIcon.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon({ cartCount }) {
  return (
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
  );
}

export default CartIcon;
