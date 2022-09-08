import React from 'react';
import {MAX_SCORE} from '../../constants/constants';
import image from '../../assets/images/3cf25d28-1a75-4d76-916d-a70e4d963a43.jpg';
import styles from './Congratulations.module.scss';


type CongratulationsPropsType = {
    score: number
    handleFinish: () => void
}

const Congratulations: React.FC<CongratulationsPropsType> = ({score, handleFinish}) => {

    return (
        <div className={styles.container}>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали <b>{score}</b> из <b>{MAX_SCORE}</b> возможных баллов</p>
            {
                score < MAX_SCORE
                    ? <hr/>
                    : <img src={image} alt={'winner'}/>
            }
            <button className={styles.confirmationButton} onClick={handleFinish}>Попробовать ещё раз!</button>
        </div>
    );
};

export default Congratulations;