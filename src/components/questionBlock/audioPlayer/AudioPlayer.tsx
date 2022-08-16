import React, {useState} from 'react';
import style from "./AudioPlayer.module.css";


const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const togglePlayPause = () => setIsPlaying(!isPlaying);

    return (
        <div className={style.audioPlayer}>
            <audio
                src={'https://xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'}>
            </audio>
            <div className={style.controls}>
                <div className={style.playBackButton} onClick={togglePlayPause}>
                    {
                        isPlaying
                            ? <svg viewBox="0 0 47.607 47.607">
                                <path fill={"#00bc8c"}
                                      d={"M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"}></path>
                            </svg>
                            : <svg viewBox={'-200 0 1200 1000'}>
                                <path fill={'#00bc8c'}
                                      d={'M 96.51 11.97 c -31.23 8.05 -53.26 32.76 -63.42 71.27 c -3.45 12.84 -3.64 29.7 -3.64 416.71 s 0.19 403.87 3.64 416.71 c 16.09 60.74 61.69 86.03 120.9 67.25 c 9 -2.87 53.65 -25.1 116.49 -58.24 c 56.14 -29.51 221.29 -116.3 367.28 -192.93 c 145.99 -76.64 271.29 -143.31 278.38 -148.1 c 39.28 -25.68 59.59 -63.04 53.26 -97.52 c -4.79 -26.63 -24.33 -53.07 -52.88 -71.65 C 892 399.37 172.58 22.32 154.95 16.38 c -18.97 -6.33 -43.3 -8.24 -58.44 -4.41 Z'}></path>
                            </svg>
                    }
                </div>
                <div className={style.timeBar}>
                    <div className={style.timeBarLine}/>
                    <div className={style.timeBarCircle}/>
                    <div className={style.timeInfo}>
                        <div>00:00</div>
                        <div>02:39</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;