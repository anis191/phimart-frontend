import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import OrderItemsTable from "./OrderItemsTable";
import authApiClient from "../../services/auth-api-client";

const OrderCard = ({ order, onCancel }) => {
  const { user } = useAuthContext();
  const [currStatus, setCurrStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await authApiClient.patch(`/orders/${order.id}/update_status/`, { status: newStatus });
      if (response.status === 200) setCurrStatus(newStatus);
    } catch (err) { console.error(err); }
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const payload = { amount: order.total_price, orderId: order.id, numItems: order.items?.length };
      const response = await authApiClient.post("/payment/initiate/", payload);
      if (response.data.payment_url) window.location.href = response.data.payment_url;
      else alert("Payment Failed");
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const statusColors = {
    "Not Paid": "bg-red-500",
    "Ready To Ship": "bg-yellow-500",
    "Shipped": "bg-blue-500",
    "Delivered": "bg-green-500",
    "Canceled": "bg-gray-400",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Order #{order.id}</h2>
          <p className="text-gray-500 text-sm">Placed on {new Date(order.created_at).toLocaleDateString()}</p>
        </div>
        <div className="flex gap-2 items-center">
          {user.is_staff ? (
            <select
              value={currStatus}
              onChange={(e) => handleStatusChange(e.target.value)}
              className={`px-3 py-1 rounded-full text-white text-sm font-medium transition-colors ${
                currStatus === "Not Paid" ? "bg-red-500 hover:bg-red-600" :
                currStatus === "Ready To Ship" ? "bg-yellow-500 hover:bg-yellow-600" :
                currStatus === "Shipped" ? "bg-blue-500 hover:bg-blue-600" :
                currStatus === "Delivered" ? "bg-green-500 hover:bg-green-600" :
                currStatus === "Canceled" ? "bg-gray-400 hover:bg-gray-500" :
                "bg-blue-500"
              }`}
            >
              <option>Not Paid</option>
              <option>Ready To Ship</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Canceled</option>
            </select>
          ) : (
            <span
              className={`px-3 py-1 rounded-full text-white text-sm font-medium ${statusColors[order.status]}`}
            >
              {order.status}
            </span>
          )}
          {!user.is_staff && order.status !== "Delivered" && order.status !== "Canceled" && (
            <button onClick={() => onCancel(order.id)} className="text-red-600 hover:underline text-sm">
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Items Table */}
      <div className="p-6">
        <h3 className="font-medium text-lg mb-4 text-gray-700">Order Items</h3>
        <OrderItemsTable items={order.items} />
      </div>

      {/* Total & Payment */}
      <div className="border-t p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="space-y-2 w-full max-w-[220px]">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold text-gray-800 border-t pt-2">
            <span>Total:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
        </div>
        {!user.is_staff && order.status === "Not Paid" && (
          <button
            onClick={handlePayment}
            disabled={loading}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
