// import React from 'react';
import DiscountSection from "../components/Home/Discount/DiscountSection";
import Features from "../components/Home/Features";
import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Category from "../components/Home/Categories/Category"
import Product from "../components/Products/Product";

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <Category />
            <Product />
            <Features />
            <DiscountSection />
        </div>
    );
};

export default Home;