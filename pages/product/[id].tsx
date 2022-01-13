import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

const ProductItem = ()  => {
	const {query: { id}} = useRouter();
	const [avo, setAvo] = useState<TProduct>()

	useEffect(() => {
		window.fetch(`/api/avo/${id}`)
			.then(res => res.json())
			.then(setAvo)
	}, [])

	return (
		<div>
			<h1>product item: {avo?.name}</h1>
			<img src={avo?.image} alt={avo?.name} />
		</div>
	);
};

export default ProductItem;
