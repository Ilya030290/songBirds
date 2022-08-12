import React from 'react';
import Answers from "./Answers/Answers";
import BirdDescription from "./BirdDescription/BirdDescription";
import NextLevelButton from "./NextLevelButton/NextLevelButton";
import style from './AnswersAndDescription.module.css';


const AnswersAndDescription = () => {
    return (
        <>
            <div className={style.container}>
                <Answers />
                <BirdDescription />
            </div>
            <NextLevelButton />
        </>
    );
};

export default AnswersAndDescription;