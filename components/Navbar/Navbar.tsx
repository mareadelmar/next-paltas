import React, { useState} from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Icon } from '@iconify/react';

const Navbar = () => {
	const [cartCount, setCartCount] = useState<Number>(0);

	return (
		<div className={styles.container}>
			{/* <nav className={styles.box}>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/about'>
					<a>About</a>
				</Link>
			</nav> */}
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
				<p>Carrito({cartCount})</p>
			</div>
		</div>
	);
};

export default Navbar;
