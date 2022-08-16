import React from 'react';
import style from './TopPanel.module.css';

const TopPanel = () => {
    return (
        <div className={style.topPanel}>
            <div className={style.logo}></div>
            <h5 className={style.score}>
                Score: <span>0</span>
            </h5>
        </div>
    );
};

export default TopPanel;