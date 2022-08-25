import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setNextLevel} from "../../redux/gameReducer";
import QuestionBlock from "../../components/questionBlock/QuestionBlock";
import Answers from "../../components/answers/Answers";
import BirdDescription from "../../components/birdDescription/BirdDescription";
import style from "../../pages/gamePage/GamePage.module.css";


type PropsType = {
    resetCurrentLevel: () => void
}

const GamePage: React.FC<PropsType> = ({resetCurrentLevel}) => {

    const dispatch = useAppDispatch();
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
            dispatch(setNextLevel({value: currentLevel + 1}));
            resetCurrentLevel();
        }
    };

    return (
        <>
            <QuestionBlock image={bird.image} name={bird.name}/>
            <div className={style.container}>
                <Answers birds={birdsData[currentLevel].birds} />
                <BirdDescription bird={descriptionBirdID && birdsData[currentLevel].birds[descriptionBirdID - 1]}/>
            </div>
            {
                isNotLastLevel &&
                <button className={`${isButtonDisabled ? style.disabledBtn : style.unDisabledBtn} ${style.btn}`}
                        onClick={handleClick}
                        disabled={isButtonDisabled}
                >
                    Next Level
                </button>
            }
        </>
    );
};

export default GamePage;