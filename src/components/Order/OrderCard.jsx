import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import OrderItemsTable from "./OrderItemsTable";
import authApiClient from "../../services/auth-api-client";

const OrderCard = ({order, onCancel}) => {
    const {user} = useAuthContext()
    const[currStatus, setCurrStatus] = useState(order.status)

    const handleStatusChange = async(newStatus) => {
      console.log("1.before api call order: ", order)
      console.log("2.before api call currStatus:",currStatus)
      console.log("3.before api call newStatus:",newStatus)
      const response = await authApiClient.patch(`/orders/${order.id}/update_status/`, {status : newStatus})
      console.log("4.after api call, response: ",response)

      if(response.status === 200){
        console.log("5.after api call & success response:",response)
        setCurrStatus(newStatus)
      }
      console.log("3.after api call & success currStatus:",currStatus)
    }

  return (
    <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
      <div className="bg-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">Order #{order.id}</h2>
          <p className="text-gray-600 text-sm">Placed on {order.created_at}</p>
        </div>
        <div className="flex gap-2">
          { user.is_staff ? (
            <select value={currStatus} onChange={(event)=>handleStatusChange(event.target.value)} className="px-3 py-1 rounded-full text-white text-sm font-medium bg-blue-500">
              <option value="Not Paid">Not Paid</option>
              <option value="Ready To Ship">Ready To Ship</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Canceled">Canceled</option>
            </select>
          ) : (
          <span
            className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
              order.status === "Not Paid" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {order.status}
          </span>
          )}
          {order.status !== "Deliverd" && order.status != 'Canceled' && !user.is_staff && (
            <button onClick={()=>onCancel(order.id)} className="text-blue-700 hover:underline">Cancel</button>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-medium text-lg mb-4">Order Items</h3>
        
        {/* Order Items Table  */}
        <OrderItemsTable items={order.items}/>

      </div>
      <div className="border-t p-6 flex flex-col items-end">
        <div className="space-y-2 w-full max-w-[200px]">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total:</span>
            <span>${order.total_price.toFixed(2)}</span>
          </div>
        </div>
        {(!user.is_staff && order.status === "Not Paid") && (
          <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;