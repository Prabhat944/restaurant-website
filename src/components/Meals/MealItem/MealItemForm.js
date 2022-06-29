import {useContext} from 'react';
import CartContext from '../../../Store/create-context';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm=(props)=>{
    const ctx = useContext(CartContext);

    const AddToCartHandler = event=>{
        event.preventDefault();
        const quantity = document.getElementById('amount_'+ props.id).value;
        ctx.addItem({...props.item,quantity:quantity});

    };
    return (<form className={styles.form}>
        <Input 
        label='Amount'
        input={{
            id:'amount_'+ props.id,
            type:'number',
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
        }}/>
        <button onClick={AddToCartHandler}>+ Add</button>
    </form>);
};

export default MealItemForm;