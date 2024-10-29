import React from 'react';

const ProductInfo = ({ product }) => (
    <div className="flex-1">
        <h1 className="text-3xl font-bold text-blue-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {product.name}
        </h1>
        <p className="text-lg mt-2 text-gray-600">{product.description}</p>
        <p className="text-lg mt-4 font-semibold text-gray-700">
            Ingredients: <span className="font-normal text-gray-500">{product.ingredients}</span>
        </p>

        <p className="text-lg mt-4 font-semibold text-gray-700">
            Price: <span className="text-green-500 font-normal">${product.price}</span>
        </p>
        <p className="text-lg mt-4 font-semibold text-gray-700">
            Quantity Available: <span className="text-gray-500 font-normal ">{product.quantity}</span>
        </p>
    </div>
);

export default ProductInfo;
