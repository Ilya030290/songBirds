import React from 'react';
import ReactAudioPlayer from "react-audio-player";
import style from "./AudioPlayer.module.css";


type PropsType = {
    audio: string
}

const AudioPlayer: React.FC<PropsType> = ({audio}) => {

    return (
        <div className={style.audioPlayer}>
            <ReactAudioPlayer
                style={{width: '100%'}}
                src={audio}
                controls={true}
            />
        </div>
    );
};

export default AudioPlayer;