import React from 'react';
import {useAppSelector} from "../../../redux/store";
import style from './Answers.module.css';


const Answers = () => {

    const birdsOfFirstGroup = useAppSelector(state => state.birds[0]);

    return (
        <div className={style.answers}>
            <ul className={style.answersList}>
                {
                    birdsOfFirstGroup.map(bird => <li key={bird.id}><span/>{bird.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Answers;