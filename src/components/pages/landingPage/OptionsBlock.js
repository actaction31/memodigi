import React from 'react';
import { classes } from "@/helpers";

import styles from './OptionsBlock.module.css';

/*
* options = [ { label: 'text', subLabel: 'text2', icon: <Fragment /> } ]
* */
export default function OptionsBlock({ title, classNames, options, isNumerableList, selectedIndex, setSelectedIndex }) {
    return (
        <div className={classes(styles.wrapper, classNames?.root)}>
            { title ?
                <h3 className={styles.title}>{ title }</h3>
                : null
            }
            <ul>
                { options?.map((option, index) => {
                    return (
                        <li key={index} className={ selectedIndex === index ? styles.selected : null }>
                            { isNumerableList ?
                                <div className={styles.optionIndex}>{ index + 1}</div>
                                : null
                            }
                            { (!isNumerableList && option?.icon) ?
                                <div>
                                    { option?.icon }
                                </div>
                                : null
                            }
                            <div className={styles.optionLabel}>
                                { option?.label ?
                                    <span className={styles.label}>
                                        { option?.label }
                                    </span>
                                    : null
                                }
                                { option?.subLabel ?
                                    <span className={styles.subLabel}>
                                        { option?.subLabel }
                                    </span>
                                    : null
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}