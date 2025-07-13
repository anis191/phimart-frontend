// import React from 'react';
// import book from "../../assets/images/image-1.png"
import banner from "../../../assets/images/banner.png"

const CarouselSlide = ({title, subtitle, image}) => {
    return (
        <section className="w-full h-[500px] bg-cover bg-center flex justify-center items-center px-4 md:px-8" style={{backgroundImage : `url(${banner})`}}>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mx-auto px-2 md:px-4 bg-cover">
            {/* left content */}
            <div className="w-full md:w-1/2 space-y-4 px-3 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-600">{subtitle}</p>
                <button className="btn btn-secondary px-6 py-3 rounded-full shadow-xl">Shop Product</button>
            </div>

            {/* right image */}
            <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
                <img className="max-w-[150px] md:max-w-[300px] drop-shadow-lg" src={image} alt="product-img" />
            </div>
        </div>
        </section>
    );
};

export default CarouselSlide;