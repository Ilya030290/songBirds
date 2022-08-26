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
    isMatch: boolean
}

const BirdCard: React.FC<BirdCardProps> = (
    {   image,
        name,
        species,
        description,
        descriptionBirdID,
        currentLevel,
        birdsData,
        isMatch
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
                        <span className={style.span}>{species}</span>
                    </li>
                    <li>
                        {
                            descriptionBirdID &&
                            <AudioPlayer audio={birdsData[currentLevel].birds[descriptionBirdID - 1].audio}
                                         isMatch={isMatch}
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