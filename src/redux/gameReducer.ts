import {createAsyncThunk, createSlice, createSelector, PayloadAction} from "@reduxjs/toolkit";
import {BirdsApi} from "../api/birdsApi";
import {setAppLoadingStatus} from "./appReducer";
import {indicators, indicatorStatus, LOADING, SUCCESS, MAX_CURRENT_SCORE} from '../constants/constants';
import { AppRootStateType } from './store';
import { BirdsSectionType, defaultDataType, IndicatorType, initialStateType } from '../types/types';
import image from '../assets/images/bird.06a46938.jpg';


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
    currentLevelScore: MAX_CURRENT_SCORE,
    isButtonDisabled: true,
    isMatch: false,
    isFinished: false,
    clickedOptionsIDs: [],
    questionBirdID: 0,
    descriptionBirdID: null,
    successAudio: new Audio('https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3'),
    failAudio: new Audio('https://birds-quiz.netlify.app/static/media/error.165166d5.mp3')
}

const slice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setBaseLevel: (state) => {
            state.currentLevel = 0;
        },
        setNextLevel: (state) => {
            state.currentLevel += 1;
        },
        setIsButtonDisabled: (state, action: PayloadAction<boolean>) => {
            state.isButtonDisabled = action.payload;
        },
        resetScore: (state) => {
            state.score = 0;
        },
        increaseScore: (state) => {
            state.score += state.currentLevelScore;
        },
        setCurrentLevelScore: (state, action: PayloadAction<number>) => {
            state.currentLevelScore = action.payload;
        },
        decreaseCurrentLevelScore: (state) => {
            state.currentLevelScore -= 1;
        },
        setIsFinished: (state, action: PayloadAction<boolean>) => {
            state.isFinished = action.payload;
        },
        setIsMatch: (state, action: PayloadAction<boolean>) => {
            state.isMatch =  action.payload;
        },
        setQuestionBirdID: (state) => {
            state.questionBirdID = Math.floor(Math.random() * state.birdsData[state.currentLevel].birds.length + 1);
        },
        setDescriptionBirdID: (state, action: PayloadAction<number | null>) => {
            state.descriptionBirdID = action.payload;
        },
        setClickedOptionsIDs: (state, action: PayloadAction<number>) => {
            const newArr = [...state.clickedOptionsIDs];
            if(!state.clickedOptionsIDs.includes(action.payload)) {
                newArr.push(action.payload);
            }
            state.clickedOptionsIDs = newArr;
        },
        resetClickedOptionsIDs: (state) => {
            state.clickedOptionsIDs = [];
        },
        setIndicatorStatus: (state, action: PayloadAction<IndicatorType>) => {
            state.indicators = state.indicators.map((indicator: IndicatorType) => {
                if(indicator.id === action.payload.id) {
                    return {...indicator, status: action.payload.status}
                }
                return indicator;
            })
        },
        resetIndicatorStatus: (state) => {
            state.indicators = state.indicators.map((indicator: IndicatorType) => {
                return {...indicator, status: indicatorStatus.default}
            })
        },
        resetCurrentTimeFailAudio: (state) => {
            state.failAudio.currentTime = 0;
        },
        resetCurrentTimeSuccessAudio: (state) => {
            state.successAudio.currentTime = 0;
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
    setBaseLevel,
    setCurrentLevelScore,
    decreaseCurrentLevelScore,
    resetScore,
    increaseScore,
    setNextLevel,
    setIsButtonDisabled,
    setDescriptionBirdID,
    setQuestionBirdID,
    setIsFinished,
    setIsMatch,
    setClickedOptionsIDs,
    resetClickedOptionsIDs,
    setIndicatorStatus,
    resetIndicatorStatus,
    resetCurrentTimeFailAudio,
    resetCurrentTimeSuccessAudio
} = slice.actions;

//ThunkCreator
export const fetchBirdsData = createAsyncThunk('birds/fetchBirdsData', async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppLoadingStatus({status: LOADING}));
    try {
        const res = await BirdsApi.fetchBirds();
        return {birdsData: res.data};
    } catch (err: any) {
        return thunkAPI.rejectWithValue(null);
    } finally {
        thunkAPI.dispatch(setAppLoadingStatus({status: SUCCESS}));
    }
});

//Selectors
const getDefaultData = (state: AppRootStateType): defaultDataType => state.game.defaultBirdData;
export const selectDefaultBirdData = createSelector(getDefaultData, (defaultBirdData: defaultDataType) => defaultBirdData);

const getBirdsData = (state: AppRootStateType): BirdsSectionType[] => state.game.birdsData;
export const selectBirdsData = createSelector(getBirdsData, (birdsData: BirdsSectionType[]) => birdsData);

const getIndicators = (state: AppRootStateType): IndicatorType[] => state.game.indicators;
export const selectIndicators = createSelector(getIndicators, (indicators: IndicatorType[]) => indicators);

const getCurrentLevel = (state: AppRootStateType): number => state.game.currentLevel;
export const selectCurrentLevel = createSelector(getCurrentLevel, (currentLevel: number) => currentLevel);

const getScore = (state: AppRootStateType): number => state.game.score;
export const selectScore = createSelector(getScore, (score: number) => score);

const getIsButtonDisabled = (state: AppRootStateType): boolean => state.game.isButtonDisabled;
export const selectIsButtonDisabled = createSelector(getIsButtonDisabled, (isButtonDisabled: boolean) => isButtonDisabled);

const getIsMatch = (state: AppRootStateType): boolean => state.game.isMatch;
export const selectIsMatch = createSelector(getIsMatch, (isMatch: boolean) => isMatch);

const getIsFinished = (state: AppRootStateType): boolean => state.game.isFinished;
export const selectIsFinished = createSelector(getIsFinished, (isFinished: boolean) => isFinished);

const getClickedOptionsIDs = (state: AppRootStateType): number[] => state.game.clickedOptionsIDs;
export const selectClickedOptionsIDs = createSelector(getClickedOptionsIDs, (clickedOptionsIDs: number[]) => clickedOptionsIDs);

const getQuestionBirdID = (state: AppRootStateType): number => state.game.questionBirdID;
export const selectQuestionBirdID = createSelector(getQuestionBirdID, (questionBirdID: number) => questionBirdID);

const getDescriptionBirdID = (state: AppRootStateType): number | null => state.game.descriptionBirdID;
export const selectDescriptionBirdID = createSelector(getDescriptionBirdID, (descriptionBirdID: number | null) => descriptionBirdID);

const getFailAudio = (state: AppRootStateType): HTMLAudioElement => state.game.failAudio;
export const selectFailAudio = createSelector(getFailAudio, (failAudio: HTMLAudioElement) => failAudio);

const getSuccessAudio = (state: AppRootStateType): HTMLAudioElement => state.game.successAudio;
export const selectSuccessAudio = createSelector(getSuccessAudio, (successAudio: HTMLAudioElement) => successAudio);