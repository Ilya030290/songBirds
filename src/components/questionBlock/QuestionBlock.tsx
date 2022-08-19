import React from 'react';
import AudioPlayer from "./audioPlayer/AudioPlayer";
import image from '../../assets/images/bird.06a46938.jpg';
import style from './QuestionBlock.module.css';


const QuestionBlock = () => {
    return (
        <div className={style.questionContainer}>
            <img src={image}  alt={'bird'}/>
            <div className={style.listContainer}>
                <div className={style.list}>
                    <h3>******</h3>
                    <AudioPlayer/>
                </div>
            </div>
        </div>
    );
};

export default QuestionBlock;