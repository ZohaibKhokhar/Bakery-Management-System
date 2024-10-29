// ProductCard.js
import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import AddToCartButton from './AddToCartButton';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
      <Link to={`/products/${product.id}`} className="no-underline">
        <ProductImage url={product.url} alt={product.name} />
        <ProductDetails name={product.name} price={product.price} />
      </Link>
      <AddToCartButton onAddToCart={() => onAddToCart(product)} />
    </div>
  );
};

export default ProductCard;
