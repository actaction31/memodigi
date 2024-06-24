import React from 'react';
import Router from "next/router";
import Icon, { ICON_TYPES } from "@/components/icon/Icon";
import CustomButton, { BUTTON_TYPE } from "@/components/customButton/CustomButton";
import SectionBodyTitle from "@/components/sectionBodyTitle/SectionBodyTitle";
import OptionsList from "@/components/optionsList/OptionsList";

import { MANAGE_CONTENT_PATH } from "@/constants";

import styles from './ConnectExtAccountSection.module.css';

export default function ConnectExtAccountSection({ accountUniqCode }) {

    const handleSkipClick = () => {
        Router.push({ pathname: MANAGE_CONTENT_PATH, query: { accountUniqCode } })
    }

    const externalServices = [
        {
            icon: <Icon type={ ICON_TYPES.google } />,
            name: 'Google',
            rightIcon: true,
            onClick: () => {}
        },
        {
            icon: <Icon type={ ICON_TYPES.instagram } />,
            name: 'Instagram',
            rightIcon: true,
            onClick: () => {}
        },
        {
            icon: <Icon type={ ICON_TYPES.facebook } />,
            name: 'Facebook',
            rightIcon: true,
            onClick: () => {}
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div>
                <SectionBodyTitle title={'Connect account'}
                                  subTitle={'to manage all your albums from one place'} />
                <OptionsList config={ externalServices } />
            </div>

            <div className={styles.skipButtonWrapper}>
                <CustomButton title={ 'Skip for now' }
                              type={ BUTTON_TYPE.transparent }
                              onClick={ handleSkipClick }
                              className={ styles.skipButton } />
            </div>
        </div>
    )
}
