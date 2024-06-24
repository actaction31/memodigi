import React, { useState } from 'react';
import Router, { useRouter } from "next/router";
import { changeLocale, classes, getAccountTemplate } from "@/helpers";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import AlbumBackground from "@/components/albumBackground/AlbumBackground";
import useTranslation from 'next-translate/useTranslation'
import CustomButton, { BUTTON_TYPE } from "@/components/customButton/CustomButton";
import Link from "next/link";

import { ACCOUNT_SECRET_CODE_PATH, MANAGE_CONTENT_PATH } from "@/constants";

import styles from "./EmptyContents.module.css";

export default function EmptyContents({ accountUniqCode }) {

    // const {} = useBodyStyle({ bodyStyle: 'empty-content-page' });

    const { t } = useTranslation();
    const { accountQuery } = useAppContext();

    const account = accountQuery?.data;

    if (!account) {
        return null;
    }

    const template = account?.active_template?.template;

    const handleCreateClick = () => {
        const routeDetails = account.activated_at ?
            { pathname: MANAGE_CONTENT_PATH, query: { accountUniqCode } }
            :
            { pathname: ACCOUNT_SECRET_CODE_PATH, query: { accountUniqCode } }
        Router.push(routeDetails);
    }

    return (
        <AlbumBackground className={styles.wrapper} account={ account }>
            <div className={styles.wrapperOpacity} />
            <div className={styles.topText}>
                <div className={styles.logo}>
                    <img src={"/logo/logo.png"} alt={""} />
                </div>
                <div className={styles.slogan} style={ template?.css?.albumCover?.slogan }>
                    { t('common:share_your_greatest_memories') }
                </div>
            </div>
            <div className={styles.middleText}>

            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.welcomeTextBlock}>
                    <span className={styles.welcome}>{ t('common:new_account_welcome_message') }</span>
                    <span className={styles.cityName}>{ account?.city?.name }</span>
                </div>
                <CustomButton title={ t('common:create_your_album') }
                              type={ BUTTON_TYPE.pinkNext }
                              onClick={ handleCreateClick } />
            </div>
        </AlbumBackground>
    )
}