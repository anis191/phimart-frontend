// import React from 'react';
import ProductItem from "../Products/ProductItem"
import ErrorAlert from "../ErrorAlert"
import ProductsSkeleton from "../Skeletons/ProductsSkeleton";

const ProductList = ({products, loading, error}) => {
    if(loading)
        return(
            <div className="flex justify-center min-h-screen">
                {/* <span className="loading loading-spinner text-secondary text-xl"></span> */}
                <ProductsSkeleton />
            </div>
        )
    else if(error)
        return(
            <div className="flex justify-center items-center h-[50vh]">
                <span className="hover:shadow-red-400 hover:shadow-2xl"><ErrorAlert error_message={error}/></span>
            </div>
        )
    return (
        <>
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto bg-gray-100 gap-5 mt-5 p-5">
                {
                    products.map((product)=>(
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </div>
        </>
    );
};

export default ProductList;