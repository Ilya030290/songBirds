import React from 'react';
import Header from "./components/Header/Header";
import QuestionBlock from "./components/QuestionBlock/QuestionBlock";
import AnswersAndDescription from "./components/AnswersAndDescriptionBlock/AnswersAndDescription";
import style from './App.module.css';


const App = () => {
    return (
        <div className={style.appContainer}>
            <Header />
            <QuestionBlock />
            <AnswersAndDescription />
        </div>
    );
}

export default App;
