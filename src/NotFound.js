const NotFound = () => {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-gray-100 pt-20">
        {/* Main Content */}
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
            <p className="text-2xl font-semibold text-gray-600 mt-4">
              Oops! The page you are looking for does not exist.
            </p>
            <p className="text-lg text-gray-500 mt-2">
              It might have been moved or deleted. Please check the URL or return to the homepage.
            </p>
            <a
              href="/"
              className="mt-6 inline-block bg-gradient-to-r from-blue-400 no-underline via-blue-500 to-blue-600 text-white py-2 px-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default NotFound;
  