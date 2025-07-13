// import React from 'react';
// import book from "../../assets/images/image-1.png"
// import banner from "../../assets/images/banner.png"
import banner_2 from "../../../assets/images/banner-2.png"
import Countdown from "./Countdown";

const DiscountSection = () => {
    return (
        // <section className="w-full h-[500px] bg-cover bg-center flex justify-center items-center px-4 md:px-8" style={{backgroundImage : `url(${banner})`}}>
        <section className="w-full h-auto bg-gradient-to-r from-white to-pink-200 flex justify-center items-center">
        <div className="container flex flex-col md:flex-row items-center justify-between w-full mx-auto px-2 md:px-4 bg-cover">
            {/* left content */}
            <div className="order-2 w-full md:w-1/2 space-y-4 px-12 md:px-8 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">30% Discount On All Items. Hurry Up...!!!</h1>
                
                {/* Countdown feature */}
                <Countdown />

                <button className="btn btn-secondary px-6 py-3 rounded-full shadow-xl">Shop Collection</button>
            </div>

            {/* right image */}
            <div className="order-1 w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
                <img className="max-w-full drop-shadow-lg" src={banner_2} alt="product-img" />
            </div>
        </div>
        </section>
    );
};

export default DiscountSection;