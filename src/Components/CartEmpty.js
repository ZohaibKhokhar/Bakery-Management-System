import { Link } from "react-router-dom/cjs/react-router-dom.min";
const CartEmpty = ({ theme }) => {
  const headingClass = `text-2xl font-bold mb-4 ${
    theme === 'light' ? 'text-gray-600' : 'text-gray-200'
  }`;

  const paragraphClass = `text-lg mb-6 ${
    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
  }`;

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className={headingClass}>Your Cart is Empty</h2>
      <p className={paragraphClass}>
        It looks like you haven’t added anything to your cart yet.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full no-underline shadow-lg hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default CartEmpty;
