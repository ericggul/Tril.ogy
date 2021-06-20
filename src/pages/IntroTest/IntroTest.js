import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './IntroTest.module.scss';
import Sound from 'react-sound';

import useMousePosition from '../../hooks/useMousePosition';
import useTouchPosition from '../../hooks/useTouchPosition';
import UseMediaQuery from '../../hooks/useMediaQuery';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function IntroTest(){

    
    const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 600px)');
    const { mouseX, mouseY } = useMousePosition();
    const { touchX, touchY } = useTouchPosition();
    const { width, height } = useWindowDimensions();

    const [ guide, setGuide ] = useState(false); 
    
    useEffect(()=>{
        if(!mouseX && !touchX){
            setTimeout(()=>{
                setGuide(true)
            }, 2000)
        } else{
            setGuide(false)
        }
    }, [mouseX, touchX])

    console.log(guide);

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
            <div className={styles.large_hole}>
                <div className={styles.upperc} />
                <div className={styles.holes}>
                    <Link to="/Summary/0"><div className={styles.hole} /></Link>
                    <Link to="/Summary/1"><div className={styles.hole} /></Link>
                    <Link to="/Summary/2"><div className={styles.hole} /></Link>
                    
                        <Link to="/Summary/3"><div className={styles.semihole} /></Link>
   
                </div>
                <div className={styles.upperc} />
            </div>
            <div className={styles.dummy} />

            <Link to="/main" className={styles.link}>
                <div className={styles.text}>
                    Tril.ogy
                </div>
            </Link>

            <div className={ styles.guide} style={{opacity : guide ?  '1' : '0'}}>
                Touch the screen
            </div>
        </div>
    )

}

export default IntroTest;