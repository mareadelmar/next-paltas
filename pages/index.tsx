import React, {useState, useEffect} from "react";

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
			<h1>hola mundo</h1>
			{products.map(item => (
				<div key={item.id}>{item.name}</div>
			))}
		</div>
	);
};

export default Home;
