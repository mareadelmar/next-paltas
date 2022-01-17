import React, {useEffect, useState, useContext} from "react";
import { useRouter } from "next/router";
import styles from "./productItem.module.css";
import Loader from "@components/Loader/Loader";
import {CartContext} from "../../context/CartContext"


const ProductItem = ()  => {
	const {query: { id}} = useRouter();
	const [avo, setAvo] = useState<TProduct>();
	const { setCartItems } = useContext(CartContext)

	useEffect(() => {
		window.fetch(`/api/avo/${id}`)
			.then(res => res.json())
			.then(setAvo)
	}, [id])

	const handleAddToCart = () => {
		setCartItems((prev) => [...prev, avo]);
	}

	if(!avo) return <Loader />;
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{avo?.name}</h2>
			<img src={avo?.image} alt={avo?.name} />
			<div className={styles.text}>
				<p><strong>Description: </strong> {avo?.attributes.description}</p>
				<p><strong>Price: </strong>{avo?.price}</p>
			</div>
			<button onClick={handleAddToCart} className={styles.btn}>ADD TO CART</button>
		</div>
	);
};

export default ProductItem;
