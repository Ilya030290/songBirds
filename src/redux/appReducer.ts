import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type LoadingStatusType = 'loading' | 'success' | 'failed';

const initialState = {
    status: 'loading' as LoadingStatusType,
    error: null as string | null,
    isInitialized: false
}

const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setAppLoadingStatus(state, action: PayloadAction<{status: LoadingStatusType}>) {
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

export const appReducer = slice.reducer;
export const {setAppLoadingStatus, setAppError, setAppInitialized} = slice.actions;