// src/components/ProductForm.js
import React from 'react';
import FormField from './FormField';
import Button from './Button';
import UnitSelector from './UnitSelector';

const ProductForm = ({ product, setProduct, isPending, onSubmit, buttonText,theme }) => {
  const formClass=`p-8 rounded-md shadow-lg max-w-4xl w-full ${theme==='light'?'bg-white':'bg-black'}`;
  const titleClass=`text-3xl font-bold mb-8 text-center ${theme==='dark'?'text-blue-500':'text-blue-900'}`;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUnitChange = (unit) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      unit,
    }));
  };

  return (
    <div className="flex justify-center mt-4 items-center min-h-screen ">
      <form onSubmit={onSubmit} className={formClass}>
        <h2 className={titleClass} style={{ fontFamily: "'Poppins', sans-serif" }}>
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
            theme={theme}
          />
        
          <FormField 
            label="Ingredients" 
            id="ingredients" 
            name="ingredients" 
            value={product.ingredients} 
            onChange={handleChange} 
            required 
            placeholder="Enter ingredients"
            theme={theme}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField 
          label="Description" 
          id="description" 
          name="description" 
          value={product.description} 
          onChange={handleChange} 
          required 
          type="textarea" 
          placeholder="Enter product description"
          theme={theme}
        />

          <FormField 
            label="Price" 
            id="price" 
            name="price" 
            value={product.price} 
            onChange={handleChange} 
            required 
            type="number" 
            placeholder="Enter price"
            theme={theme}
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
            theme={theme}
          />
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <FormField 
          label="Image URL" 
          id="url" 
          name="url" 
          value={product.url} 
          onChange={handleChange} 
          required 
          placeholder="Enter image URL"
          theme={theme}
        />

        <FormField 
          label="Product Category" 
          id="category" 
          name="category" 
          value={product.category} 
          onChange={handleChange} 
          required 
          placeholder="Enter product category"
          theme={theme}
        />

        <UnitSelector 
          selectedUnit={product.unit} 
          onUnitChange={handleUnitChange} 
          theme={theme}
        />
        </div>

        <Button type="submit" isLoading={isPending} className="mt-6">
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
