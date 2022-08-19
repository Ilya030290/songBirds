import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
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
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
});

export type AppRootActionsType = AnyAction;
export type DispatchActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>
export const useAppDispatch = () => useDispatch<DispatchActionType>();
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;