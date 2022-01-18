import React, { useContext } from 'react'
import styles from "../styles/cart.module.css";
import { CartContext } from 'context/CartContext';
import Loader from '@components/Loader/Loader';
import CartItem from '@components/CartItem/CartItem';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    
    const getTotal = () => {
        return cartItems.reduce((total:number, item) => total + item.price * item.quantity, 0);
    }

    if(!cartItems) return <Loader />
    return (
        <div className={styles.container}>
            <h1>Carrito</h1>
            {
                cartItems.length > 0 ?
                cartItems.map((item) => {
                    return <CartItem {...item}/>
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

export default Cart;
