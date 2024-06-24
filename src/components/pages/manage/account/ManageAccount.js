import React, { useEffect } from 'react';
import Router from "next/router";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import useTokenValidation from "@/hooks/useTokenValidation";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import EditContentLayout from "@/layouts/manager/EditContentLayout";

import { ACCOUNT_CONNECT_EXT_ACCOUNT_PATH, MANAGE_CONTENT_PATH, VIEW_CONTENT_PATH } from "@/constants";

import dynamic from "next/dynamic";
const Account = dynamic(() => import("@/components/manage/account/Account"))

import styles from './ManageAccount.module.css';

export default function ManageAccount({ accountUniqCode }) {

    const { setAccountUniqCodeValue, accountQuery } = useAppContext();
    const { isTokenValid } = useTokenValidation({
        accountUniqCode,
        backRedirectPath: { pathname: MANAGE_CONTENT_PATH, query: { accountUniqCode } },
    })

    useEffect(() => {
        setAccountUniqCodeValue(accountUniqCode);
    }, [ accountUniqCode ])

    const account = accountQuery?.data;

    if (!isTokenValid || !account) {
        return null;
    }

    const handleBackClick = () => {
        // TODO: redirect to ACCOUNT_CONNECT_EXT_ACCOUNT_PATH when the account connecting will be ready
        Router.push({ pathname: VIEW_CONTENT_PATH, query: { accountUniqCode } })
    }

    return (
        <EditContentLayout accountUniqCode={ accountUniqCode } className={styles.wrapper}>
            <SectionTitle prevAction={ handleBackClick } />
            <Account accountUniqCode={ accountUniqCode } />
        </EditContentLayout>
    )
}