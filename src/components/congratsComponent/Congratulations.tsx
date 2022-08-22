import React from 'react';
import style from './Congratulations.module.css';

type PropsType = {
    score: number
    handleFinish: () => void
}

const Congratulations: React.FC<PropsType> = ({score, handleFinish}) => {

    return (
        <div className={style.container}>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали <b>"{score}"</b> из <b>30</b> возможных баллов</p>
            <hr/>
            <button className={style.btn} onClick={handleFinish}>Попробовать ещё раз!</button>
        </div>
    );
};

export default Congratulations;