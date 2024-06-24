import React, { useState } from 'react';
import Router from "next/router";

import SectionTitle from "@/components/sectionTitle/SectionTitle";
import EditContentLayout from "@/layouts/manager/EditContentLayout";

import { ACCOUNT_CONNECT_EXT_ACCOUNT_PATH, UPLOAD_CONTENT_PATH } from "@/constants";

import dynamic from "next/dynamic";
const Account = dynamic(() => import("@/components/manage/account/Account"))

import styles from './UploadPreview.module.css';
import UploadPreviewContent from "@/components/uploadContentSection/uploadPreview/UploadPreviewContent";
import LimitsBlock from "@/components/limitsBlock/LimitsBlock";

export default function UploadPreview({ accountUniqCode }) {
    const [isLimit, setIsLimit] = useState({
        storage: false,
        count: false
    });

    const handleBackClick = () => {
        Router.push({ pathname: ACCOUNT_CONNECT_EXT_ACCOUNT_PATH, query: { accountUniqCode } })
    }

    const limitButtons = {
        prevButton: { title: 'Cancel', onClick: () => { } },
        nextButton: {
            title: 'Done', onClick: () => {
                Router.push({ pathname: UPLOAD_CONTENT_PATH, query: { accountUniqCode } })
            }
        },
    }

    const updateIsLimit = (key, value) => {
        setIsLimit(prev => {return {...prev, [key]: value}})
    }

    return (
        <EditContentLayout accountUniqCode={accountUniqCode} className={styles.wrapper}>
            <div className={styles.paddingWrapper}>
                <SectionTitle prevAction={handleBackClick} title={'Upload photos'} />
            </div>
            <UploadPreviewContent 
                accountUniqCode = {accountUniqCode} 
                isLimit = {isLimit} 
                setIsLimit = {(index, value) => updateIsLimit(index, value)} 
                callback = {() => { }} 
            />
            <div className={styles.limits}>
                <LimitsBlock 
                    buttonsConfig = {limitButtons} 
                    accountUniqCode = {accountUniqCode} 
                    setIsLimit = {(index, value) => updateIsLimit(index, value)} 
                />
            </div>
        </EditContentLayout>
    )
}