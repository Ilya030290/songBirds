import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../../pages/MainPage/MainPage";
import Congratulations from "../CongratsComponent/Congratulations";
import NotFound from "../../pages/NotFoundPage/NotFound";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={'congratulations'} element={<Congratulations/>}/>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;