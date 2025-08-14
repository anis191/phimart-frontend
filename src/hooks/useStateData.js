import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const useStateData = () => {
    const [total_products, setTotalProducts] = useState(0)
    const [total_orders, setTotalOrders] = useState(0)
    const [total_users, setTotalUsers] = useState(0)
    const [recentOrders, setRecentOrders] = useState([]);
    
    useEffect(()=>{
        const fetchProducts = () => {
            apiClient.get("/products/")
            .then((res) => {
                setTotalProducts(res.data.count)
            })
            .catch(err => console.log(err.message))
        }

        const fetchOrders = async() => {
            try{
                const response = await authApiClient.get("/orders/")
                setTotalOrders(response.data.length)
                const sortedOrders = response.data
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .slice(0, 5);
                setRecentOrders(sortedOrders);
            }catch(error){console.log(error)}
        }

        const fetchUsers = () => {
            authApiClient.get("/auth/users/")
            .then(res => {
                setTotalUsers(res.data.length)
            })
        }

        fetchProducts()
        fetchOrders()
        fetchUsers()
    },[])

    return { total_products, total_orders, total_users, recentOrders };
};

export default useStateData;