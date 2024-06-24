import React from 'react';
import { classes } from "@/helpers";

import styles from './SectionBodyTitle.module.css';

export default function SectionBodyTitle({ title, subTitle, className }) {
    return (
        <div className={classes(styles.wrapper, className)}>
            { title ?
                <div className={styles.title}>
                    { title }
                </div>
                : null
            }
            { subTitle ?
                <div className={styles.subTitle}>
                    { subTitle }
                </div>
                : null
            }
        </div>
    )
}