import React from 'react';
import P3A from '../../assets/P3A.png';
import styles from './P3.module.scss';

function P3(){
    return(
        <div className={styles.container}>
            <img src = {P3A} />
            <a href= {P3A} download  >
                <div className={styles.download}>
                    Download
                </div>
            </a>
        </div>
    )
}

export default P3;