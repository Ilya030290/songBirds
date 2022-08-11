import React from 'react';
import Answers from "./Answers/Answers";
import BirdDescription from "./BirdDescription/BirdDescription";
import style from './AnswersAndDescription.module.css';


const AnswersAndDescription = () => {
    return (
        <div className={style.container}>
            <Answers/>
            <BirdDescription/>
        </div>
    );
};

export default AnswersAndDescription;