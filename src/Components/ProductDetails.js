// ProductDetails.js
import React from 'react';

const ProductDetails = ({ name, price }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {name}
      </h3>
      <p className="text-lg text-green-500 mt-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        ${price}
      </p>
    </div>
  );
};

export default ProductDetails;
