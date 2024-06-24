import React, { useState } from 'react';
import Router from "next/router";
import { useAppContext } from "@/src/contexts/ApplicationContext";
import { CustomPasswordField, setAuthToken } from "@/helpers";

import useTranslation from "next-translate/useTranslation";
import Icon, { ICON_TYPES } from "@/components/icon/Icon";
import SectionBodyTitle from "@/components/sectionBodyTitle/SectionBodyTitle";
import CustomButton, { BUTTON_TYPE } from "@/components/customButton/CustomButton";
import useApiCalls from "@/hooks/useApiCalls";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

import {
    MANAGE_CONTENT_PATH,
    VIEW_CONTENT_PATH
} from "@/constants";

import styles from './AuthToManageAccount.module.css';

export default function AuthToManageAccount({ accountUniqCode }) {

    const callApi = useApiCalls({ accountUniqCode });

    const { t } = useTranslation("common");
    const { accountQuery, configContext } = useAppContext();
    const [ formData, setFormData ] = useState({});
    const [ error, setError ] = useState(null);

    const updateFormData = ({ fieldName, fieldValue }) => {
        if (typeof fieldValue === "undefined" || fieldValue === undefined || fieldValue === null) {
            setFormData((prev) => {
                const { ...otherFields } = prev;
                return otherFields;
            });
        } else {
            setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
        }
    }

    const handleBackClick = () => {
        Router.push( { pathname: VIEW_CONTENT_PATH, query: { accountUniqCode } } )
    }

    const handleLogin = () => {
        setError(null);
        if (!formData?.password) {
            setError( t("auth_screen.errors.empty_password") )
            return;
        }
        callApi({ action: 'accountLogin', urlParams: { accountUniqCode }, data: { password: formData?.password } })
            .then(response => {
                if (response?.data?.token) {
                    setAuthToken(response?.data?.token);
                    Router.push(
                        configContext?.redirectAfterLoginUri ||
                        { pathname: MANAGE_CONTENT_PATH, query: { accountUniqCode } }
                    )
                }
            })
            .catch(error => {
                console.log('error', error);
                setError( t("auth_screen.errors.incorrect_password") )
            })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bottomImage}>
                <Icon type={ ICON_TYPES.hand } />
            </div>

            <SectionTitle prevAction={ handleBackClick } />

            <div className={styles.formSection}>
                <SectionBodyTitle title={ t("auth_screen.main_title") }
                                  subTitle={ t("auth_screen.main_sub_title") } />

                <div className={styles.form}>
                    <CustomPasswordField label={ t("auth_screen.form.password_field_label") }
                                         onChange={(e)=> { updateFormData({ fieldName: 'password', fieldValue: e?.target?.value }) }}
                                         placeholder={ t("auth_screen.form.password_field_placeholder") }
                                         controlParams={{ value: formData?.password }} />
                </div>
                <div className={styles.error}>
                    { error }
                </div>
            </div>

            <div className={styles.actions}>
                <CustomButton title={ t("auth_screen.buttons.back") }
                              type={ BUTTON_TYPE.simpleLink }
                              onClick={ handleBackClick }
                              className={ null } />
                <CustomButton title={ t("auth_screen.buttons.sing_in") }
                              type={ BUTTON_TYPE.regularPink }
                              onClick={ handleLogin }
                              className={ null } />
            </div>

        </div>
    )
}