import React from 'react';
import {IndicatorType} from "../../../types/types";
import style from  './Answer.module.css';


type AnswerProps = {
    id: number
    questionBirdId: number
    name: string
    indicator: IndicatorType
    handleClick: (button: HTMLButtonElement, id: number) => void
}

const Answer: React.FC<AnswerProps> = ({id, questionBirdId, name, indicator, handleClick}) => {

    const isRightAnswer = id === questionBirdId;

    return (
        <li className={style.answer}>
            <button className={style.btn} onClick={(event) => handleClick(event.currentTarget, id)}>
                <div className={`${indicator && indicator.status} ${style.indicator}`} />
                {name}
            </button>
        </li>
    );
};

export default Answer;