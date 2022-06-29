import { useContext} from 'react';
import styles from './CartItemForm.module.css';
import CartContext from '../../Store/create-context';

const CartItemForm=(props)=>{
    const ctx= useContext(CartContext);
    
    const AddItemHandler=event=>{
        event.preventDefault();
        ctx.addItem({...props.item,quantity:1})
        
    };
    const RemoveItemHandler=event=>{
        event.preventDefault();
        ctx.removeItem(props.id);
    };
    return (<form className={styles.forms}>
        <span className={styles.quantity}>x {props.quantity}</span>
        <button onClick={RemoveItemHandler}> - </button>
        <button onClick={AddItemHandler}> + </button>
    </form>);
};

export default CartItemForm;