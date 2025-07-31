import { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
    const {createOrGetCart, cart} = useCartContext()
    
    useEffect(()=>{
        createOrGetCart()
    },[])
    
    return (
        <div className="bg-red-400 p-5">
            {JSON.stringify(cart)}
        </div>
    );
};

export default Cart;