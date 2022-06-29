import Input from '../UI/Input';
import styles from './CartItemForm.module.css';

const CartItemForm=(props)=>{
    const extraAddHandler=event=>{
        event.preventDefault();
    };
    return (<form className={styles.forms}>
        <Input
        label='Quantity'
        input={{
            id:'amount_'+ props.id,
            type:'number',
            min:"1",
            max:"5",
            step:"1",
            defaultValue:props.quantity
        }}/>
       
        <button onClick={extraAddHandler}>+ Add</button>
    </form>);
};

export default CartItemForm;