import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isPending, error } = useFetch(`http://localhost:8001/products/${id}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8001/products/' + product.id, {
      method: 'Delete'
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="min-h-screen flex flex-col hover:scale-105">
      <div className="flex-grow">
        {isPending && (
          <div className="text-center py-6">Loading...</div>
        )}

        {error && (
          <div className="text-center py-6 text-red-500">Error: {error}</div>
        )}

        {!isPending && product && (
          <div className="container mx-auto py-12 mt-16">
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 mb-6 md:mb-0">
                    <img
                      src={require(`${product.url}`)}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  </div>

                  <div className="flex-1 md:ml-8">
                    <h1 className="text-3xl font-bold text-blue-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {product.name}
                    </h1>
                    <p className="text-lg mt-2 text-gray-600">
                      {product.description}
                    </p>
                    <p className="text-lg mt-4 font-semibold text-gray-700">
                      Ingredients: <span className="text-gray-500">{product.ingredients}</span>
                    </p>
                    <p className="text-lg mt-4 font-semibold text-gray-700">
                      Price: <span className="text-green-500">${product.price}</span>
                    </p>
                    <p className="text-lg mt-4 font-semibold text-gray-700">
                      Quantity Available: <span className="text-gray-500">{product.quantity}</span>
                    </p>

                    <div className="mt-6 flex space-x-4">
                      <button
                        onClick={handleDelete}
                        className="bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-6 rounded-full shadow-lg hover:from-red-600 hover:to-red-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => history.push("/update-product/" + product.id)}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
