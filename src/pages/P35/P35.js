import React from 'react';
import P35B from '../../assets/P35B.jpg';
import styles from './P35.module.scss';

function P35(){
    return(
        <div className={styles.container}>
            <img src = {P35B} />
            <a href= {P35B} download  >
                <div className={styles.download}>
                    Download
                </div>
            </a>
        </div>
    )
}

export default P35;