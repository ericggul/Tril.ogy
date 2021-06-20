import React from 'react'
import styles from '../../pages/SummaryPage/SummaryPage.module.scss';

import Navigator from '../Navigator/Navigator';
import Footer from '../Footer/Footer';

import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function SummaryMobilePage({ id, project }) {

    const { width, height } = useWindowDimensions();

    const video = 
        <iframe width={width} height={width*1.215} src="https://www.youtube.com/embed/yEDiwevbnxA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    return (
        <div 
            className={styles.main}
        >   
            <a href={project?.description.link}>
                <div className={styles.img}>
                    <img src={project?.image} alt={project?.id} />
                </div>
            </a>
            <div className={styles.video}>
                {id===2 && video}
            </div>
            <div className={styles.header}>
                {project?.description.type}: {project?.description.assign}
            </div>
            <div className={styles.name}>
                {project?.description.name}
            </div>
            <div className={styles.description}>
                {project?.description.introduction}
            </div>

            <Navigator 
                    projectId={id}
            />           

            <Footer /> 

        </div>
    )
}
