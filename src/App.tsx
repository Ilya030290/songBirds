import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {
    fetchBirdsData, resetClickedOptionsIDs, resetIndicatorStatus, setCurrentLevelScore,
    setDescriptionBirdID,
    setIsButtonDisabled, setIsFinished,
    setIsMatch, setNextLevel,
    setQuestionBirdID, setScore
} from "./redux/gameReducer";
import Header from "./components/header/Header";
import GamePage from "./pages/gamePage/GamePage";
import Loader from "./components/common/loader/Loader";
import Congratulations from "./components/congratsComponent/Congratulations";
import style from './App.module.css';


const App = () => {

    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.app.status);
    const {currentLevel, isFinished, score, birdsData} = useAppSelector(state => state.game);


    useEffect(() => {
        dispatch(fetchBirdsData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setQuestionBirdID(
            {value: Math.floor(Math.random() * birdsData[currentLevel].birds.length + 1)}
        ));
    }, [dispatch, currentLevel, birdsData]);


    const resetCurrentLevel = () => {
        dispatch(setDescriptionBirdID({value: null}));
        dispatch(setIsButtonDisabled({isDisabled: true}));
        dispatch(setIsMatch({isMatch: false}));
        dispatch(setCurrentLevelScore({currentLevelScore: 5}));
        dispatch(resetClickedOptionsIDs());
        dispatch(resetIndicatorStatus());
    };

    const handleFinish = () => {
        resetCurrentLevel();
        dispatch(setNextLevel({value: 0}));
        dispatch(setScore({score: 0}));
        dispatch(setIsFinished({isFinished: false}));
    }

    if(status === 'loading') return <Loader/>

    return (
        <div className={style.appContainer}>
            <Header score={score} currentLevel={currentLevel} birdsData={birdsData}/>
            {
                isFinished
                ? <Congratulations score={score} handleFinish={handleFinish}/>
                : <GamePage resetCurrentLevel={resetCurrentLevel}/>
            }
        </div>
    );
}

export default App;
