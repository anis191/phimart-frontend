import { useCallback, useState } from "react";
// import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
    const[cart, setCart] = useState(null)
    const[cartId, setCartId] = useState(() => localStorage.getItem('cartId'))

    const createOrGetCart = useCallback(async () =>{
        try{
            const response = await authApiClient.post("/carts/")
            if (!cartId){
                localStorage.setItem("cartId", response.data.id)
                setCartId(response.data.id)
            }
            setCart(response.data)
            console.log(response.data)
        }catch(error){console.log(error)}
    },[cartId])

    // Add items to the cart:
    const addCartItems = useCallback(async(data) =>{
        if(!cartId) await createOrGetCart();
        try{
            const response = await authApiClient.post(`/carts/${cartId}/items/`,data)
            console.log("From useCart hook: ",response.data)
            return response.data
        }catch(error){console.log(error)}
    },[cartId,createOrGetCart])

    return { createOrGetCart, cart, addCartItems }
};

export default useCart;