// AddToCartButton.jsx
import { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import useCartContext from "../../hooks/useCartContext";

const AddToCartButton = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addCartItems } = useCartContext();

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async () => {
    setIsAdding(true);
    const itemPayload = {
      product_id: product.id,
      quantity: quantity
    };
    console.log("Payload:", itemPayload);
    try {
      const response = await addCartItems(itemPayload);
      console.log("From AddToCartButton: ", response);
      setIsAdded(true);
      setIsAdding(false);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    } catch (error) {
      setIsAdding(false);
      console.log(error);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between bg-gray-100 rounded-md p-1.5">
        <span className="text-xs font-medium text-gray-700">Quantity</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="p-1 rounded hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <FaMinus className="h-3 w-3 text-gray-600" />
          </button>
          <span className="text-base font-semibold w-6 text-center">{quantity}</span>
          <button
            onClick={increaseQuantity}
            disabled={quantity >= product.stock}
            className="p-1 rounded hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <FaPlus className="h-3 w-3 text-gray-600" />
          </button>
        </div>
      </div>
      
      <button
        onClick={addToCart}
        disabled={isAdding || isAdded || product.stock === 0}
        className={`w-full py-2 px-4 rounded-md font-medium flex items-center justify-center transition-all text-sm ${
          isAdded
            ? "bg-green-600 hover:bg-green-700 text-white"
            : product.stock === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        {isAdding ? (
          <>
            <span className="h-4 w-4 mr-1.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Adding...
          </>
        ) : isAdded ? (
          <>
            <FaCheck className="mr-1.5 h-4 w-4" />
            Added to Cart
          </>
        ) : product.stock === 0 ? (
          "Out of Stock"
        ) : (
          <>
            <FaShoppingCart className="mr-1.5 h-4 w-4" />
            Add to Cart
          </>
        )}
      </button>
      
      <div className="flex space-x-2 mt-2">
        <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md font-medium text-xs hover:bg-gray-50 transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AddToCartButton;