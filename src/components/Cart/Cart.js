import { useContext } from 'react';
import CartContext from '../../Store/create-context';
import Card from '../UI/Card';
import Model from '../UI/Model';
import styles from './Cart.module.css';
import CartItem from './CartItem';


const Cart=props=>{
    const ctx=useContext(CartContext);
    
    const TotalAmount=()=>{
        let totalamount = 0;
        ctx.items.forEach(item=>{
            totalamount = totalamount + Number(item.quantity * item.price)
        });
        console.log(totalamount)
        return totalamount.toFixed(2);
      
    }

const cartItem=(<ul className={styles['cart-items']}>
{ctx.items.map(item=><CartItem 
     key={item.id + 'cart'}
     name={item.name}
     price={item.price}
     quantity={item.quantity}></CartItem>
    )}
</ul>);
    return(
        <Model onCloseCart={props.onCloseCart}>
            <Card>
                <ul>
                {cartItem}
                </ul>
            </Card>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{TotalAmount()}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
            </Model>
    );
};

export default Cart;