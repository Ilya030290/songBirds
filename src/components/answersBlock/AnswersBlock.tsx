import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';
import {useAppDispatch} from "../../redux/store";
import {
    selectClickedOptionsIDs,
    selectCurrentLevel,
    selectFailAudio,
    selectIndicators, selectIsMatch, selectQuestionBirdID,
    selectSuccessAudio,
    setClickedOptionsIDs,
    setDescriptionBirdID,
    setIndicatorStatus,
    setIsButtonDisabled,
    setIsFinished,
    setIsMatch,
    increaseScore,
    decreaseCurrentLevelScore,
    resetCurrentTimeFailAudio,
    resetCurrentTimeSuccessAudio
} from '../../redux/gameReducer';
import {BirdType} from "../../types/types";
import Answer from "./answer/Answer";
import {indicatorStatus, MAX_CURRENT_LEVEL} from '../../constants/constants';
import styles from './AnswersBlock.module.scss';


type AnswersBlockPropsType = {
    birds: BirdType[]
}

const AnswersBlock: React.FC<AnswersBlockPropsType> = ({birds}) => {

    const dispatch = useAppDispatch();
    const indicators = useSelector(selectIndicators);
    const questionBirdID = useSelector(selectQuestionBirdID);
    const currentLevel = useSelector(selectCurrentLevel);
    const clickedOptionsIDs = useSelector(selectClickedOptionsIDs);
    const isMatch = useSelector(selectIsMatch);
    const failAudio = useSelector(selectFailAudio);
    const successAudio = useSelector(selectSuccessAudio);


    const setRightAnswer = () => {
        dispatch(setIsButtonDisabled(false));
        dispatch(setIsMatch(true));
        dispatch(increaseScore());
        dispatch(resetCurrentTimeSuccessAudio());
        successAudio.play();
    }

    const setWrongAnswer = () => {
        dispatch(decreaseCurrentLevelScore());
        dispatch(resetCurrentTimeFailAudio());
        failAudio.play();
    }

    const handleClick = (li: HTMLLIElement, id: number) => {

        const isRightAnswer = questionBirdID === id;
        const isGameFinished = isRightAnswer && currentLevel === MAX_CURRENT_LEVEL;
        const isOptionHasBeenClicked = clickedOptionsIDs.find((clickedOptionId: number) => clickedOptionId === id);

        dispatch(setDescriptionBirdID(id));
        dispatch(setClickedOptionsIDs(id));

        if (isGameFinished) {
            dispatch(setIsFinished(true));
        }
        if (isMatch) {
            return;
        }
        if (!isOptionHasBeenClicked) {
            if (isRightAnswer) {
                setRightAnswer();
                dispatch(setIndicatorStatus({id, status: indicatorStatus.success}))
            } else {
                setWrongAnswer();
                dispatch(setIndicatorStatus({id, status: indicatorStatus.fail}))
            }
        }
    }

    const answersList = useMemo(() => (

        <ul className={styles.answersList}>
            {
                birds.map((bird) => {
                    const indicator = indicators.find((el) => el.id === bird.id);

                    return (
                        indicator &&
                        <Answer
                            key={bird.id}
                            id={bird.id}
                            name={bird.name}
                            indicator={indicator}
                            handleClick={handleClick}
                        />
                    )
                })
            }
        </ul>
    ), [indicators, birds, questionBirdID])
    return (
        <div className={styles.answers}>
            {answersList}
        </div>
    );
};

export default AnswersBlock;