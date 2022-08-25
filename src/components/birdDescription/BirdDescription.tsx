import React from 'react';
import BirdCard from "./birdCard/BirdCard";
import {useAppSelector} from "../../redux/store";
import {BirdType} from "../../types/types";
import style from './BirdDescription.module.css';


type PropsType = {
    bird: BirdType | null | 0
}

const BirdDescription: React.FC<PropsType> = ({bird}) => {

    const {currentLevel, descriptionBirdID, birdsData} = useAppSelector(state => state.game);

    return (
        <div className={style.container}>
            <div className={style.description} >
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