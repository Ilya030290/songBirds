import React, {useMemo} from 'react';
import {BirdsSectionType} from "../../../types/types";
import style from './BirdsList.module.css';

type BirdsListProps = {
    currentLevel: number
    birdsData: BirdsSectionType[]
}

const BirdsList: React.FC<BirdsListProps> = ({currentLevel, birdsData}) => {

    const birdsSectionList = useMemo(() => (
        <ul className={style.list}>
            {
                birdsData.map((section) => {

                    const isActive = currentLevel === (section.id - 1);

                    return (
                        <li key={section.id} className={`${style.item} ${isActive && style.activeItem}`}>
                            {section.title}
                        </li>
                    );
                })
            }
        </ul>
    ), [currentLevel, birdsData]);

    return (
        <>
            {birdsSectionList}
        </>
    );
};

export default BirdsList;