import { useEffect, useState } from "react";
import OrderCard from "../components/Order/OrderCard";
import authApiClient from "../services/auth-api-client";
import OrderSkeleton from "../components/Skeletons/OrderSkeleton";

const Order = () => {
    const[orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const res = await authApiClient.get("/orders/");
                setOrders(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
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
            
            {loading && (<OrderSkeleton />)}

            {orders.map((order) => (
                <OrderCard key={order.id} order={order} onCancel={handleCancelOrder}/>
            ))}
        </div>
    );
};

export default Order;