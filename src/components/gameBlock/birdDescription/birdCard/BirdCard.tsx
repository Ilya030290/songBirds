import React from 'react';
import AudioPlayer from "../../../questionBlock/audioPlayer/AudioPlayer";
import {useAppSelector} from "../../../../redux/store";
import style from './BirdCard.module.css';


const BirdCard = () => {

    const firstBirdInSection = useAppSelector(state => state.game.birdsData[0].birds[0]);

    return (
        <div className={style.container}>
            <div className={style.cardBody}>
                <img src={firstBirdInSection.image} alt={'bird'}/>
                <ul>
                    <li>
                        <h4>{firstBirdInSection.name}</h4>
                    </li>
                    <li>
                        <span>{firstBirdInSection.species}</span>
                    </li>
                    <li>
                        <AudioPlayer/>
                    </li>
                </ul>
            </div>
            <span>
                {firstBirdInSection.description}
            </span>

        </div>
    );
};

export default BirdCard;