import { useCallback, useState } from "react";
// import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
    const[cart, setCart] = useState(null)
    const[cartId, setCartId] = useState(() => localStorage.getItem('cartId'))
    const[loading, setLoading] = useState(false)

    const createOrGetCart = useCallback(async () =>{
        setLoading(true)
        try{
            const response = await authApiClient.post("/carts/")
            if (!cartId){
                localStorage.setItem("cartId", response.data.id)
                setCartId(response.data.id)
            }
            setCart(response.data)
            // console.log(response.data)
        }catch(error){console.log(error)}
        finally{setLoading(false)}
    },[cartId])

    // Add items to the cart:
    const addCartItems = useCallback(async(data) =>{
        setLoading(true)
        if(!cartId) await createOrGetCart();
        try{
            const response = await authApiClient.post(`/carts/${cartId}/items/`,data)
            // console.log("From useCart hook: ",response.data)
            return response.data
        }catch(error){console.log(error)}
        finally{setLoading(false)}
    },[cartId,createOrGetCart])

    // Update cart item quantity:
    const updateCartItemQuantity = useCallback(async(itemId, newQuantity) => {
        try{
            const response = await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`,{quantity:newQuantity})
            console.log(response)
        }catch(error){console.log(error)}
    },[cartId])

    // Delete Cart Items:
    const deleteCartItems = useCallback(async(itemId) =>{
        try{
            await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`)
        }catch(error){console.log(error)}
    },[cartId])

    return { createOrGetCart, cart, addCartItems, updateCartItemQuantity, loading, deleteCartItems, cartId, setCartId }
};

export default useCart;