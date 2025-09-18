
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ErrorAlert from "../ErrorAlert"
import apiClient from "../../services/api-client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProductsSkeleton from "../Skeletons/ProductsSkeleton";
import { Link } from "react-router";

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
                <div className="flex items-center justify-between mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold">
                      Trending Products
                    </h2>
                    <Link to="/shop"><button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm md:text-base font-medium shadow-md hover:scale-105 active:scale-95 transition-transform duration-200">
                      View All
                    </button></Link>
                </div>
                <p className="hidden md:block text-gray-600 text-sm md:text-base text-center md:text-left">
                  Explore top-rated products loved by our customers.
                </p>
                {Loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <ProductsSkeleton key={i} />
                      ))}
                    </div>
                )}
                {error && <ErrorAlert error_message={error}/>}
                {!Loading && !error && products.length > 0 && (
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 12 },
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        1024: { slidesPerView: 4, spaceBetween: 20 }
                      }}
                      className="mt-4 px-4">
                        {products.map(product => (
                            // <SwiperSlide key={product.id} className="flex justify-center">
                            <SwiperSlide key={product.id} className="flex justify-center py-4">
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