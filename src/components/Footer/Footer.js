import React, { useState } from 'react';
import { Link, match } from 'react-router-dom';
import styles from './Footer.module.scss';


import UseMediaQuery from '../../hooks/useMediaQuery';

function Footer(){

    
    return(
            <div className={styles.footer}> 
            <Link to="/MainTest">
                Tril.ogy = Tril.5gy
                </Link>
            </div>
    )
}

export default Footer;