import React from 'react'
import styles from "./loader.module.css";
import { Icon } from '@iconify/react';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Icon icon="openmoji:avocado" className={styles.loaderIcon}/>
        </div>
    )
}

export default Loader
