const NotFoundMessage = ({theme}) => {
  const h1Class=`text-6xl font-extrabold ${theme==='light'?'text-gray-800':'text-white'}`;
    return (
      <>
        <h1 className={h1Class}>404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-500 mt-2">
          It might have been moved or deleted. Please check the URL or return to the homepage.
        </p>
      </>
    );
  };
  
  export default NotFoundMessage;
  