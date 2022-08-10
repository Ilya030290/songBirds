import React from 'react';
import Header from "./components/Header/Header";
import QuestionBlock from "./components/QuestionBlock/QuestionBlock";
import style from './App.module.css';


const App = () => {
    return (
        <div className={style.appContainer}>
            <Header />
            <QuestionBlock />
        </div>
    );
}

export default App;
