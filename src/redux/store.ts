import {combineReducers, configureStore, AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk from 'redux-thunk';
import {gameReducer} from "./gameReducer";
import {appReducer} from "./appReducer";


const rootReducer = combineReducers({
    app: appReducer,
    game: gameReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).prepend(thunk),
    devTools: process.env.NODE_ENV !== 'production'
});

export type AppRootActionsType = AnyAction;
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type DispatchActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>;
export const useAppDispatch = () => useDispatch<DispatchActionType>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;