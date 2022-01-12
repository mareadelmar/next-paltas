import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar/Navbar";

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
		<div>
			<Navbar />
			<h1>hola mundo</h1>
			{products.map(item => (
				<div key={item.id}>{item.name}</div>
			))}
		</div>
	);
};

export default Home;
