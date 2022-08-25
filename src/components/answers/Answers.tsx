import React, {useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    setClickedOptionsIDs,
    setCurrentLevelScore,
    setDescriptionBirdID, setIndicatorStatus,
    setIsButtonDisabled, setIsFinished,
    setIsMatch,
    setScore
} from "../../redux/gameReducer";
import {BirdType} from "../../types/types";
import Answer from "./answer/Answer";
import {statuses} from "../../constants/constants";
import style from './Answers.module.css';


type AnswersProps = {
    birds: BirdType[]
}

const Answers: React.FC<AnswersProps> = ({birds}) => {

    const dispatch = useAppDispatch();
    const {
        indicators,
        questionBirdID,
        currentLevelScore,
        score,
        currentLevel,
        clickedOptionsIDs,
        isMatch,
        failAudio,
        successAudio
    } = useAppSelector((state) => state.game);

    const setRightAnswer = () => {
        dispatch(setIsButtonDisabled({isDisabled: false}));
        dispatch(setIsMatch({isMatch: true}));
        dispatch(setScore({score: score + currentLevelScore}));
        successAudio.currentTime = 0;
        successAudio.play();
    }

    const setWrongAnswer = () => {
        dispatch(setCurrentLevelScore({currentLevelScore: currentLevelScore - 1}));
        failAudio.currentTime = 0;
        failAudio.play();
    }

    const handleClick = (li: HTMLLIElement, id: number) => {

        const isRightAnswer = questionBirdID === id;
        const isGameFinished = isRightAnswer && currentLevel === 5;
        const isOptionHasBeenClicked = clickedOptionsIDs.find((clickedOptionId: number) => clickedOptionId === id);

        dispatch(setDescriptionBirdID({value: id}));
        dispatch(setClickedOptionsIDs({clickedOptions: id}));

        if (isGameFinished) {
            dispatch(setIsFinished({isFinished: true}));
        }
        if (isMatch) {
            return;
        }
        if (!isOptionHasBeenClicked) {
            isRightAnswer ? setRightAnswer() : setWrongAnswer();
            dispatch(setIndicatorStatus({
                indicator: {id, status: isRightAnswer ? statuses.success : statuses.fail}
            }));
        }
    }

    const answersList = useMemo(() => (

        <ul className={style.answersList}>
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
        <div className={style.answers}>
            {answersList}
        </div>
    );
};

export default Answers;