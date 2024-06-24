import React, { Fragment } from 'react';
import { classes } from "@/helpers";

import styles from './Pipeline.module.css';

// const configExample = [
//     { icon: <Icon type={ ICON_TYPES.info } /> },
//     { icon: <Icon type={ ICON_TYPES.photo } /> },
//     { icon: <Icon type={ ICON_TYPES.settings } /> },
// ]

export default function Pipeline({ config, activeIndex, className }) {
    if (!config) {
        return null;
    }
    return (
        <div className={classes(styles.wrapper, className)}>
            { config?.map((configItem, index) => {
                return (
                    <Fragment key={index}>
                        <div className={classes(styles.step, index === activeIndex ? styles.active : null)}>
                            { configItem?.icon }
                        </div>
                        { index !== (config.length - 1) ?
                            <div className={styles.line} />
                            : null
                        }
                    </Fragment>
                )
            })}
        </div>
    )
}