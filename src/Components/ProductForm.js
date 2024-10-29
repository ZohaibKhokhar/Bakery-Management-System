// src/components/ProductForm.js
import React from 'react';
import FormField from './FormField';
import Button from './Button';

const ProductForm = ({ product, setProduct, isPending, onSubmit, buttonText }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center mt-16 items-center min-h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {buttonText === "Add Product" ? "Add Product" : "Update Product"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField 
            label="Product Name" 
            id="name" 
            name="name" 
            value={product.name} 
            onChange={handleChange} 
            required 
            placeholder="Enter product name"
          />
          <FormField 
            label="Ingredients" 
            id="ingredients" 
            name="ingredients" 
            value={product.ingredients} 
            onChange={handleChange} 
            required 
            placeholder="Enter ingredients"
          />
        </div>

        <FormField 
          label="Description" 
          id="description" 
          name="description" 
          value={product.description} 
          onChange={handleChange} 
          required 
          type="textarea" 
          placeholder="Enter product description"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField 
            label="Price" 
            id="price" 
            name="price" 
            value={product.price} 
            onChange={handleChange} 
            required 
            type="number" 
            placeholder="Enter price"
          />
          <FormField 
            label="Quantity" 
            id="quantity" 
            name="quantity" 
            value={product.quantity} 
            onChange={handleChange} 
            required 
            type="number" 
            placeholder="Enter quantity"
          />
        </div>

        <FormField 
          label="Image URL" 
          id="url" 
          name="url" 
          value={product.url} 
          onChange={handleChange} 
          required 
          placeholder="Enter image URL"
        />

        <Button type="submit" isLoading={isPending}>
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
