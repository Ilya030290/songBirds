import React from 'react';
import AudioPlayer from "../../common/audioPlayer/AudioPlayer";
import {BirdsSectionType} from "../../../types/types";
import style from './BirdCard.module.css';


type BirdCardProps = {
    image: string
    name: string
    species: string
    description: string
    descriptionBirdID: number | null
    currentLevel: number
    birdsData: BirdsSectionType[]
}

const BirdCard: React.FC<BirdCardProps> = (
    {   image,
        name,
        species,
        description,
        descriptionBirdID,
        currentLevel,
        birdsData
    }
    ) => {

    return (
        <div className={style.container}>
            <div className={style.cardBody}>
                <img src={image} alt={'bird'}/>
                <ul>
                    <li>
                        <h4>{name}</h4>
                    </li>
                    <li>
                        <span>{species}</span>
                    </li>
                    <li>
                        {
                            descriptionBirdID &&
                            <AudioPlayer audio={birdsData[currentLevel].birds[descriptionBirdID - 1].audio}
                            />
                        }
                    </li>
                </ul>
            </div>
            <span>
                {description}
            </span>

        </div>
    );
};

export default BirdCard;