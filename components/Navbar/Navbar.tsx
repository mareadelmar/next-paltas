import React, { useContext } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Icon } from '@iconify/react';
import { CartContext } from "context/CartContext";

const Navbar = () => {
	const { cartItems } = useContext(CartContext)
	
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<img src="/images/avocado.png" alt="logo" className={styles.img}/>
				<Link href="/">
					<a>
						<h1 className={styles.title}>avos</h1>
					</a>
				</Link>
			</div>
			<div className={styles.cartContainer}>
				<Icon icon="emojione-monotone:shopping-cart" className={styles.icon}/>
				<p>Carrito({cartItems.length})</p>
			</div>
		</div>
	);
};

export default Navbar;
