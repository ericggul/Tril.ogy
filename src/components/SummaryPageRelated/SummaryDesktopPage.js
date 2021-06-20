import React from 'react'
import styles from '../../pages/SummaryPage/SummaryPage.module.scss';

import Navigator from '../Navigator/Navigator';
import Footer from '../Footer/Footer';

import useWindowDimensions from '../../hooks/useWindowDimensions';


export default function SummaryDesktopPage({ id, project }) {

    const { width, height } = useWindowDimensions();

    const video = 
        <iframe width={width*0.5} height={width*0.6075} src="https://www.youtube.com/embed/yEDiwevbnxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        return (
        <div 
            className={styles.main}
        >   
            <Navigator 
                    projectId={id}
            />            
            <div className={styles.header}>
                {project?.description.type}: {project?.description.assign}
            </div>

            <a href={project?.description.link}>
                <div className={styles.img}>
                <img src={project?.image} alt={project?.id} />
                </div>
            </a>
            <div className={styles.video}>
                {id===2 && video}
            </div>
            <div className={styles.name}>
                {project?.description.name}
            </div>
            <div className={styles.description}>
                {project?.description.introduction}
            </div>

            <Footer />

        </div>
    )
}
