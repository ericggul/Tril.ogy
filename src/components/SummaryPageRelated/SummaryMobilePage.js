import React from 'react'
import styles from '../../pages/SummaryPage/SummaryPage.module.scss';

import Navigator from '../Navigator/Navigator';

export default function SummaryMobilePage({ id, project }) {
    return (
        <div 
            className={styles.main}
        >   
            <a href={project?.description.link}>
                <div className={styles.img}>
                    <img src={project?.image} alt={project?.id} />
                </div>
            </a>
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

        </div>
    )
}
