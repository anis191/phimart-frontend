import { useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";
import CartSkeleton from "../components/Skeletons/CartSkeleton";

const Cart = () => {
    const {createOrGetCart, updateCartItemQuantity, cart, loading, deleteCartItems, cartId} = useCartContext()
    const [localCart, setLocalCart] = useState(cart)
    
    useEffect(()=>{
        createOrGetCart()
    },[createOrGetCart])

    useEffect(()=>{
        setLocalCart(cart)
    },[cart])

    const handleUpdateQuantity = async(itemId, quantity) => {
        const prevLocalCartCopy = localCart // store a capy of localCart

        setLocalCart((prevLocalCart) => {
            const updateItems = prevLocalCart.items.map((item)=>
                item.id === itemId ? {
                    ... item,
                    quantity: quantity, total_price: item.product.price * quantity,
                } : item
            )
            
            return {
                ... prevLocalCart,
                items: updateItems,
                total_price: updateItems.reduce(
                (sum, item) => sum + item.total_price, 0
            )
            }
        })
        try{
            await updateCartItemQuantity(itemId, quantity)
        }catch(error){
            console.log(error)
            setLocalCart(prevLocalCartCopy)
        }
    }

    const handleRemoveItem = async(itemId) =>{
        setLocalCart((prevLocalCart) => {
            const updatedItems = prevLocalCart.items.filter((item) => item.id !== itemId)

            return {
            ... prevLocalCart, 
            items: updatedItems,
            total_price: updatedItems.reduce((sum, item) => sum + item.total_price, 0)
        }})

        try{
            await deleteCartItems(itemId)
        }catch(error){console.log(error)}
    }

    if(loading) return <p className="text-blue-500 text-center p-5 font-bold">
        <CartSkeleton />
    </p>
    if(!localCart) return <p className="text-blue-500 text-center p-5 font-bold">No cart found</p>

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div><CartItemList items={localCart.items} handleUpdateQuantity={handleUpdateQuantity} handleRemoveItem={handleRemoveItem}/></div>
                <div><CartSummary totalPrice={localCart.total_price} itemCount={localCart.items.length} cartId={cartId}/></div>
            </div>
        </div>
    );
};

export default Cart;