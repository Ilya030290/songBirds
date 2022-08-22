import React from 'react';
import {useAppSelector} from "../../redux/store";
import {
    setCurrentLevelScore,
    setDescriptionBirdID,
    setIsButtonDisabled, setIsFinished,
    setIsMatch,
    setScore
} from "../../redux/gameReducer";
import {BirdType} from "../../types/types";
import Answer from "./answer/Answer";
import style from './Answers.module.css';


type AnswersProps = {
    birds: BirdType[]
}

const Answers: React.FC<AnswersProps> = ({birds}) => {
    const {
        indicators,
        questionBirdID,
        currentLevelScore,
        score,
        currentLevel,
        clickedOptionsIDs,
        isMatch,
    } = useAppSelector((state) => state.game);

    const setRightAnswer = () => {
        setIsButtonDisabled({isDisabled: false});
        setIsMatch({isMatch: true});
        setScore({score: score + currentLevelScore});

    }

    const setWrongAnswer = () => {
        setCurrentLevelScore({currentLevelScore: currentLevelScore - 1});

    }

    const handleClick = (button: HTMLButtonElement, id: number) => {
        const isRightAnswer = questionBirdID === id;
        const isGameFinished = isRightAnswer && currentLevel === 5;
        const isOptionHasBeenClicked = clickedOptionsIDs.find((clickedOptionId: number) => clickedOptionId === id);

        setDescriptionBirdID({value: id});


        if(isGameFinished) {
            setIsFinished({isFinished: true});
        }
        if(isMatch) {
            return;
        }
        if(!isOptionHasBeenClicked) {
            isRightAnswer ? setRightAnswer() : setWrongAnswer();

        }
    }

    return (
        <div className={style.answers}>
            <ul className={style.answersList}>
                {
                    birds.map(bird => {
                        const indicator = indicators.find((el) => el.id === bird.id);

                        return (
                            <Answer
                                key={bird.id}
                                id={bird.id}
                                // @ts-ignore
                                questionBirdId={questionBirdID}
                                name={bird.name}
                                // @ts-ignore
                                indicator={indicator}
                                handleClick={handleClick}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Answers;