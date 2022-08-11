import React from 'react';
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import style from './QuestionBlock.module.css';


const QuestionBlock = () => {
    return (
        <div className={style.questionContainer}>
            <img src={'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg'}  alt={'bird'}/>
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