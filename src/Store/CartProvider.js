import { useState } from "react";
import CartContext from "./create-context"

const CartProvider =props=>{
    const [itemList,setItemList] = useState([]);
    const [totalamount,setTotalAmount] = useState('');
    
    const TotalAmountHandler=(amount)=>{
     setTotalAmount(amount);
    }
    const addItemToCartHandler=(item)=>{

        const existingCartItemIndex = itemList.findIndex(
            (items) => items.id === item.id
          );
          const existingCartItem = itemList[existingCartItemIndex];
          let updatedItems;
      
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: Number(existingCartItem.quantity) + Number(item.quantity),
            };
            updatedItems = [...itemList];
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            updatedItems = itemList.concat(item);
          }
      
            setItemList(updatedItems);
        
    };
    const removeItemFromCartHandler=(id)=>{
        const existingCartItemIndex=itemList.findIndex(
            (item) => item.id === id
          );
          
          const existingItem = itemList[existingCartItemIndex];
          
          const updatedTotalAmount = totalamount - existingItem.price;
          
          let updatedItems;
          if (existingItem.quantity === '1' || existingItem.quantity <= 1) {
            updatedItems = itemList.filter(item => item.id !== id);
            }
         else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems = [...itemList];
            updatedItems[existingCartItemIndex] = updatedItem;
            }
          
        setItemList(updatedItems);
        setTotalAmount(updatedTotalAmount);
    };
    const cartContext={
        items:itemList,
        totalAmount:totalamount,
        addAmount:TotalAmountHandler,
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