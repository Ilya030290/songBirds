import React, {useMemo} from 'react';
import {BirdsSectionType} from "../../../types/types";
import styles from './BirdsList.module.scss';

type BirdsListProps = {
    currentLevel: number
    birdsData: BirdsSectionType[]
}

const BirdsList: React.FC<BirdsListProps> = ({currentLevel, birdsData}) => {

    const birdsSectionList = useMemo(() => (
        <ul className={styles.list}>
            {
                birdsData.map((section) => {

                    const isActive = currentLevel === (section.id - 1);

                    return (
                        <li key={section.id} className={`${styles.item} ${isActive && styles.activeItem}`}>
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