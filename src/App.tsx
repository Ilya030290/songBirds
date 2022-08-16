import React from 'react';
import AppRouter from "./components/appRouter/AppRouter";
import style from './App.module.css';


const App = () => {
    return (
        <div className={style.appContainer}>
            <AppRouter/>
        </div>
    );
}

export default App;
