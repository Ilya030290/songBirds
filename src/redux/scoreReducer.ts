import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    score: 0
}

const slice = createSlice({
    name: "score",
    initialState: initialState,
    reducers: {

    },
    extraReducers: {}
});

export const scoreReducer = slice.reducer;
