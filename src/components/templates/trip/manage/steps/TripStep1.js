import React, { useState } from 'react';
import Router from "next/router";

import useTranslation from "next-translate/useTranslation";
import SectionBodyTitle from "@/components/sectionBodyTitle/SectionBodyTitle";
import CustomButton, { BUTTON_TYPE } from "@/components/customButton/CustomButton";
import ContentEdit from "@/components/manage/contentEdit/ContentEdit";
import Icon, { ICON_TYPES } from "@/components/icon/Icon";
import OptionsList from "@/components/optionsList/OptionsList";

import { UPLOAD_CONTENT_PATH, UPLOAD_PREVIEW_PATH } from "@/constants";

import styles from './TripStep1.module.css';

export default function TripStep1({ accountUniqCode, nextCallback, backCallback }) {
    const { t } = useTranslation("common");
    const [ subStep, setSubStep ] = useState(0);
    const [ formData, setFormData ] = useState({});

    const updateFormData = ({ fieldName, fieldValue }) => {
        if (fieldValue) {
            const { ...otherFields } = formData;
            setFormData(otherFields);
        } else {
            setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
        }
    }

    const handleBackClick = () => {
        backCallback?.();
    }

    const handleSubmitForm = () => {
        Router.push({ pathname: UPLOAD_PREVIEW_PATH, query: { accountUniqCode } });
        // TODO: submit form
        // nextCallback?.();
    }

    const uploadOptions = [
        {
            icon: null,
            name: t("account_pre_upload_screen.options.direct_upload_title"),
            rightIcon: false,
            onClick: () => { Router.push({ pathname: UPLOAD_PREVIEW_PATH, query: { accountUniqCode } }) }
        },
        {
            icon: <Icon type={ ICON_TYPES.instagram } />,
            name: t("account_pre_upload_screen.options.instagram_upload_title"),
            rightIcon: true,
            onClick: () => { }
        },
    ];

    return (
        <div className={styles.wrapper}>
            <>
                <div className={styles.formSection}>
                    <SectionBodyTitle title={ t("account_pre_upload_screen.main_title") }
                                      subTitle={ t("account_pre_upload_screen.main_sub_title") } />
                    <OptionsList config={uploadOptions} />
                </div>

                <div className={styles.buttonsWrapper}>
                    <CustomButton title={ t("account_pre_upload_screen.back_button") }
                                  type={ BUTTON_TYPE.transparent }
                                  onClick={ handleBackClick }
                                  className={ null } />
                    <CustomButton title={ t("account_pre_upload_screen.next_button") }
                                  type={ BUTTON_TYPE.regularPink }
                                  onClick={ handleSubmitForm }
                                  className={ null } />
                </div>
            </>
            {/*<ContentEdit accountUniqCode={ accountUniqCode } />*/}
        </div>
    )
}

