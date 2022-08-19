import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {
    fetchBirdsData, setCurrentLevelScore,
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
    const {currentLevel, isFinished, score, questionBirdID, birdsData} = useAppSelector(state => state.game);


    useEffect(() => {
        dispatch(fetchBirdsData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setQuestionBirdID(
            {value: Math.floor(Math.random() * birdsData[currentLevel].birds.length + 1)}
        ));
    }, [dispatch, currentLevel, questionBirdID, birdsData])

    const resetCurrentLevel = () => {
        setDescriptionBirdID({value: null});
        setIsButtonDisabled({isDisabled: true});
        setIsMatch({isMatch: false});
        setCurrentLevelScore({currentLevelScore: 5});

    };

    const handleFinish = () => {
        resetCurrentLevel();
        setNextLevel({value: 0});
        setScore({score: 0});
        setIsFinished({isFinished: false});
    }

    if(status === 'loading') return <Loader/>

    return (
        <div className={style.appContainer}>
            <Header score={score} currentLevel={currentLevel}/>
            {
                isFinished
                ? <Congratulations/>
                : <GamePage/>
            }
        </div>
    );
}

export default App;
