import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import ProductList from "./ProductList";

const Home = ({onAddToCart}) => {
    const { data: products, isPending, error } = useFetch('http://localhost:8001/products');
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        require('./images/bakery1.jpg'),
        require('./images/bakery2.jpg'),
        require('./images/bakery3.jpeg') 
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, [slides.length]);

    return (
        <div className="container mx-auto mt-16">
            
            <div className="relative mb-10">
                <div className="overflow-hidden rounded-lg">
                    <div className="slider">
                        <img
                            src={slides[currentSlide]}
                            alt={`Slider Image ${currentSlide + 1}`}
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>

                {/* caption */}
                <div className="absolute bottom-10 left-10 text-white bg-opacity-75 bg-black px-4 py-2 rounded-lg">
                    <h1 className="text-4xl font-bold">Welcome to Our Bakery!</h1>
                    <p className="mt-2 text-lg">Discover our delicious treats, made fresh every day.</p>
                </div>
            </div>


            {isPending && <h4 className="text-2xl font-bold text-center">Loading...</h4>}
            {error && <div className="text-red-600 text-center">{error}</div>}
            {products&&<ProductList products={products} onAddToCart={onAddToCart} />}

         
        </div>
    );
};

export default Home;
