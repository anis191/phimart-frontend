// import React from 'react';
import defaultImage from "../../assets/images/default-image.png"

const ProductItem = ({product}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={product.images.length > 0 ? product.images[0].image : defaultImage}
              alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex flex-col items-center">
            <h2 className="card-title">{product.name}</h2>
            <h3 className="font-bold text-xl text-red-700">${product.price}</h3>
            <p>{product.description}</p>
            <div className="card-actions justify-end mt-1">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
    );
};

export default ProductItem;