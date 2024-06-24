import React, { useState, useEffect } from 'react';
import Router from "next/router";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import useTranslation from "next-translate/useTranslation";
import useTokenValidation from "@/hooks/useTokenValidation";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import EditContentLayout from "@/layouts/manager/EditContentLayout";
import TabsList from "@/components/tabsList/TabsList";
import DirectUpload from "@/components/uploadContentSection/directUpload/DirectUpload";
import LimitsBlock from "@/components/limitsBlock/LimitsBlock";

import { ACCOUNT_CONNECT_EXT_ACCOUNT_PATH, ALBUM_VIEW_PATH, MANAGE_CONTENT_PATH, VIEW_CONTENT_PATH } from "@/constants";

import dynamic from "next/dynamic";
const Account = dynamic(() => import("@/components/manage/account/Account"))

import styles from './UploadContent.module.css';

export default function UploadContent({ accountUniqCode }) {

    const { t } = useTranslation("upload_content");
    const { setAccountUniqCodeValue } = useAppContext();
    const [ currentTabIndex, setCurrentTabIndex ] = useState(0);
    const { isTokenValid } = useTokenValidation({
        accountUniqCode,
        backRedirectPath: { pathname: MANAGE_CONTENT_PATH, query: { accountUniqCode } },
    })

    useEffect(() => {
        setAccountUniqCodeValue(accountUniqCode);
    }, [ accountUniqCode ]);

    if (!isTokenValid) {
        return null;
    }

    const tabs = [
        { title: t("upload_options.direct_upload"), content: <DirectUpload accountUniqCode={ accountUniqCode } callback={ () => {} } /> },
        { title: t("upload_options.instagram_upload"), content: <></> },
    ]

    const handleBackClick = () => {
        // TODO: redirect to ACCOUNT_CONNECT_EXT_ACCOUNT_PATH when the account connecting will be ready
        Router.push({ pathname: VIEW_CONTENT_PATH, query: { accountUniqCode } })
    }

    const limitButtons = {
        prevButton: { title: t("limit_buttons.cancel"),  onClick: () => {
            Router.push({ pathname: VIEW_CONTENT_PATH, query: { accountUniqCode } })
        }},
        nextButton: { title: t("limit_buttons.done"),    onClick: () => {
            Router.push({ pathname: VIEW_CONTENT_PATH, query: { accountUniqCode } })
        }},
    }

    return (
        <EditContentLayout accountUniqCode={ accountUniqCode } className={styles.wrapper}>
            <div className={styles.paddingWrapper}>
                <SectionTitle prevAction={ handleBackClick } title={ t("main_title") } />
            </div>
            <TabsList tabs={ tabs }
                      activeIndex={ currentTabIndex }
                      setActiveIndex={ setCurrentTabIndex } />
            <div className={styles.limits}>
                <LimitsBlock buttonsConfig={ limitButtons }
                             accountUniqCode={ accountUniqCode } />
            </div>
        </EditContentLayout>
    )
}