import React from 'react';
import styles from "../styles/Header.module.css";

function Header(props) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>Today</div>
            <div className={styles.right}>
                <span>POPULAR</span>
                <span>NEWEST</span>
            </div>
        </div>
    );
}

export default Header;