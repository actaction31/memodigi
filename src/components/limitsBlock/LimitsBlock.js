import React, { useEffect } from 'react';
import { classes, formatBytes } from "@/helpers";
import { useAppContext } from "@/src/contexts/ApplicationContext";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";

import styles from './LimitsBlock.module.css';

export default function LimitsBlock({ accountUniqCode, buttonsConfig, setIsLimit, className }) {

    const { accountQuery } = useAppContext();

    const account = accountQuery?.data;

    if (!account) {
        return null;
    }

    const limitProgressPercent = (
        (account?.storage_usage?.occupied_space || 0) / (account?.active_subscription?.storage_size || 1)
    ) * 100;

    const limitStylesVariables = {
        '--limit-progress-percent': `${limitProgressPercent}%`,
    }

    const getLimitText = () => {
        return `${formatBytes(account?.storage_usage?.occupied_space, 0)} / ${formatBytes(account?.active_subscription?.storage_size, 0)}` //`${account?.storage_usage?.photos} / ${account?.active_subscription?.max_photos_count}`
    }

    useEffect(() => {
        if(setIsLimit) {
            if(limitProgressPercent > 100) setIsLimit('storage', true)
            else setIsLimit('storage', false)
        }
    }, [limitProgressPercent])

    return (
        <div className={classes(styles.wrapper, className)}>
            <div className={styles.limitsLineBlock}>
                <div className={styles.limitLine} style={limitStylesVariables} />
            </div>
            <div className={styles.buttons}>
                <div className={styles.prevButton}>
                    { buttonsConfig?.prevButton ?
                        <div className={styles.button} onClick={()=> { buttonsConfig?.prevButton?.onClick?.() }}>
                            { buttonsConfig?.prevButton?.title }
                        </div>
                        : null
                    }
                </div>
                <div className={styles.limitText}>
                    { getLimitText() }
                </div>
                <div className={styles.nextButton}>
                    { buttonsConfig?.nextButton ?
                        <div className={styles.button} onClick={()=> { buttonsConfig?.nextButton?.onClick?.() }}>
                            { buttonsConfig?.nextButton?.title }
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}