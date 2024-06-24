import React from 'react';

import styles from './Slide.module.css';

export default function Slide({ data, textOnTop = false, onClick }) {

    const imageProportion = data?.width / data?.height;

    const additionalParams = {
        '--proportion': imageProportion > 1.2 ?
            1.2 : (imageProportion < 0.8 ? 0.8 : imageProportion)
    }

    return (
        <div className={styles.wrapper}
             style={{ flexDirection: textOnTop ? 'column' : 'column-reverse', ...additionalParams }}
             onClick={onClick} >
            <div className={styles.image}>
                <img src={data?.image} alt={""} />
            </div>
            <div className={styles.label}>
                <div className={styles.line1Description}>
                    Montmartre, Jan, 6, 2022
                </div>
                <div className={styles.line2Description}>
                    Welcome to my trip memories about beautiful city I’ve visited
                </div>
            </div>
        </div>
    )
}