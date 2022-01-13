import React from 'react';
import styles from "./card.module.css";

const Card = (product) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{product.name}</h3>
            <img src={product.image} alt={product.title} className={styles.img} />
        </div>
    )
}

export default Card;
