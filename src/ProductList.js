import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductList = ({ products,onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <Link to={`/products/${product.id}`} className="no-underline">
              <img
                src={require(`${product.url}`)}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3
                className="text-xl font-bold text-black mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {product.name}
              </h3>
              <p
                className="text-lg  text-green-500 mt-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ${product.price}
              </p>
            </Link>
            <button onClick={()=>onAddToCart(product)} className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
