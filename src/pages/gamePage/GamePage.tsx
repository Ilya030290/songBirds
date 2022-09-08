import React from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from "../../redux/store";
import {
    selectBirdsData,
    selectCurrentLevel,
    selectDefaultBirdData,
    selectDescriptionBirdID,
    selectIsButtonDisabled,
    selectIsMatch,
    selectQuestionBirdID,
    setNextLevel,
} from '../../redux/gameReducer';
import QuestionBlock from "../../components/questionBlock/QuestionBlock";
import AnswersBlock from '../../components/answersBlock/AnswersBlock';
import BirdDescriptionBlock from "../../components/birdDescriptionBlock/BirdDescriptionBlock";
import styles from "./GamePage.module.scss";


type GamePagePropsType = {
    resetCurrentLevel: () => void
}

const GamePage: React.FC<GamePagePropsType> = ({resetCurrentLevel}) => {

    const dispatch = useAppDispatch();
    const defaultBirdData = useSelector(selectDefaultBirdData);
    const birdsData = useSelector(selectBirdsData);
    const currentLevel = useSelector(selectCurrentLevel);
    const descriptionBirdID = useSelector(selectDescriptionBirdID);
    const questionBirdID = useSelector(selectQuestionBirdID);
    const isButtonDisabled = useSelector(selectIsButtonDisabled);
    const isMatch = useSelector(selectIsMatch);

    const isNotLastLevel = currentLevel !== birdsData.length - 1;
    const currentLevelQuestionBird: any = questionBirdID && birdsData[currentLevel].birds[questionBirdID - 1];

    const currentBirdData = {
        image: currentLevelQuestionBird?.image,
        name: currentLevelQuestionBird?.name
    }
    const bird = isMatch ? currentBirdData : defaultBirdData;

    const handleClick = () => {
        if(currentLevel < birdsData.length - 1) {
            dispatch(setNextLevel());
            resetCurrentLevel();
        }
    };

    return (
        <>
            <QuestionBlock image={bird.image} name={bird.name}/>
            <div className={styles.container}>
                <AnswersBlock birds={birdsData[currentLevel].birds} />
                <BirdDescriptionBlock bird={descriptionBirdID && birdsData[currentLevel].birds[descriptionBirdID - 1]}/>
            </div>
            {
                isNotLastLevel &&
                <button className={`${isButtonDisabled ? styles.disabledButton : styles.unDisabledButton} ${styles.confirmationButton}`}
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