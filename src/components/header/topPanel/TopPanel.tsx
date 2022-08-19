import React from 'react';
import logo from '../../../assets/images/logo.4f82cd73.svg';
import style from './TopPanel.module.css';

type PropsType = {
    score: number
}

const TopPanel: React.FC<PropsType> = ({score}) => {

    return (
        <div className={style.topPanel}>
            <img className={style.logo} src={logo} alt="logo" />
            <h5 className={style.score}>
                Score: <span>{score}</span>
            </h5>
        </div>
    );
};

export default TopPanel;