// ProductImage.js
import React from 'react';

const ProductImage = ({ url, alt }) => {
  return (
    <img
    src={`/images/${url}`}  
      alt={alt}
      className="w-full h-48 object-cover rounded-lg mb-2"
    />
  );
};

export default ProductImage;
