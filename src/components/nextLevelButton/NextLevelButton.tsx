import React, {useState} from 'react';
import style from './NextLevelButton.module.css';

type PropsType = {
    handleClick: () => void
    disabled: boolean
}

const NextLevelButton: React.FC<PropsType> = ({handleClick, disabled}) => {

    return (
        <button className={`${disabled ? style.disabledBtn : style.unDisabledBtn} ${style.btn}`}
                onClick={handleClick}
                disabled={disabled}
        >
            Next Level
        </button>
    );
};

export default NextLevelButton;