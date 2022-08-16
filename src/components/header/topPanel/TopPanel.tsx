import React from 'react';
import {useAppSelector} from "../../../redux/store";
import style from './TopPanel.module.css';


const TopPanel = () => {

    const score = useAppSelector(state => state.score.score);

    return (
        <div className={style.topPanel}>
            <div className={style.logo}></div>
            <h5 className={style.score}>
                Score: <span>{score}</span>
            </h5>
        </div>
    );
};

export default TopPanel;