import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStatusType } from '../types/types';
import { AppRootStateType } from './store';
import { LOADING } from '../constants/constants';


const initialState = {
    status: LOADING as AppStatusType,
    error: null as string | null,
    isInitialized: false
}

const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setAppLoadingStatus(state, action: PayloadAction<{status: AppStatusType}>) {
            state.status = action.payload.status;
        },
        setAppError(state, action: PayloadAction<{error: string | null}>) {
            state.error = action.payload.error;
        },
        setAppInitialized(state, action: PayloadAction<{isInitialized: boolean}>) {
            state.isInitialized = action.payload.isInitialized;
        }
    }
});

//Reducer
export const appReducer = slice.reducer;
//Actions
export const {setAppLoadingStatus, setAppError, setAppInitialized} = slice.actions;

//Selectors
const getAppStatus = (state: AppRootStateType): AppStatusType => state.app.status;
export const selectAppStatus = createSelector(getAppStatus, (status: AppStatusType) => status);

const getAppError = (state: AppRootStateType): string | null => state.app.error;
export const selectAppError = createSelector(getAppError, (error: string | null) => error);

const getIsInitialized = (state: AppRootStateType): boolean => state.app.isInitialized;
export const selectIsInitialized = createSelector(getIsInitialized, (isInitialized: boolean) => isInitialized);