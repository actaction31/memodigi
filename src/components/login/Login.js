import React from 'react'
import SecretCodeSection from "@/components/secretCodeSection/SecretCodeSection";

import styles from './Login.module.css'

export default function Login({ accountUniqCode }) {

    return (
        <div className={styles.wrapper}>
            <SecretCodeSection accountUniqCode={accountUniqCode} />
        </div>
    )
}