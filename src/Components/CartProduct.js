const CartProduct = ({ product, onRemove,theme }) => {
  const cartClass=`shadow-lg rounded-lg p-6 flex items-center space-x-6 transform hover:scale-105 transition duration-300 ease-in-out ${theme==='light'?'bg-white':'bg-black'}`;
  const pNameClass=`text-xl font-bold mb-2 ${theme==='light'?'text-black':'text-white'}`;
  return (
      <div className={cartClass}>
        {/* Product Image */}
        <div className="flex-none w-48 h-48">
          <img
            src={`/images/${product.url}`}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
  
        {/* Product Details */}
        <div className="flex-1">
          <h3 className={pNameClass} style={{ fontFamily: "'Poppins', sans-serif" }}>
            {product.name}
          </h3>
          <p className="text-lg font-bold text-blue-500 mt-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ${product.price}
          </p>
          <button
            onClick={() => onRemove(product.id)}
            className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:shadow-2xl hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default CartProduct;
  