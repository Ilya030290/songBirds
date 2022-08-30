import React from 'react';
import BirdCard from "./birdCard/BirdCard";
import {useAppSelector} from "../../redux/store";
import {BirdType} from "../../types/types";
import styles from './BirdDescription.module.scss';


type PropsType = {
    bird: BirdType | null | 0
}

const BirdDescription: React.FC<PropsType> = ({bird}) => {

    const {currentLevel, descriptionBirdID, birdsData, isMatch} = useAppSelector(state => state.game);

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

export default BirdDescription;