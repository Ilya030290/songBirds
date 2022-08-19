import React from 'react';
import style from './Congratulations.module.css';


const Congratulations = () => {

    return (
        <div className={style.container}>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали <b>""</b> из <b>30</b> возможных баллов</p>
            <hr/>
            <button className={style.btn}>Попробовать ещё раз!</button>
        </div>
    );
};

export default Congratulations;