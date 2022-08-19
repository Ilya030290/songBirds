import axios from "axios";
import {BirdsSectionType} from "../types/types";


//Api
export const BirdsApi = {
    fetchBirds: () => {
        return axios.get<BirdsSectionType[]>('https://raw.githubusercontent.com/Ilya030290/social_network/master/birds/data.json')
    }
}