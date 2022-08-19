import React from 'react';
import TopPanel from "./topPanel/TopPanel";
import BirdsList from "./birdsList/BirdsList";
import style from './Header.module.css';

type HeaderPropsType = {
    score: number
    currentLevel: number
}

const Header: React.FC<HeaderPropsType> = ({score, currentLevel}) => {
    return (
        <div className={style.headerContainer}>
            <TopPanel score={score} />
            <BirdsList />
        </div>
    );
};

export default Header;