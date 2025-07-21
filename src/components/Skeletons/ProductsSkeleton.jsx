// import React from 'react';
const ProductsSkeleton = () => {
    return (
        <div>
            <div className="flex w-64 flex-col gap-4">
                <div className="skeleton h-40 w-full bg-gray-300"></div>
                <div className="skeleton h-5 w-32 bg-gray-300"></div>
                <div className="skeleton h-5 w-full bg-gray-300"></div>
                <div className="skeleton h-5 w-full bg-gray-300"></div>
            </div>
        </div>
    );
};

export default ProductsSkeleton;