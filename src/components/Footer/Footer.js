import React, { useState } from 'react';
import { Link, match } from 'react-router-dom';
import styles from './Footer.module.scss';


import UseMediaQuery from '../../hooks/useMediaQuery';

function Footer(){

    
    return(
        <div className={styles.footer}> 
            Tril.ogy = Tril.5gy
        </div>
    )
}

export default Footer;