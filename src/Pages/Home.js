import useFetch from "../useFetch";
import ProductList from "../Components/ProductList";
import { getProductUrl,getBaseUrl } from "../constants";
import Slider from "../Components/Slider";


const Home = ({onAddToCart,products,isPending,error}) => {
    
    return (
        <div className="container-fluid mx-auto mt-16">
           <Slider></Slider>
            {isPending && <h4 className="text-2xl font-bold text-center">Loading...</h4>}
            {error && <div className="text-red-600 text-center">{error}</div>}
            {products&&<ProductList products={products} onAddToCart={onAddToCart} />}
        </div>
    );
};

export default Home;
