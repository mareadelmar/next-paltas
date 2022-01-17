import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	console.log("context -->", cartItems);

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartContext.Provider>
	);
};
