// import React from 'react';
import defaultImage from "../../assets/images/default-image.png"

const ProductItem = ({product}) => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shadow-md">
          <figure className="h-[200px] w-full overflow-hidden flex justify-center items-center bg-white">
            <img
              src={product.images.length > 0 ? product.images[0].image : defaultImage}
              alt="Shoes" className="h-full w-auto object-contain" />
          </figure>
          <div className="card-body text-center flex flex-col items-center p-3">
            <h2 className="card-title">{product.name}</h2>
            <h3 className="font-bold text-xl text-red-700">${product.price}</h3>
            <p>{product.description}</p>
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-secondary btn-sm">Buy Now</button>
            </div>
          </div>
        </div>
    );
};

export default ProductItem;