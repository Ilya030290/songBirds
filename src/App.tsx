import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './redux/store';
import {
    selectBirdsData,
    selectCurrentLevel,
    selectIsFinished,
    selectScore,
    fetchBirdsData,
    resetClickedOptionsIDs,
    resetIndicatorStatus,
    setCurrentLevelScore,
    setDescriptionBirdID,
    setIsButtonDisabled,
    setIsFinished,
    setIsMatch,
    setQuestionBirdID,
    setBaseLevel,
    resetScore
} from './redux/gameReducer';
import { selectAppStatus } from './redux/appReducer';
import Header from './components/header/Header';
import GamePage from './pages/gamePage/GamePage';
import Loader from './components/common/loader/Loader';
import Congratulations from './components/congratsComponent/Congratulations';
import {LOADING, MAX_CURRENT_SCORE} from './constants/constants';
import styles from './App.module.scss';


const App = () => {

    const dispatch = useAppDispatch();
    const status = useSelector(selectAppStatus);
    const currentLevel = useSelector(selectCurrentLevel);
    const isFinished = useSelector(selectIsFinished);
    const score = useSelector(selectScore);
    const birdsData = useSelector(selectBirdsData);

    useEffect(() => {
        dispatch(fetchBirdsData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setQuestionBirdID());
    }, [dispatch, currentLevel, birdsData]);

    const resetCurrentLevel = () => {
        dispatch(setDescriptionBirdID(null));
        dispatch(setIsButtonDisabled(true));
        dispatch(setIsMatch(false));
        dispatch(setCurrentLevelScore(MAX_CURRENT_SCORE));
        dispatch(resetClickedOptionsIDs());
        dispatch(resetIndicatorStatus());
    };

    const handleFinish = () => {
        resetCurrentLevel();
        dispatch(setBaseLevel());
        dispatch(resetScore());
        dispatch(setIsFinished(false));
    }

    if (status === LOADING) return <Loader/>

    return (
        <div className={styles.appContainer}>
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
