import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import styles from "./productItem.module.css";

const ProductItem = ()  => {
	const {query: { id}} = useRouter();
	const [avo, setAvo] = useState<TProduct>();
	console.log(avo)

	useEffect(() => {
		window.fetch(`/api/avo/${id}`)
			.then(res => res.json())
			.then(setAvo)
	}, [id])

	const handleAddToCart = () => {
		console.log("agregar al carrito")
	}

	if(!avo) return <p>Cargando...</p>
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
