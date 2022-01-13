import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import styles from "./layout.module.css";

const Layout: React.FC = ({children}) => {
    return (
        <div className={styles.container}>
            <Navbar />
            {children}
            <Footer />
        </div>

)
}

export default Layout;
