import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BirdsApi} from "../api/birdsApi";
import {setAppLoadingStatus} from "./appReducer";
import {BirdsSectionType, IndicatorType, initialStateType} from "../types/types";
import image from '../assets/images/bird.06a46938.jpg';
import {indicators} from "../constants/constants";


export const initialState: initialStateType = {
    defaultBirdData: {
        image,
        name: '******'
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
    descriptionBirdID: null,
    successAudio: new Audio('https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3'),
    failAudio: new Audio('https://birds-quiz.netlify.app/static/media/error.165166d5.mp3')
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
        },
        setClickedOptionsIDs: (state, action: PayloadAction<{clickedOptions: number}>) => {
            const newArr = [...state.clickedOptionsIDs];
            if(!state.clickedOptionsIDs.includes(action.payload.clickedOptions)) {
                newArr.push(action.payload.clickedOptions);
            }
            state.clickedOptionsIDs = newArr;
        },
        resetClickedOptionsIDs: (state) => {
            state.clickedOptionsIDs = [];
        },
        setIndicatorStatus: (state, action: PayloadAction<{indicator: IndicatorType}>) => {
            state.indicators = state.indicators.map((indicator: IndicatorType) => {
                if(indicator.id === action.payload.indicator.id) {
                    return {...indicator, status: action.payload.indicator.status}
                }
                return indicator;
            })
        },
        resetIndicatorStatus: (state) => {
            state.indicators = state.indicators.map((indicator: IndicatorType) => {
                return {...indicator, status: 'default'}
            })
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
    setClickedOptionsIDs,
    resetClickedOptionsIDs,
    setIndicatorStatus,
    resetIndicatorStatus
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

