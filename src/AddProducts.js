import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const AddProducts = () => {
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    ingredients: "",
    price: "",
    quantity: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    fetch('http://localhost:8001/products', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      setIsPending(false);
      history.push('/');
      console.log(product);
    });
  };

  return (
    <div className="flex justify-center mt-16">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>Add Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name" style={{ fontFamily: "'Poppins', sans-serif" }}>Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="ingredients" style={{ fontFamily: "'Poppins', sans-serif" }}>Ingredients</label>
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              value={product.ingredients}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product ingredients"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Description */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 mb-2" htmlFor="description" style={{ fontFamily: "'Poppins', sans-serif" }}>Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product description"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="price" style={{ fontFamily: "'Poppins', sans-serif" }}>Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product price"
            />
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="quantity" style={{ fontFamily: "'Poppins', sans-serif" }}>Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product quantity"
            />
          </div>
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="url" style={{ fontFamily: "'Poppins', sans-serif" }}>Image URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={product.url}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div>

        {!isPending && <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
          style={{ fontFamily: "'Poppins', sans-serif" }}>
          Add Product
        </button>}
        {isPending && <button
          type="submit"
          className="w-full bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          style={{ fontFamily: "'Poppins', sans-serif" }}>
          Adding Product...
        </button>}
      </form>
    </div>
  );
}

export default AddProducts;
