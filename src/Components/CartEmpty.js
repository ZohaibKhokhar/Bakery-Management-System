const CartEmpty = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Your Cart is Empty</h2>
        <p className="text-lg text-gray-500 mb-6">
          It looks like you haven’t added anything to your cart yet.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full no-underline shadow-lg hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Shop Now
        </a>
      </div>
    );
  };
  
  export default CartEmpty;
  