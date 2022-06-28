import { Fragment } from "react";
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderButton from "../UI/HeaderButton";
const Header=(props)=>{
    return (<Fragment>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderButton />
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt='A Table Full Of Delicious Food'/>
        </div>
    </Fragment>)
}

export default Header;