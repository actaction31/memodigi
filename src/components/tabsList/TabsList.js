import React from 'react';
import { classes } from "@/helpers";

import styles from './TabsList.module.css';

export default function TabsList({ tabs, activeIndex, setActiveIndex, className }) {
    const activeTab = tabs?.[activeIndex];
    return (
        <div className={classes(styles.wrapper, className)}>
            <ul>
                { tabs?.map((tab, index) => {
                    return (
                        <li key={index}
                            className={classes(styles.tabTitle, index === activeIndex ? styles.activeTab : null)}
                            onClick={() => { setActiveIndex(index) }}>
                            { tab.title }
                        </li>
                    )
                })}
            </ul>
            <div className={"content"}>
                { activeTab?.content }
            </div>
        </div>
    )
}