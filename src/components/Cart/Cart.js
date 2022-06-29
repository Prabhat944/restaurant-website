import Model from '../UI/Model';
import styles from './Cart.module.css';


const Cart=props=>{
const cartItem=(<ul className={styles['cart-items']}>
{[{id:'c1',name:'shushi',amount:'2',price:'12.99',}].map(item=><li>{item.name}</li>)}
</ul>);
    return(
        <Model onCloseCart={props.onCloseCart}>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
            </Model>
    );
};

export default Cart;