import React from 'react';
import TopPanel from "./topPanel/TopPanel";
import BirdsList from "./birdsList/BirdsList";
import style from './Header.module.css';


const Header = () => {
    return (
        <div className={style.headerContainer}>
            <TopPanel />
            <BirdsList />
        </div>
    );
};

export default Header;