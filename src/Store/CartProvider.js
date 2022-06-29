import { useState } from "react";
import CartContext from "./create-context"

const CartProvider =props=>{
    const [itemList,setItemList] = useState([]);
    const addItemToCartHandler=(item)=>{
        setItemList((prev)=>{
            return [...prev,item];
        })
        console.log('inside Cartprovider additemhandler',item)
    };
    const removeItemFromCartHandler=id=>{};
    const cartContext={
        items:itemList,
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;