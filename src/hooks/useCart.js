import { useState } from "react";
import apiClient from "../services/api-client";

const useCart = () => {
    const getToken = () =>{
        const token = localStorage.getItem('authTokens')
        return token ? JSON.parse(token) : null
    }
    const[authTokens] = useState(getToken())
    const[cart, setCart] = useState(null)
    const[cartId, setCartId] = useState(() => localStorage.getItem('cartId'))

    const createOrGetCart = async () =>{
        try{
            const response = await apiClient.post("/carts/",{},{
                headers: {Authorization: `JWT ${authTokens?.access}`}
            })
            if (!cartId){
                localStorage.setItem("cartId", response.data.id)
                setCartId(response.data.id)
            }
            setCart(response.data)
            console.log(response.data)
        }catch(error){console.log(error)}
    }

    // Add items to the cart:
    const addCartItems = async(data) =>{
        if(!cartId) await createOrGetCart();
        try{
            const response = await apiClient.post(`/carts/${cartId}/items/`,data,{
                headers: {Authorization: `JWT ${authTokens?.access}`}
            })
            // console.log("From useCart hook: ",response.data)
            return response.data
        }catch(error){console.log(error)}
    }

    return { createOrGetCart, cart, addCartItems }
};

export default useCart;