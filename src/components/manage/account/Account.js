import React, { useState } from 'react';

import Pipeline from "@/components/pipeline/Pipeline";
import Icon, { ICON_TYPES } from "@/components/icon/Icon";
import TripStep0 from "@/components/templates/trip/manage/steps/TripStep0";
import TripStep1 from "@/components/templates/trip/manage/steps/TripStep1";

import styles from './Account.module.css';

import dynamic from "next/dynamic";
const ContentEdit = dynamic(() => import("@/components/manage/contents/Contents"));
const AccountDetails = dynamic(() => import("@/components/manage/account/AccountDetails"));

const stepsConfig = [
    { icon: <Icon type={ ICON_TYPES.info } /> },
    { icon: <Icon type={ ICON_TYPES.photo } /> },
    { icon: <Icon type={ ICON_TYPES.settings } /> },
]

export default function Account({ accountUniqCode }) {

    const [ step, setStep ] = useState(0);

    return (
        <div className={styles.wrapper}>

            <div className={styles.pipeline}>
                <Pipeline config={stepsConfig} activeIndex={step} />
            </div>

            { step === 0 ? <TripStep0 accountUniqCode={accountUniqCode}
                                      nextCallback={() => { setStep((prev) => prev + 1) }}
                                      backCallback={() => { setStep((prev) => prev - 1) }} /> : null }

            { step === 1 ? <TripStep1 accountUniqCode={accountUniqCode}
                                      nextCallback={() => { setStep((prev) => prev + 1) }}
                                      backCallback={() => { setStep((prev) => prev - 1) }} /> : null }

            {/*<AccountDetails accountUniqCode={accountUniqCode} />*/}

            {/*<div className={classes("whiteButton", styles.linkButton)}>*/}
            {/*    <Link href={{ pathname: VIEW_CONTENT_PATH, query: { accountUniqCode } }}>*/}
            {/*        View content*/}
            {/*    </Link>*/}
            {/*</div>*/}

        </div>
    )
}