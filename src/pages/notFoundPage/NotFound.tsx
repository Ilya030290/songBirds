import React from 'react';
import styles from './NotFound.module.scss';


const NotFound = () => {
    return (
        <div className={styles.error}>
                <div>Error 404...</div>
                <div>Page not found!</div>
                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
};

export default NotFound;