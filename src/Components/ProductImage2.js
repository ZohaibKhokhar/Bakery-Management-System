// ProductImage.js
import React from 'react';

const ProductImage2 = ({ url, alt }) => {
  return (
    <img
      src={`/images/${url}`}  
      alt={alt}
      className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg mb-4"  // Adjusted width and height
    />
  );
};

export default ProductImage2;
