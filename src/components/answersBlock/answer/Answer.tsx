import React from 'react';
import {IndicatorType} from "../../../types/types";
import styles from './Answer.module.scss';


type AnswerPropsType = {
    id: number
    name: string
    indicator: IndicatorType
    handleClick: (li: HTMLLIElement, id: number) => void
}

const Answer: React.FC<AnswerPropsType> = ({id, name, indicator, handleClick}) => {

    const onAnswerClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        handleClick(event.currentTarget, id);
    }

    return (
        <li className={styles.answer} onClick={onAnswerClickHandler}>
                <span className={`${styles.answersIndicator} ${styles[indicator.status]}`} />
                {name}
        </li>
    );
};

export default Answer;