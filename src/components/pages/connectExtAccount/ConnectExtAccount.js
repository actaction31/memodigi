import React from 'react';
import Router from "next/router";

import AccountLayout from "@/layouts/customer/AccountLayout";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import ConnectExtAccountSection from "@/components/connectExtAccountSection/ConnectExtAccountSection";

import { ACCOUNT_SECRET_CODE_PATH } from "@/constants";

import styles from './ConnectExtAccount.module.css';

export default function ConnectExtAccount({ accountUniqCode }) {

    const handleBackClick = () => {
        Router.push({ pathname: ACCOUNT_SECRET_CODE_PATH, query: { accountUniqCode } })
    }

    return (
        <AccountLayout className={styles.wrapper} accountUniqCode={ accountUniqCode }>
            <SectionTitle prevAction={handleBackClick} />
            <ConnectExtAccountSection accountUniqCode={ accountUniqCode } />
        </AccountLayout>
    )
}