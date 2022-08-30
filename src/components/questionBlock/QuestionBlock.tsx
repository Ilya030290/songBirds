import React from 'react';
import {useAppSelector} from "../../redux/store";
import AudioPlayer from "../common/audioPlayer/AudioPlayer";
import styles from './QuestionBlock.module.scss';

type QuestionPropsType = {
    image: string
    name: string
}

const QuestionBlock: React.FC<QuestionPropsType> = ({image, name}) => {

    const {currentLevel, birdsData, questionBirdID, isMatch} = useAppSelector(state => state.game);

    return (
        <div className={styles.questionContainer}>
            <img className={styles.img} src={image}  alt={'bird'}/>
            <div className={styles.listContainer}>
                <div className={styles.list}>
                    <h3>{name}</h3>
                    {
                        questionBirdID &&
                        <AudioPlayer audio={birdsData[currentLevel].birds[questionBirdID - 1].audio}
                                     isMatch={isMatch}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default QuestionBlock;