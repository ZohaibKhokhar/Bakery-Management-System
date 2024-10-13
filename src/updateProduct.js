import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const UpdateProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [quantity, setQuantity] = useState("");
  const [url, setUrl] = useState("");
  const [isPending, setIsPending] = useState(false);
  

  useEffect(() => {
    fetch(`http://localhost:8001/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setIngredients(data.ingredients);
        setQuantity(data.quantity);
        setUrl(data.url);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedProduct = { name, description, price, ingredients, quantity, url };

    setIsPending(true);

    fetch(`http://localhost:8001/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    }).then(() => {
      setIsPending(false);
      history.push(`/products/${id}`);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-16 bg-gray-100">
    <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
      {product && (
        <form onSubmit={handleUpdate} className="space-y-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            Update Product
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label className="block text-lg font-semibold mb-2">Product Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            {/* Price */}
            <div>
              <label className="block text-lg font-semibold mb-2">Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold mb-2">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            {/* Ingredients */}
            <div>
              <label className="block text-lg font-semibold mb-2">Ingredients:</label>
              <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            {/* Quantity */}
            <div>
              <label className="block text-lg font-semibold mb-2">Quantity Available:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold mb-2">Image URL:</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
  
          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            {!isPending ? (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
              >
                Update Product
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
                disabled
              >
                Updating...
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  </div>
  
  );
};

export default UpdateProduct;
