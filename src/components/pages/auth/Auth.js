import React from 'react';
import Router from "next/router";

import AccountLayout from "@/layouts/customer/AccountLayout";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

import dynamic from "next/dynamic";
const Login = dynamic(() => import("@/components/login/Login"));

import { VIEW_CONTENT_PATH } from "@/constants";

import styles from './Auth.module.css';

export default function Auth({ accountUniqCode }) {

    const handleBackClick = () => {
        Router.push({ pathname: VIEW_CONTENT_PATH, query: { accountUniqCode } })
    }

    return (
        <AccountLayout className={styles.wrapper} accountUniqCode={ accountUniqCode }>
            <SectionTitle prevAction={handleBackClick} />
            <Login accountUniqCode={ accountUniqCode } />
        </AccountLayout>
    )
}