import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {fetchBirdsData} from "./redux/birdsReducer";
import Header from "./components/header/Header";
import GamePage from "./pages/gamePage/GamePage";
import Loader from "./components/common/loader/Loader";
import style from './App.module.css';


const App = () => {

    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.app.status);

    useEffect(() => {
        dispatch(fetchBirdsData());
    }, [dispatch])

    if(status === 'loading') return <Loader/>

    return (
        <div className={style.appContainer}>
            <Header/>
            <GamePage/>
        </div>
    );
}

export default App;
