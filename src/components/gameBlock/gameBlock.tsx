import React from 'react';
import Answers from "./answers/Answers";
import BirdDescription from "./birdDescription/BirdDescription";
import NextLevelButton from "./nextLevelButton/NextLevelButton";
import style from './gameBlock.module.css';


const GameBlock = () => {
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

export default GameBlock;