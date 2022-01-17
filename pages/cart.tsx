import React, { useContext } from 'react'
import styles from "../styles/cart.module.css";
import { CartContext } from 'context/CartContext';
import Loader from '@components/Loader/Loader';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    
    const getTotal = () => {
        return cartItems.reduce((total:number, item:TProduct) => total + item.price, 0);
    }

    if(!cartItems) return <Loader />
    return (
        <div className={styles.container}>
            <h1>Carrito</h1>
            {
                cartItems.length > 0 ?
                cartItems.map((item:TProduct) => {
                    return <div className={styles.cartItem} key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <p className={styles.title}>{item.name}</p>
                            <ul>
                                <li><strong>Hardiness: </strong>{item.attributes.hardiness}</li>
                                <li><strong>Shape: </strong>{item.attributes.shape}</li>
                                <li><strong>Taste: </strong>{item.attributes.taste}</li>
                            </ul>
                            <p><strong>Price: </strong>{item.price}</p>
                        </div>
                    </div>
                })
                : <p className={styles.emptyMsn}>Aún no tienes elementos en el carrito</p>
            }
            {
                cartItems.length > 0 && <div className={styles.cartTotal}>
                    <p><strong>TOTAL:</strong></p>
                    <p>{getTotal()}</p>
                </div>
            }
        </div>
    )
}

export default Cart
