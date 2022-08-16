import axios from "axios";
import {BirdsSection} from "../redux/birdsReducer";


//Api
export const BirdsApi = {
    fetchBirds: () => {
        return axios.get<BirdsSection[]>('https://raw.githubusercontent.com/Ilya030290/social_network/master/birds/data.json')
    }
}