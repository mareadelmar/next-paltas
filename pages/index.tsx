import React, {useState, useEffect} from "react";
import styles from "../styles/home.module.css";
import Card from "@components/Card/Card";

const Home = () => {
	const [products, setProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		window.fetch("/api/avo")
			.then(res => res.json())
			.then(({data}) => {
				setProducts(data);
			})
	}, [])

	return (
		<div className={styles.container}>
			{products.map(item => (
				<Card key={item.id} {...item}/>
			))}
		</div>
	);
};

export default Home;
