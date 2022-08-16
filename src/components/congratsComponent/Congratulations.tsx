import React from 'react';
import {useNavigate} from "react-router-dom";
import style from './Congratulations.module.css';


const Congratulations = () => {

    const navigate = useNavigate();
    const navigateToMainPage = () => navigate('/');

    return (
        <div className={style.container}>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали <b>""</b> из <b>30</b> возможных баллов</p>
            <hr/>
            <button className={style.btn} onClick={navigateToMainPage}>Попробовать ещё раз!</button>
        </div>
    );
};

export default Congratulations;