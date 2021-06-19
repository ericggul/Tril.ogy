import React from 'react'
import styles from '../../pages/SummaryPage/SummaryPage.module.scss';

import Navigator from '../Navigator/Navigator';

export default function SummaryDesktopPage({ id, project }) {
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
            <div className={styles.name}>
                {project?.description.name}
            </div>
            <div className={styles.description}>
                {project?.description.introduction}
            </div>

        </div>
    )
}
