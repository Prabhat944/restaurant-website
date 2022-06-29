import React, {useContext } from "react";
import CartContext from "../../Store/create-context";
import styles from './HeaderButton.module.css'

const HeaderButton=(props)=>{
    const ctx=useContext(CartContext);
    let quantity=0;
    ctx.items.forEach(item=>{
        quantity += Number(item.quantity)
    })
    return (<button className={styles.button} onClick={props.onClick}>
       <span></span>
       <span> Your Cart</span>
       <span className={styles.badge}>{quantity}</span>
       
    </button>)
}

export default HeaderButton;