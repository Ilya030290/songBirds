import React from 'react';
import TopPanel from "./TopPanel/TopPanel";
import BirdsList from "./BirdsList/BirdsList";
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