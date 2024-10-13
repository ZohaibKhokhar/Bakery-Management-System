const Cart = ({ cartProducts = [], onRemove }) => {
    return (
      <div className="min-h-screen flex flex-col mt-16">
        {/* Main Content */}
        <div className="flex-grow container mx-auto py-12">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2
              className="text-4xl font-extrabold text-gray-800"
              style={{ fontFamily: "'Serif', sans-serif" }}
            >
              Your Cart
            </h2>
          </div>
  
          {cartProducts.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              {/* Empty Cart Message */}
              <h2 className="text-2xl font-bold text-gray-600 mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-lg text-gray-500 mb-6">
                It looks like you haven’t added anything to your cart yet.
              </p>
  
              {/* Shop Now Button */}
              <a
                href="/"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full no-underline shadow-lg hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Shop Now
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  {/* Product Image */}
                  <div className="flex-none w-48 h-48">
                    <img
                      src={require(`${product.url}`)}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
  
                  {/* Product Text (Name, Price, Remove Button) */}
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-lg font-bold text-blue-500 mt-4"
                      style={{ fontFamily: "'Poppins', sans-serif'" }}
                    >
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
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Cart;
  