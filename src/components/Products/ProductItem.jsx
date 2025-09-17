import { Link } from "react-router";
import defaultImage from "../../assets/images/default-image.png";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}/`}>
      <div className="group my-3 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-lg transition-all duration-300">
        
        {/* Product Image Section */}
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <img
            className="peer absolute top-0 right-0 h-full w-full object-cover"
            src={product.images.length > 0 ? product.images[0].image : defaultImage}
            alt={product.name}
          />
          {product.images.length > 1 && (
            <img
              className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-700 hover:right-0 peer-hover:right-0"
              src={product.images[1].image}
              alt={product.name}
            />
          )}

          {/* Floating animation icon */}
          <svg
            className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
            />
          </svg>
        </div>

        {/* Product Info */}
        <div className="mt-4 px-5 pb-5 flex flex-col gap-2">
          <h5 className="text-lg font-semibold tracking-tight text-slate-900 line-clamp-1">
            {product.name}
          </h5>

          <div className="flex justify-between items-center">
          {/* Price & After Discount */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">
              ${product.after_discount ?? product.price}
            </span>
            {product.after_discount && (
              <span className="text-sm text-gray-500 line-through">
                ${product.price}
              </span>
            )}
          </div>

          {/* Stock Info */}
          <p className={`mr-1.5 text-sm ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p></div>

          {/* Action Button */}
          <button
            className={`flex w-full items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white transition
              ${product.stock > 0 ? "bg-slate-900 hover:bg-gray-700 focus:ring-blue-300" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={product.stock === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {product.stock > 0 ? "Buy Now" : "Out of Stock"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
