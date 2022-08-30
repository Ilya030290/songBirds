import React from 'react';
import logo from '../../../assets/images/logo.4f82cd73.svg';
import styles from './TopPanel.module.scss';

type PropsType = {
    score: number
}

const TopPanel: React.FC<PropsType> = ({score}) => {

    return (
        <div className={styles.topPanel}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h5 className={styles.score}>
                Score: <span>{score}</span>
            </h5>
        </div>
    );
};

export default TopPanel;