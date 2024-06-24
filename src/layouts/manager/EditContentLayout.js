import React, { useEffect } from 'react';
import { classes, getAccountTemplate } from "@/helpers";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import styles from './EditContentLayout.module.css';

export default function EditContentLayout({ accountUniqCode, className, children, isPublic = false }) {

    const { setAccountUniqCodeValue, accountQuery } = useAppContext();

    useEffect(() => {
        setAccountUniqCodeValue(accountUniqCode);
    }, [ accountUniqCode ])

    const account = accountQuery?.data;

    if (!account) {
        return null;
    }

    const template = getAccountTemplate({ accountTemplate: account?.active_template?.template });

    const renderStyles = () => {
        return null;
    }

    return (
        <div className={classes(styles.wrapper, className)} style={ template?.editContentLayout?.wrapper }>
            { renderStyles() }
            { children }
        </div>
    )
}
