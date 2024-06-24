import React from 'react';
import { classes } from "@/helpers";

import CustomButton from "@/components/customButton/CustomButton";

import styles from './CustomModal.module.css';

export default function CustomModal({ children, title, message, actions }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.wrapper} >
                { title ?
                    <div className={styles.title}>
                        { title }
                    </div>
                    : null
                }
                { message ?
                    <div className={styles.message}>
                        { message }
                    </div>
                    : null
                }
                <div className={styles.body}>
                    { children }
                </div>
                { actions?.buttons?.length ?
                    <div className={classes(styles.actions, actions?.className)}>
                        { actions?.buttons?.map((button, index) => {
                            return (
                                <CustomButton title={ button?.title }
                                              className = { button?.className }
                                              type={ button?.type }
                                              onClick={ button?.onClick }
                                              key={ index }
                                              { ...button?.otherProps } />
                            )
                        })}
                    </div>
                    : null
                }
            </div>
        </div>
    )
}