import React from 'react';
import AudioPlayer from "../../common/audioPlayer/AudioPlayer";
import {BirdsSectionType} from "../../../types/types";
import styles from './BirdCard.module.scss';


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
        <div className={styles.container}>
            <div className={styles.cardBody}>
                <img src={image} alt={'bird'}/>
                <ul>
                    <li>
                        <h4>{name}</h4>
                    </li>
                    <li>
                        <span className={styles.span}>{species}</span>
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
            <span className={styles.description}>
                {description}
            </span>
        </div>
    );
};

export default BirdCard;