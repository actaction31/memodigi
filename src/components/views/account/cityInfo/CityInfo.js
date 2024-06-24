import React from 'react';

import styles from './CityInfo.module.css';

export default function CityInfo({ contentData }) {

    if (!contentData) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.city}>
                { contentData.description_small ?
                    <div className={styles.accountDescriptionSmall}>
                        { contentData.description_small }
                    </div> : null
                }
                { contentData.description_big ?
                    <div className={styles.accountDescriptionBig}>
                        { contentData.description_big }
                    </div> : null
                }
            </div>
        </div>
    )
}