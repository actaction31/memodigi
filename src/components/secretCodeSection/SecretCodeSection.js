import React, { useState } from 'react';
import Router from "next/router";
import { classes, CustomPasswordField, CustomTextField, setAuthToken } from "@/helpers";
import { callApiAction } from "@/actions/apiActions";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import Trans from 'next-translate/Trans'
import useApiCalls from "@/hooks/useApiCalls";
import SectionBodyTitle from "@/components/sectionBodyTitle/SectionBodyTitle";
import CustomButton, { BUTTON_TYPE } from "@/components/customButton/CustomButton";
import Icon, { ICON_TYPES } from "@/components/icon/Icon";
import useTranslation from "next-translate/useTranslation";

import { ACCOUNT_CONNECT_EXT_ACCOUNT_PATH, MANAGE_CONTENT_PATH } from "@/constants";

import styles from './SecretCodeSection.module.css';

export default function SecretCodeSection({ accountUniqCode }) {

    const callApi = useApiCalls({ accountUniqCode });

    const { t } = useTranslation("common");
    const { accountQuery } = useAppContext();
    const [ licenseKey, setLicenseKey ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ passwordSet, setPasswordSet ] = useState(false);
    const [ newPassword, setNewPassword ] = useState(null);

    const account = accountQuery?.data;
    const accountRefetch = accountQuery?.refetch;
    const activated = !!account?.activated_at;

    function activateAccount() {
        setError(null);
        if (!licenseKey) {
            setError( t("account_activation.errors.empty_license_key") );
            return;
        }
        callApiAction({ action: 'activateAccount', urlParams: { accountUniqCode, key: licenseKey } })
            .then(response => {
                if (response?.data?.token) {
                    setAuthToken(response?.data?.token);
                }
                accountRefetch?.();
            })
            .catch(error => {
                setError( t("account_activation.errors.not_valid_license_key") )
            })
    }

    const skipPasswordSet = () => {
        setError(null);
        setPasswordSet(true);
    }

    const setPassword = () => {
        setError(null);
        if (!newPassword) {
            setError( t("account_activation.errors.empty_password") )
            return;
        }
        callApi({ action: 'setAccountPassword', urlParams: { accountUniqCode }, data: { password: newPassword } })
            .then(response => {
                accountRefetch?.();
                setPasswordSet(true);
            })
            .catch(error => {
                setError( t("account_activation.errors.something_went_wrong") )
            })
    }

    const redirectToEditAccountData = () => {
        // TODO: redirect to ACCOUNT_CONNECT_EXT_ACCOUNT_PATH when the account connecting will be ready
        Router.push({ pathname: MANAGE_CONTENT_PATH, query: { accountUniqCode } })
    }

    const actions = activated ?
        passwordSet ?
            {
                className: null,
                buttons: [
                    {
                        title: t("account_activation.buttons.continue"),
                        type: BUTTON_TYPE.regularPink,
                        onClick: redirectToEditAccountData,
                    }
                ]
            }
            :
            {
                className: styles.passwordButtons,
                buttons: [
                    {
                        title: t("account_activation.buttons.set_my_password"),
                        type: BUTTON_TYPE.regularPink,
                        onClick: setPassword,
                    },
                    {
                        title: t("account_activation.buttons.skip"),
                        type: BUTTON_TYPE.simpleLink,
                        onClick: skipPasswordSet,
                    }
                ]
            }
        :
        {
            className: styles.activateAccountButtonWrapper,
            buttons: [
                {
                    title: t("account_activation.buttons.submit"),
                    type: BUTTON_TYPE.regularPink,
                    onClick: activateAccount,
                    className: styles.activateAccountButton
                }
            ]
        }


    return (
        <div className={styles.wrapper}>
            <div className={styles.bottomImage}>
                <Icon type={ ICON_TYPES.hand } />
            </div>
            <SectionBodyTitle title={ activated ? t("account_activation.title_thank_you") : t("account_activation.title_nice_to_meet_you") }
                              subTitle={ activated ? null :
                                    <Trans i18nKey="common:account_activation.require_activation_message" components={[<strong key={"1"}/>, <br key={"2"}/>]} />
            } />
            <div className={styles.form}>
                {/*<div className={styles.formFields}>*/}
                {/*    <CustomTextField label={'Secret code'} onChange={()=> {}} />*/}
                {/*</div>*/}
                {/*<div className={styles.formFields}>*/}
                {/*    <CustomButton title={ 'Submit my code' }*/}
                {/*                  type={ BUTTON_TYPE.regularPink }*/}
                {/*                  onClick={ handleSubmitClick }*/}
                {/*                  className={ styles.submitButton } />*/}
                {/*</div>*/}

                { activated ?
                    passwordSet ?
                        <div className={styles.content}>
                            <span className={styles.completeMessage}>
                                { t("account_activation.password_was_set") }
                            </span>
                        </div> :
                        <div className={styles.content}>
                            <span className={styles.setPasswordMessage}>
                                <Trans i18nKey="common:account_activation.set_password_message" components={[<strong key={"1"}/>, <br key={"2"}/>]} />
                            </span>
                            <div>
                                <CustomPasswordField label={ t("account_activation.specify_your_password") }
                                                     onChange={(e)=> { setNewPassword(e?.target?.value) }} />
                            </div>
                        </div>
                    :
                    <div className={styles.content}>
                        <CustomTextField label={t("account_activation.provide_license_key")} onChange={(e)=> { setLicenseKey(e?.target?.value) }} />
                    </div>
                }
                { error ? <div className={styles.error}>{ error }</div> : null }

                { actions?.buttons?.length ?
                    <div className={classes(styles.buttons, actions?.className)}>
                        { actions?.buttons?.map((action, index) => (
                            <CustomButton title={ action?.title }
                                          key={ index }
                                          type={ action?.type }
                                          onClick={ action?.onClick }
                                          className={ action?.className } />
                        ))}
                    </div>
                    : null
                }

            </div>
        </div>
    )
}