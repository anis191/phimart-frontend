// import React from 'react';
// import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ErrorAlert from "../ErrorAlert"
import apiClient from "../../services/api-client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import ProductsSkeleton from "../Skeletons/ProductsSkeleton";

const Product = () => {
    const [products, setProducts] = useState([])
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
        setLoading(true)
        apiClient.get("/products/")
        .then((res) => {
            setProducts(res.data.results)
            console.log(res.data.results)
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    },[])
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex justify-between items-center px-4 md:px-8 py-5">
                    <h2 className="text-2xl md:text-3xl font-bold">Trending Products</h2>
                    <a href="#" className="btn btn-secondary px-6 py-5 text-md rounded-xl">View All</a>
                </div>
                {Loading && (
                    <div className="flex justify-center">
                        <span className="loading loading-spinner text-secondary text-xl"></span>
                    </div>
                )}
                {error && <ErrorAlert error_message={error}/>}
                {!Loading && !error && products.length > 0 && (
                    <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={1} navigation breakpoints={{
                        640: {slidesPerView:2},
                        1024: {slidesPerView: 3}
                    }} className="mt-4 px-4 container">
                        {products.map(product => (
                            <SwiperSlide key={product.id} className="flex justify-center">
                                <ProductItem key={product.id} product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                {!Loading && !error && products.length === 0 && (
                    <p className="text-center text-gray-500 mt-5">No Trending Products Available</p>
                )}
                {/* <ProductsSkeleton /> */}
            </div>
        </section>
    );
};

export default Product;