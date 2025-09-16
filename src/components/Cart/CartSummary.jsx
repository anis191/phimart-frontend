import useCartContext from "../../hooks/useCartContext";
import authApiClient from "../../services/auth-api-client";

const CartSummary = ({ totalPrice, itemCount, cartId }) => {
  const { createOrGetCart, setCartId } = useCartContext();

  const shipping = itemCount === 0 || parseFloat(totalPrice) > 100 ? 0 : 10;
  const tax = parseFloat(totalPrice) * 0.1;
  const orderTotal = parseFloat(totalPrice) + tax + shipping;

  const createOrder = async () => {
    try {
      const response = await authApiClient.post("/orders/", { cart_id: cartId });
      if (response.status === 201) {
        alert("Order Created Successfully!");
        localStorage.removeItem("cartId");
        setCartId(localStorage.getItem("cartId"));
        await createOrGetCart();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
      <div className="card-body p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal ({itemCount} {itemCount > 1 ? "items" : "item"})</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-3 mt-2">
            <div className="flex justify-between font-bold text-gray-800 text-lg">
              <span>Order Total</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={createOrder}
            disabled={itemCount === 0}
            className="w-full px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
