import styles from './CartItem.module.css';
import CartItemForm from './CartItemForm';


const CartItem=props=>{
    return (<li className={styles.meals}>
        <div>
        <h3>{props.name}</h3>
        <div className={styles.prices}>Price:{props.price}</div>
        </div>
        <div>
          <CartItemForm id={props.id} quantity={props.quantity}/>
        </div>
    </li>);
};


export default CartItem;