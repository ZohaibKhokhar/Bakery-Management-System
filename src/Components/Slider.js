import { useState, useEffect } from 'react';

const Slider = () => {
    const urls = ['bakery1.jpg', 'bakery2.jpg', 'bakery3.jpeg'];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = urls.map((img) => `/images/${img}`); // Assume images are in 'public/images'

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval); 
    }, [slides.length]);

    return (
        <div className="container-fluid mx-auto mt-16 " style={{"padding-top":"15px"}}
>
            <div className="relative mb-10">
                <div className="overflow-hidden rounded-lg">
                    <div className="slider" >
                        <img
                            src={slides[currentSlide]}
                            alt={`Slider Image ${currentSlide + 1}`}
                            className="w-full h-96 object-cover"
                            style={{height:"85vh"
                                
                            }}
                        />
                    </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-10 left-10 text-white bg-opacity-75 bg-black px-4 py-2 rounded-lg">
                    <h1 className="text-4xl font-bold">Welcome to Our Bakery!</h1>
                    <p className="mt-2 text-lg">Discover our delicious treats, made fresh every day.</p>
                </div>
            </div>
        </div>
    );
};


export default Slider;
