import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BirdsApi} from "../api/birdsApi";
import {setAppLoadingStatus} from "./appReducer";

//Types
export type BirdType = {
    id: number
    name: string
    species: string
    description: string
    image: string
    audio: string
}

export type BirdsSection = {
    id: number,
    title: string,
    birds: BirdType[]
};

const slice = createSlice({
    name: "birds",
    initialState: [
        {
            "id": 3,
            "title": "Лесные птицы",
            "birds": [
                {
                    "id": 1,
                    "name": "Зяблик",
                    "species": "Fringilla coelebs",
                    "description": "В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.",
                    "image": "https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",
                    "audio": "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"
                }
            ]
        }
    ] as BirdsSection[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBirdsData.fulfilled, (state, action) => {
            return action.payload.birdsData;
        });
    }
});

//Reducer
export const birdsReducer = slice.reducer;

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

