import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductActions = ({ onDeleteClick, productId }) => {
  const history = useHistory();

  return (
    <div className="mt-6 flex space-x-4">
      <button
        onClick={onDeleteClick}
        className="bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-6 rounded-full shadow-lg hover:from-red-600 hover:to-red-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
      >
        Delete
      </button>

      <button
        onClick={() => history.push("/update-product/" + productId)}
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
      >
        Update
      </button>
    </div>
  );
};

export default ProductActions;
