import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout";
import GamePage from "../../pages/gamePage/GamePage";
import Congratulations from "../congratsComponent/Congratulations";
import NotFound from "../../pages/notFoundPage/NotFound";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<GamePage/>}/>
                <Route path={'congratulations'} element={<Congratulations/>}/>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;