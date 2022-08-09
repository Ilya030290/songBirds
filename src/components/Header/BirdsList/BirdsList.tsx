import React from 'react';
import style from './BirdsList.module.css';

const BirdsList = () => {
    return (
        <ul className={style.list}>
            <li className={style.item}>
                <a href={''}>Разминка</a>
            </li>
            <li className={style.item}>
                <a href={''}>Воробьиные</a>
            </li>
            <li className={style.item}>
                <a href={''}>Лесные птицы</a>
            </li>
            <li className={style.item}>
                <a href={''}>Певчие птицы</a>
            </li>
            <li className={style.item}>
                <a href={''}>Хищные птицы</a>
            </li>
            <li className={style.item}>
                <a href={''}>Морские птицы</a>
            </li>
        </ul>
    );
};

export default BirdsList;