import React from 'react';
import AudioPlayer from "../../../QuestionBlock/AudioPlayer/AudioPlayer";
import {useAppSelector} from "../../../../redux/store";
import style from './BirdCard.module.css';


const BirdCard = () => {

    const firstBirdInGroup = useAppSelector(state => state.birds[0][0]);

    return (
        <div className={style.container}>
            <div className={style.cardBody}>
                <img src={firstBirdInGroup.image} alt={'bird'}/>
                <ul>
                    <li>
                        <h4>{firstBirdInGroup.name}</h4>
                    </li>
                    <li>
                        <span>{firstBirdInGroup.species}</span>
                    </li>
                    <li>
                        <AudioPlayer/>
                    </li>
                </ul>
            </div>
            <span>
                {firstBirdInGroup.description}
            </span>

        </div>
    );
};

export default BirdCard;