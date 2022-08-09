import React from 'react';
import TopPanel from "./TopPanel/TopPanel";
import style from './Header.module.css';
import BirdsList from "./BirdsList/BirdsList";

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <TopPanel />
            <BirdsList />
        </div>
    );
};

export default Header;