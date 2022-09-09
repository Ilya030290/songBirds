import React, {useEffect, useRef, useState} from 'react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import styles from "./AudioPlayer.module.scss";


type AudioPlayerPropsType = {
    audio: string
    isMatch: boolean
}

const AudioPlayer: React.FC<AudioPlayerPropsType> = ({audio, isMatch}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const audioPlayer = useRef<HTMLAudioElement>(null);
    const progressBar = useRef<HTMLInputElement>(null);
    const volumeBar = useRef<HTMLInputElement>(null);
    const animationRef = useRef<number | null>(null);

    const handleLoadingMetaData = () => {
        if (audioPlayer.current) {
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
            if (progressBar.current) {
                progressBar.current.max = seconds.toString();
            }
        }
    };

    const changePlayerCurrentTime = () => {
        if (progressBar.current) {
            progressBar.current.style.setProperty('--seek-before-width',`${(Number(progressBar.current.value) / duration) * 100}%`);
            setCurrentTime(Number(progressBar.current.value));
        }
    };

    const changePlayerVolume = () => {
        if (volumeBar.current) {
            volumeBar.current.style.setProperty('--volume', `${Number(volumeBar.current.value) * 100}%`);
            setVolume(Number(volumeBar.current.value));
        }
    };

    const whilePlaying = () => {
        if (progressBar.current && audioPlayer.current) {
            progressBar.current.value = audioPlayer.current.currentTime.toString();
            changePlayerCurrentTime();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }
    };

    const changeRange = () => {
        if (audioPlayer.current && progressBar.current) {
            audioPlayer.current.currentTime = Number(progressBar.current.value);
            changePlayerCurrentTime();
        }
    };

    const changeVolume = () => {
        if (audioPlayer.current && volumeBar.current) {
            audioPlayer.current.volume = Number(volumeBar.current.value);
            changePlayerVolume();
        }
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);

        if (!isPlaying) {
            audioPlayer.current && audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current && audioPlayer.current.pause();
            animationRef.current && cancelAnimationFrame(animationRef.current);
        }
    };

    const stopPlaying = () => {
        setIsPlaying(false);
        if (audioPlayer.current) {
            audioPlayer.current.pause();
            audioPlayer.current.currentTime = 0;
        }
    };

    const formatTime = (time: number) => {
        const isDoubleValuedNumber = time >= 10;

        return isDoubleValuedNumber ? `${time}` : `0${time}`;
    };

    const calculateTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = formatTime(minutes);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = formatTime(seconds);

        return `${returnedMinutes} : ${returnedSeconds}`;
    };

    useEffect(() => {
        if (audioPlayer.current) {
            audioPlayer.current.src = audio;
            stopPlaying();
            setCurrentTime(0);
            if (progressBar.current) {
                progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value}`);
            }
        }
    }, [audio]);

    useEffect(() => {
        changePlayerVolume();
    }, []);

    useEffect(() => {
        if (isMatch) {
            stopPlaying();
        }
    }, [isMatch]);

    return (
        <div className={styles.audioPlayer}>
            <audio
                onLoadedMetadata={handleLoadingMetaData}
                onEnded={stopPlaying}
                ref={audioPlayer}
                preload="metadata"
            >
                <source src={audio} type="audio/mp3" />
                <track kind="captions" />
            </audio>
            <button className={styles.toggle} onClick={togglePlayPause}>
                {
                    isPlaying
                        ? <BsPauseCircle className={styles.toggleButton} />
                        : <BsPlayCircle className={styles.toggleButton} />
                }
            </button>
            <div className={styles.progress}>
                <input
                    className={styles.progressBar}
                    onChange={changeRange}
                    value={currentTime}
                    ref={progressBar}
                    type="range"
                />
                <div className={styles.status}>
                    <span>{calculateTime(currentTime)}</span>
                    <span>{calculateTime(duration)}</span>
                </div>
                <input
                    className={styles.volumeBar}
                    onChange={changeVolume}
                    value={volume}
                    ref={volumeBar}
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                />
            </div>
        </div>
    );
};

export default AudioPlayer;