import ProductList from "../Components/ProductList";
import Slider from "../Components/Slider";
import Cakes from "../Components/Cakes";
import HomeVideo from "../Components/HomeVideo";
import ShadeCardSection from "../Components/ShadeCardSection";

const Home = ({ onAddToCart, products, theme, isLoading, error }) => {

    return (
        <div className="container-fluid mx-auto mt-16 p-0">
            <Slider></Slider>
            {isLoading && <h4 className="text-2xl font-bold text-center text-blue-600 p-16 m-16">Loading...</h4>}
            {error && <div className="text-2xl text-red-900 text-center">{error}</div>}
            {products && <ProductList products={products} onAddToCart={onAddToCart} theme={theme} />}
            <ShadeCardSection theme={theme}/>
            <HomeVideo/>
            <Cakes theme={theme}/>
          
        </div>
    );
};

export default Home;
