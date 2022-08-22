import React, {useState} from 'react';
import BirdCard from "./birdCard/BirdCard";
import style from './BirdDescription.module.css';


const BirdDescription = () => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const onChangeEditMode = () => setEditMode(!editMode);

    return (
        <div className={style.container} onClick={onChangeEditMode}>
            <div className={style.description} >
                {
                    editMode
                        ? <BirdCard/>
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