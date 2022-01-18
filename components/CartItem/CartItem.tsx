import React from 'react';
import styles from "./cartItem.module.css";

const CartItem = (item) => {
    return (
        <div className={styles.cartItem} key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
                <p id={styles.title}>{item.name}</p>
                <p><strong>Cantidad: </strong>{item.quantity}</p>
                <p><strong>Price: </strong>{item.price}</p>
            </div>
        </div>
    )
}

export default CartItem;
