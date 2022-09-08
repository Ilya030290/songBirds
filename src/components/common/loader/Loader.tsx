import React from "react";
import {CircularProgress} from '@mui/material';
import styles from './Loader.module.scss';


const Loader = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.progress}>
                <CircularProgress size={50}/>
            </div>
        </div>
    );
};

export default Loader;