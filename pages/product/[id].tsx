import React, {useEffect, useState, useContext} from "react";
import { useRouter } from "next/router";
import styles from "./productItem.module.css";
import Loader from "@components/Loader/Loader";
import {CartContext} from "../../context/CartContext"


const ProductItem = ()  => {
	const {query: { id}} = useRouter();
	const [avo, setAvo] = useState<TProduct>();
	const { setCartItems } = useContext(CartContext);
	const [ quantity, setQuantity ] = useState(1)

	useEffect(() => {
		window.fetch(`/api/avo/${id}`)
			.then(res => res.json())
			.then(setAvo)
	}, [id])

	const handleAddToCart = () => {
		if(quantity === 0 ) return;
		const newItem = {
			...avo,
			quantity
		}
		setCartItems((prev) => [...prev, newItem]);
	}

	const handleQuantity = (type) => {
		if(type === "remove") {
			if(quantity === 0) return;
			setQuantity(prev => prev - 1)
			return;
		}
		setQuantity(prev => prev + 1);
	}

	if(!avo) return <Loader />;
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{avo?.name}</h2>
			<img src={avo?.image} alt={avo?.name} />
			<div className={styles.text}>
				<p><strong>Description: </strong> {avo?.attributes.description}</p>
				<ul>
                    <li><strong>Hardiness: </strong>{avo?.attributes.hardiness}</li>
                    <li><strong>Shape: </strong>{avo?.attributes.shape}</li>
                    <li><strong>Taste: </strong>{avo?.attributes.taste}</li>
                </ul>
				<div className={styles.quantityBox}>
					<span id={styles.quantityText}>Cantidad:</span>
					<div className={styles.quantityBox}>
						<span onClick={() => handleQuantity("remove")}> - </span>
						<span id={styles.quantity}>{quantity}</span>
						<span onClick={() => handleQuantity("add")}> + </span>
					</div>
				</div>
				<p><strong>Price: </strong>{avo?.price}</p>
			</div>
			<button onClick={handleAddToCart} className={styles.btn}>ADD TO CART</button>
		</div>
	);
};

export default ProductItem;
