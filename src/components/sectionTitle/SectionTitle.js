import React from 'react';
import { classes } from "@/helpers";

import Icon, { ICON_TYPES } from "@/components/icon/Icon";

import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, prevAction, nextBlock, closeAction, classNames }) {
    return (
        <div className={classes(styles.wrapper, classNames?.root)}>
            { prevAction ?
                <div className={styles.prevBlock}>
                    <Icon type={ ICON_TYPES.back } onClick={() => { prevAction?.() }} />
                </div>
                : null
            }
            <div className={styles.titleBlock}>
                { title }
            </div>
            <div className={styles.nextBlock}>
                { nextBlock }
            </div>
        </div>
    )
}