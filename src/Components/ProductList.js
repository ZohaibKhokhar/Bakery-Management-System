// ProductList.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategorySelector from './CategorySelector';

const ProductList = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory 
    ? products.filter((product) => product.category === selectedCategory) 
    : products;

  return (
    <div>
      <CategorySelector 
        categories={categories} 
        onCategoryChange={setSelectedCategory} 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-12">
        {filteredProducts && filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
