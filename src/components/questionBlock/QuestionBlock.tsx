import React from 'react';
import {useAppSelector} from "../../redux/store";
import AudioPlayer from "./audioPlayer/AudioPlayer";
import style from './QuestionBlock.module.css';

type QuestionPropsType = {
    image: string
    name: string
}

const QuestionBlock: React.FC<QuestionPropsType> = ({image, name}) => {

    const {currentLevel, birdsData, questionBirdID} = useAppSelector(state => state.game);

    return (
        <div className={style.questionContainer}>
            <img src={image}  alt={'bird'}/>
            <div className={style.listContainer}>
                <div className={style.list}>
                    <h3>{name}</h3>
                    {
                        questionBirdID &&
                        <AudioPlayer audio={birdsData[currentLevel].birds[questionBirdID - 1].audio}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default QuestionBlock;