import React from 'react';
import { useAppContext } from "@/src/contexts/ApplicationContext";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";

import dynamic from "next/dynamic";

import styles from './AccountDetails.module.css';

export default function AccountDetails({ accountUniqCode }) {

    const { accountQuery } = useAppContext();

    const account = accountQuery?.data;

    return(
        <div className={styles.info}>
            <div className={styles.infoTitle}>
                Edit Account content
            </div>
            <div className={styles.placeholder}>Coming Soon</div>
        </div>
    )
}