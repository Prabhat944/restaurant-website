import React from "react";
import styles from './HeaderButton.module.css'

const HeaderButton=(props)=>{
    return (<button className={styles.button} onClick={props.onClick}>
       <span></span>
       <span> Your Cart</span>
       <span className={styles.badge}>0</span>
       
    </button>)
}

export default HeaderButton;