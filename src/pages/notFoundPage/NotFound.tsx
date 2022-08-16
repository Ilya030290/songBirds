import React from 'react';
import style from './NotFound.module.css';


const NotFound = () => {
    return (
        <div className={style.error}>
                <div>Error 404...</div>
                <div>Page not found!</div>
                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
};

export default NotFound;