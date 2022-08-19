import React from 'react';
import {useAppSelector} from "../../../redux/store";
import style from './Answers.module.css';



const Answers = () => {

    const birds = useAppSelector(state => state.game.birdsData[0].birds);

    return (
        <div className={style.answers}>
            <ul className={style.answersList}>
                {
                    birds.map(bird => <li key={bird.id}><span/>{bird.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Answers;