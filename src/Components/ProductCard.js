// ProductCard.js
import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import AddToCartButton from './AddToCartButton';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart,theme }) => {
  const classname=`shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out ${theme==='light'? 'bg-white ' : 'bg-black text-white' }`;
  return (
    <div className={classname}>
      <Link to={`/products/${product.id}`} className="no-underline">
        <ProductImage url={product.url} alt={product.name} />
        <ProductDetails name={product.name} price={product.price} theme={theme}/>
      </Link>
      <AddToCartButton onAddToCart={onAddToCart} product={product} />
    </div>
  );
};

export default ProductCard;
