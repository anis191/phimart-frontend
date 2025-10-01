import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import useAuthContext from "./useAuthContext";

const useStateData = () => {
    const {user} = useAuthContext()
    const [dashboardData, setDashboardData] = useState({});
    const [recentOrders, setRecentOrders] = useState([]);
    
    useEffect(()=>{
        const fetchDashboardData = async() =>{
            try{
                const response = await authApiClient.get("/data/")
                setDashboardData(response.data)
            }catch(err){console.log(err)}
        }

        const fetchOrders = async() => {
            try{
                const response = await authApiClient.get("/orders/")
                const sortedOrders = response.data
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .slice(0, 5);
                setRecentOrders(sortedOrders);
            }catch(error){console.log(error)}
        }

        fetchDashboardData()
        fetchOrders()
    },[])

    const total_categories = dashboardData?.total_categories || 0;
    const total_products = dashboardData?.total_products || 0;
    const total_orders = dashboardData?.total_orders || 0;
    const total_users = dashboardData?.total_users || 0;
    const total_reviews = dashboardData?.total_reviews || 0;
    const total_revenue = dashboardData?.total_revenue || 0;
    const total_payments = dashboardData?.total_payments || 0;
    const pending_payments = dashboardData?.pending_payments || 0;
    const refunds = dashboardData?.total_refunds || 0;
    
    const your_total_purchases = dashboardData?.purchase_products || 0;
    const your_total_orders = total_orders;
    const your_total_payments = dashboardData?.total_payments || 0;

    if(user?.is_staff){
        return{total_categories, total_products, total_orders, total_users, total_reviews, total_revenue, total_payments, pending_payments, refunds}
    }
    return{your_total_purchases, your_total_orders, your_total_payments, pending_payments, recentOrders}
};

export default useStateData;
