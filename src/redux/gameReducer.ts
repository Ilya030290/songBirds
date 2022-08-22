import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BirdsApi} from "../api/birdsApi";
import {setAppLoadingStatus} from "./appReducer";
import {BirdsSectionType, initialStateType} from "../types/types";
import image from '../assets/images/bird.06a46938.jpg';
import {indicators} from "../constants/constants";


export const initialState: initialStateType = {
    defaultBirdData: {
        image,
        name: ''
    },
    birdsData: [
        {
            id: 0,
            title: "",
            birds: [
                {
                    id: 0,
                    name: "",
                    species: "",
                    description: "",
                    image: "",
                    audio: ""
                }
            ]
        },
    ] as BirdsSectionType[],
    indicators,
    currentLevel: 0,
    score: 0,
    currentLevelScore: 5,
    isButtonDisabled: true,
    isMatch: false,
    isFinished: false,
    clickedOptionsIDs: [],
    questionBirdID: null,
    descriptionBirdID: null
}

const slice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setNextLevel: (state, action: PayloadAction<{value: number}>) => {
            state.currentLevel = action.payload.value;
        },
        setIsButtonDisabled: (state, action: PayloadAction<{isDisabled: boolean}>) => {
            state.isButtonDisabled = action.payload.isDisabled;
        },
        setScore: (state, action: PayloadAction<{score: number}>) => {
           state.score = action.payload.score;
        },
        setCurrentLevelScore: (state, action: PayloadAction<{currentLevelScore: number}>) => {
            state.currentLevelScore = action.payload.currentLevelScore;
        },
        setIsFinished: (state, action: PayloadAction<{isFinished: boolean}>) => {
            state.isFinished = action.payload.isFinished;
        },
        setIsMatch: (state, action: PayloadAction<{isMatch: boolean}>) => {
            state.isMatch =  action.payload.isMatch;
        },
        setQuestionBirdID: (state, action: PayloadAction<{value: number | null}>) => {
            state.questionBirdID = action.payload.value;
        },
        setDescriptionBirdID: (state, action: PayloadAction<{value: number | null}>) => {
            state.descriptionBirdID = action.payload.value;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchBirdsData.fulfilled, (state, action) => {
             state.birdsData = action.payload.birdsData;
        });
    }
});

//Reducer
export const gameReducer = slice.reducer;
//Actions
export const {
    setCurrentLevelScore,
    setScore,
    setNextLevel,
    setIsButtonDisabled,
    setDescriptionBirdID,
    setQuestionBirdID,
    setIsFinished,
    setIsMatch,
} = slice.actions;

//ThunkCreator
export const fetchBirdsData = createAsyncThunk('birds/fetchBirdsData', async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppLoadingStatus({status: 'loading'}));
    try {
        const res = await BirdsApi.fetchBirds();
        return {birdsData: res.data};
    } catch (err: any) {
        return thunkAPI.rejectWithValue(null);
    } finally {
        thunkAPI.dispatch(setAppLoadingStatus({status: 'success'}));
    }
});

