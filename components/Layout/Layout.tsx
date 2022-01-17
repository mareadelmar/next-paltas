import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import styles from "./layout.module.css";
import { CartContextProvider } from 'context/CartContext';

const Layout: React.FC = ({children}) => {
    return (
        <CartContextProvider>
            <div className={styles.container}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </CartContextProvider>

)
}

export default Layout;
