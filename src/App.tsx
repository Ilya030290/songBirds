import React from 'react';
import Header from "./components/Header/Header";
import style from './App.module.css';


const App = () => {
    return (
        <div className={style.appContainer}>
            <Header />
        </div>
    );
}

export default App;
