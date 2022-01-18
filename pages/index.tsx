import styles from "../styles/home.module.css";
import Card from "@components/Card/Card";
import fetch from "isomorphic-unfetch";

export const getServerSideProps = async () => {
	const res = await fetch("https://paltitastore.vercel.app/api/avo");
	const { data: products }:TAPIAvoResponse = await res.json();

	return {
		props: {
			// props que espera el componente
			products
		}
	}
}

const Home = ({products}:{products:TProduct[]}) => {
	return (
		<div className={styles.container}>
			{products.map(item => (
				<Card key={item.id} {...item}/>
			))}
		</div>
	);
};

export default Home;
