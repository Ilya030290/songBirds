import React from 'react';
import {setNextLevel} from "../../redux/gameReducer";
import QuestionBlock from "../../components/questionBlock/QuestionBlock";
import Answers from "../../components/answers/Answers";
import BirdDescription from "../../components/birdDescription/BirdDescription";
import NextLevelButton from "../../components/nextLevelButton/NextLevelButton";
import {useAppSelector} from "../../redux/store";
import style from "../../pages/gamePage/GamePage.module.css";


type PropsType = {
    resetCurrentLevel: () => void
}

const GamePage: React.FC<PropsType> = ({resetCurrentLevel}) => {

    const {
        birdsData,
        currentLevel,
        defaultBirdData,
        descriptionBirdID,
        questionBirdID,
        isButtonDisabled,
        isMatch
    } = useAppSelector(state => state.game);

    const isNotLastLevel = currentLevel !== birdsData.length - 1;
    const currentLevelQuestionBird: any = questionBirdID && birdsData[currentLevel].birds[questionBirdID - 1];
    const currentBirdData = {
        image: currentLevelQuestionBird?.image,
        name: currentLevelQuestionBird?.name
    }
    const bird = isMatch ? currentBirdData : defaultBirdData;

    const handleClick = () => {
        if(currentLevel < birdsData.length - 1) {
            setNextLevel({value: currentLevel + 1});
            resetCurrentLevel();
        }
    }
    return (
        <>
            <QuestionBlock />
            <div className={style.container}>
                <Answers birds={birdsData[currentLevel].birds} />
                <BirdDescription />
            </div>
            {
                isNotLastLevel && <NextLevelButton handleClick={handleClick} disabled={isButtonDisabled} />
            }
        </>
    );
};

export default GamePage;