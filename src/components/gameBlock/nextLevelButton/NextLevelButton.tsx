import React, {useState} from 'react';
import style from './NextLevelButton.module.css';


const NextLevelButton = () => {

    const [disabledValue, setDisabledValue] = useState<boolean>(true);

    return (
        <button className={`${disabledValue ? style.disabledBtn : style.unDisabledBtn} ${style.btn}`} disabled={disabledValue}>
            Next Level
        </button>
    );
};

export default NextLevelButton;