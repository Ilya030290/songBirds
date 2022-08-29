import React from 'react';
import image from '../../assets/images/3cf25d28-1a75-4d76-916d-a70e4d963a43.jpg';
import style from './Congratulations.module.css';

type PropsType = {
    score: number
    handleFinish: () => void
}

const Congratulations: React.FC<PropsType> = ({score, handleFinish}) => {

    return (
        <div className={style.container}>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали <b>{score}</b> из <b>30</b> возможных баллов</p>
            {
                score < 30
                    ? <hr/>
                    : <img src={image} alt={'winner'}/>
            }
            <button className={style.btn} onClick={handleFinish}>Попробовать ещё раз!</button>
        </div>
    );
};

export default Congratulations;