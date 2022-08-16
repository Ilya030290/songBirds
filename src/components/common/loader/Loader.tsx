import React from "react";
import styles from './Loader.module.css';
import {CircularProgress} from '@mui/material';


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