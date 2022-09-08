import React from 'react';
import { useSelector } from 'react-redux';
import { selectBirdsData, selectCurrentLevel, selectIsMatch, selectQuestionBirdID } from '../../redux/gameReducer';
import AudioPlayer from "../common/audioPlayer/AudioPlayer";
import styles from './QuestionBlock.module.scss';


type QuestionBlockPropsType = {
    image: string
    name: string
}

const QuestionBlock: React.FC<QuestionBlockPropsType> = ({image, name}) => {

    const birdsData = useSelector(selectBirdsData);
    const currentLevel = useSelector(selectCurrentLevel);
    const questionBirdID = useSelector(selectQuestionBirdID);
    const isMatch = useSelector(selectIsMatch);

    return (
        <div className={styles.questionContainer}>
            <img className={styles.image} src={image}  alt={'bird'}/>
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