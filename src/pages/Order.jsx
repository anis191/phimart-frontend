import { useEffect, useState } from "react";
import OrderCard from "../components/Order/OrderCard";
import authApiClient from "../services/auth-api-client";

const Order = () => {
    const[orders, setOrders] = useState([])
    
    useEffect(()=>{
        try{
            authApiClient.get("/orders/")
            .then((res) => setOrders(res.data))
        }catch(error){console.log(error)}
    },[])

    const handleCancelOrder = async(orderId) => {
      try{
        const response = await authApiClient.post(`/orders/${orderId}/cancel/`)
        if(response.status === 200){
            setOrders((prevOrders) => prevOrders.map(order =>
                order.id === orderId ? {...order, status : 'Canceled'} : order
            ))
        }
      }catch(error){console.log(error)}
    }
    
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-5">Order Details</h1>
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} onCancel={handleCancelOrder}/>
            ))}
        </div>
    );
};

export default Order;