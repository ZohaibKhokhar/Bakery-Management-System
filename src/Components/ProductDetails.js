// ProductDetails.js
import React from 'react';

const ProductDetails = ({ name, price,theme }) => {
  const detailClass=`text-xl font-bold  mb-2 ${theme==='light'?'text-black':'text-white'}`
  return (
    <div>
      <h3 className={detailClass} style={{ fontFamily: "'Poppins', sans-serif" }}>
        {name}
      </h3>
      <p className="text-lg text-green-500 mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
        ${price}
      </p>
    </div>
  );
};

export default ProductDetails;
