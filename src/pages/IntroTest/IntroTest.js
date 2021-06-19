import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './IntroTest.module.scss';

import useMousePosition from '../../hooks/useMousePosition';
import useTouchPosition from '../../hooks/useTouchPosition';
import UseMediaQuery from '../../hooks/useMediaQuery';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function IntroTest(){

    
    const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 600px)');
    const { mouseX, mouseY } = useMousePosition();
    const { touchX, touchY } = useTouchPosition();
    const { width, height } = useWindowDimensions();
    

    return(
        <div 
            className={styles.main}
            style={{
                background: isDeviceWidthWideAsDesktop ? 
                    `radial-gradient( ${width*0.8}px ${height*0.9}px at ${mouseX}px ${mouseY}px, #d82f2f, #222)` :
                    `radial-gradient(${width*0.9}px ${height*0.9}px at ${touchX}px ${touchY}px, #d82f2f, #222)` 
            }}
        >   
        <div className={styles.dummy} />
        <div className={styles.hole} />
        <div className={styles.hole} />
        <div className={styles.hole} />
        <div className={styles.semihole} />
        <div className={styles.dummy} />

            <Link to="/main" className={styles.link}>
            <div className={styles.text}>
                Tril.ogy
            </div>
            </Link>
        </div>
    )

}

export default IntroTest;