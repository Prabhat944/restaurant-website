import { useContext } from 'react';
import CartContext from '../../Store/create-context';
import Card from '../UI/Card';
import Model from '../UI/Model';
import styles from './Cart.module.css';
import CartItem from './CartItem';


const Cart=props=>{
    
    const ctx=useContext(CartContext);
    const hasItems = ctx.items.length > 0;
    
    const TotalAmount=()=>{
        let totalamount = 0;
        ctx.items.forEach(item=>{
            totalamount = totalamount + Number(item.quantity * item.price)
        });
        ctx.addAmount(totalamount.toFixed(2));
        return ctx.totalAmount;
      
    }

const cartItem=(<ul className={styles['cart-items']}>
{ctx.items.map(item=><CartItem 
     key={item.id + 'cart'}
     id={item.id}
     name={item.name}
     price={item.price}
     quantity={item.quantity}></CartItem>
    )}
</ul>);
    return(
        <Model onCloseCart={props.onCloseCart}>
            {ctx.items.length > 0 && <Card>
                <ul>
                {cartItem}
                </ul>
            </Card>}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{TotalAmount()}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
               {hasItems && <button className={styles.button}>Order</button>}
            </div>
            </Model>
    );
};

export default Cart;