import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {birdsReducer} from "./birdsReducer";


const rootReducer = combineReducers({
    birds: birdsReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;