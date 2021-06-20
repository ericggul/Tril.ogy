import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainTest.module.scss';

import useMousePosition from '../../hooks/useMousePosition';
import useTouchPosition from '../../hooks/useTouchPosition';
import UseMediaQuery from '../../hooks/useMediaQuery';

import Navigator from '../../components/Navigator/Navigator';

function MainTest(){
    const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 600px)');
    const { mouseX, mouseY } = useMousePosition();
    const { touchX, touchY } = useTouchPosition();

    const P0Link = "https://ericggul.github.io/DTC/Assignment%201/P0%20Revised%202/index.html";
    const P1Link = "https://ericggul.github.io/DTC/P1/";

    const [P0, setP0] = useState(false);
    const [P1, setP1] = useState(false);
    const [P2, setP2] = useState(false);
    const [P3, setP3] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [gradientColor, setGradientColor] = useState('#d82f2f');


    return(
        <div className={styles.main}
            style={{
                background: isDeviceWidthWideAsDesktop ? 
                    `radial-gradient(200px 200px at ${mouseX}px ${mouseY}px, #d82f2f, #222)` :
                    `radial-gradient(200px 200px at ${touchX}px ${touchY}px, #d82f2f, #222)` 
            }}
        >
            <div className={styles.header}>
                Tril.ogy = Tril.5gy
            </div>

            <div className={styles.main_description}>
                <div className={styles.ein}>
                    <div>
                        Design Thinking for Communication 2021-1
                    </div>
                    <div>
                        3.5 projects
                    </div>
                    <div>
                        Independent Topics
                    </div>
                    <div>
                        Series of Philosophy<br /><br />
                    </div>
                </div>

                <div className={styles.zwei}>
                    <div>
                        P1: Anti-Platonism, an eternal recurrence
                    </div>
                    <div>
                        P2: Simulacres et Simulation
                    </div>
                    <div>
                        P3: Experimental Skepticism
                    </div>
                    <div>
                        P3.5: Cynical Laughter <br /><br /><br /><br />
                    </div>
                </div>

                <div className={styles.drei}>
                    <div>
                        P1: Irony when we have to think 'subjectively' in order to derive an 'objective'. Born, Live and Die, that is a natural cycle.
                    </div>
                    <div>
                        P2: We had built similar fordistic apartments to mass-produce residences in low price. We overpay an apartment due to such similarity. 
                    </div>
                    <div>
                        P3: Favor of experimental 'regression to mean' over inductive linear regression. Criticism on overwhelmed IT stock market.
                    </div>
                    <div>
                        P3.5: Criticism on an overwhelmed crpytocurrency: Laughter is sometimes strogner than criticism itself.
                    </div>
                </div>


            </div>

            <Navigator projectId={100} />
        </div>
    )

}

export default MainTest;