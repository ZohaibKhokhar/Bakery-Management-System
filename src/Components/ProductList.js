import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategorySelector from './CategorySelector';

const ProductList = ({ products, theme, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // new Set() creates a set in javascript 
  //A Set is a JavaScript object that stores unique values only.
  // Duplicate categories are automatically removed.
  //... is spread operator that takes all values from set and spreads them into an array
  //[...new Set()] converts the set back into array 
  // Extracting unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filtering products based on the selected category
  const filteredProducts = selectedCategory ?
    products.filter((product) => product.category === selectedCategory) : products;

  return (
    <div className='product-list pb-8'>
      <CategorySelector
        categories={categories}
        onCategoryChange={setSelectedCategory}
        theme={theme} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-12">
        {filteredProducts && filteredProducts.map((product) => (
           <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
