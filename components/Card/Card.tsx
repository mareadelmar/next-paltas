import React from 'react';
import styles from "./card.module.css";
import Link from "next/link"

const Card = ({name, id, image, price}:TProduct) => {
    return (
        <Link href={"/product/[id]"} as={`/product/${id}`}>
            <div className={styles.container}>
                <h3 className={styles.title}>{name}</h3>
                <img src={image} alt={name} className={styles.img} />
                <div className={styles.price}>
                    <p><strong>Price:</strong> {price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;