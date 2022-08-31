import React, {useEffect, useRef, useState} from 'react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import styles from "./AudioPlayer.module.scss";


type PropsType = {
    audio: string
    isMatch: boolean
}

const AudioPlayer: React.FC<PropsType> = ({audio, isMatch}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const audioPlayer = useRef<HTMLAudioElement>();
    const progressBar = useRef(null);
    const volumeBar = useRef(null);
    const animationRef = useRef(null);

    const handleLoadingMetaData = () => {
        if (audioPlayer?.current) {
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
            //@ts-ignore
            progressBar.current.max = seconds;
        }
    };

    const changePlayerCurrentTime = () => {
        //@ts-ignore
        progressBar?.current.style.setProperty('--seek-before-width',`${(progressBar.current.value / duration) * 100}%`);
        //@ts-ignore
        setCurrentTime(progressBar?.current.value);
    };

    const changePlayerVolume = () => {
        //@ts-ignore
        volumeBar?.current.style.setProperty(
            '--volume',
            //@ts-ignore
            `${volumeBar.current.value * 100}%`
        );
        //@ts-ignore
        setVolume(volumeBar?.current.value);
    };

    const whilePlaying = () => {
        //@ts-ignore
        progressBar.current.value = audioPlayer?.current?.currentTime;
        changePlayerCurrentTime();
        //@ts-ignore
        animationRef.current = requestAnimationFrame(whilePlaying);
    };

    const changeRange = () => {
        //@ts-ignore
        audioPlayer.current.currentTime = progressBar?.current?.value;
        changePlayerCurrentTime();
    };

    const changeVolume = () => {
        //@ts-ignore
        audioPlayer.current.volume = volumeBar?.current.value;
        changePlayerVolume();
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);

        if (!isPlaying) {
            //@ts-ignore
            audioPlayer.current.play();
            //@ts-ignore
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            //@ts-ignore
            audioPlayer.current.pause();
            //@ts-ignore
            cancelAnimationFrame(animationRef.current);
        }
    };

    const stopPlaying = () => {
        setIsPlaying(false);
        //@ts-ignore
        audioPlayer.current.pause();
        //@ts-ignore
        audioPlayer.current.currentTime = 0;
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
        //@ts-ignore
        audioPlayer.current.src = audio;
        stopPlaying();
        setCurrentTime(0);
        //@ts-ignore
        progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value}`);
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
                //@ts-ignore
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