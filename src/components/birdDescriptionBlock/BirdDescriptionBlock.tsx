import React from 'react';
import { useSelector } from 'react-redux';
import { selectBirdsData, selectCurrentLevel, selectDescriptionBirdID, selectIsMatch } from '../../redux/gameReducer';
import BirdCard from "./birdCard/BirdCard";
import {BirdType} from "../../types/types";
import styles from './BirdDescriptionBlock.module.scss';


type BirdDescriptionBlockPropsType = {
    bird: BirdType | null | 0
}

const BirdDescriptionBlock: React.FC<BirdDescriptionBlockPropsType> = ({bird}) => {

    const birdsData = useSelector(selectBirdsData);
    const currentLevel = useSelector(selectCurrentLevel);
    const descriptionBirdID = useSelector(selectDescriptionBirdID);
    const isMatch = useSelector(selectIsMatch);

    return (
        <div className={styles.container}>
            <div className={styles.description} >
                {
                    bird
                        ? <BirdCard
                            image={bird.image}
                            name={bird.name}
                            species={bird.species}
                            description={bird.description}
                            descriptionBirdID={descriptionBirdID}
                            currentLevel={currentLevel}
                            birdsData={birdsData}
                            isMatch={isMatch}
                        />
                        : <p>
                            <span>Послушайте плеер.</span>
                            <span>Выберите птицу из списка</span>
                        </p>
                }
            </div>
        </div>
    );
};

export default BirdDescriptionBlock;