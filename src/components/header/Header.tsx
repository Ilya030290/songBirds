import React from 'react';
import TopPanel from "./topPanel/TopPanel";
import BirdsList from "./birdsList/BirdsList";
import {BirdsSectionType} from "../../types/types";
import styles from './Header.module.scss';


type HeaderPropsType = {
    score: number
    currentLevel: number
    birdsData: BirdsSectionType[]
}

const Header: React.FC<HeaderPropsType> = ({score, currentLevel, birdsData}) => {
    return (
        <div className={styles.headerContainer}>
            <TopPanel score={score} />
            <BirdsList currentLevel={currentLevel} birdsData={birdsData}/>
        </div>
    );
};

export default Header;