import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Intropage.module.scss';

import useMousePosition from '../../hooks/useMousePosition';
import useTouchPosition from '../../hooks/useTouchPosition';
import UseMediaQuery from '../../hooks/useMediaQuery';

function IntroPage(){

    const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 600px)');
    const { mouseX, mouseY } = useMousePosition();
    const { touchX, touchY } = useTouchPosition();

    return(
        <div 
            className={styles.main}
            style={{
                background: isDeviceWidthWideAsDesktop ? 
                    `radial-gradient( farthest-corner at ${mouseX}px ${mouseY}px, #d82f2f, #222)` :
                    `radial-gradient( farthest-corner at ${touchX}px ${touchY}px, #d82f2f, #222)` 
            }}
        >
            <Link to="/main" className={styles.link}>
            <div className={styles.text}>
                <div className={styles.header}>
                    Tril.5gy
                </div>
                Design Thinking and Communication
                <br/>
                Jeanyoon Choi
            </div>
            </Link>
        </div>
    )

}

export default IntroPage;