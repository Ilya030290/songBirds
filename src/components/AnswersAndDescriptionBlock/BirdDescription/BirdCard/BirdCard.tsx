import React from 'react';
import AudioPlayer from "../../../QuestionBlock/AudioPlayer/AudioPlayer";
import style from './BirdCard.module.css';


const BirdCard = () => {

    const birds = [
        {
            id: 1,
            name: 'Ворон',
            species: 'Corvus corax',
            description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
            image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
        }
    ];

    return (
        <div className={style.container}>
            <div className={style.cardBody}>
                <img src={birds[0].image} alt={'bird'}/>
                <ul>
                    <li>
                        <h4>{birds[0].name}</h4>
                    </li>
                    <li>
                        <span>{birds[0].species}</span>
                    </li>
                    <li>
                        <AudioPlayer/>
                    </li>
                </ul>
            </div>
            <span>
                {birds[0].description}
            </span>
        </div>
    );
};

export default BirdCard;