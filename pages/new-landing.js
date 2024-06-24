import React from 'react';
import Head from 'next/head'
import LandingPage from "@/components/pages/landingPage/LandingPage";

import styles from '../styles/Home.module.css'

export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Memodigi</title>
                <meta name="description" content="Memodigi" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/logo/icon4x3.png" />
            </Head>
            <LandingPage />
        </div>
    )
}
