import React, {useEffect, useState} from 'react';
import { CustomTextArea, CustomTextField } from "@/helpers";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import useApiCalls from "@/hooks/useApiCalls";
import useTranslation from "next-translate/useTranslation";
import SectionBodyTitle from "@/components/sectionBodyTitle/SectionBodyTitle";
import CustomButton, { BUTTON_TYPE } from "@/components/customButton/CustomButton";

import styles from './TripStep0.module.css';

export default function TripStep0({ accountUniqCode, nextCallback, backCallback }) {

    const { t } = useTranslation("common");
    const callApi = useApiCalls({ accountUniqCode });

    const { accountQuery } = useAppContext();

    const account = accountQuery?.data;
    const accountRefetch = accountQuery?.refetch;

    const [ subStep, setSubStep ] = useState(0);
    const [ formData, setFormData ] = useState({});

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

    useEffect(() => {
        updateFormData({ fieldName: 'tripName', fieldValue: account?.accounts_detail?.name });
        updateFormData({ fieldName: 'shortDescription', fieldValue: account?.accounts_detail?.small_description_one });
        updateFormData({ fieldName: 'description', fieldValue: account?.accounts_detail?.description });
    }, [ account ])

    const handleSubmitNamesForm = () => {
        const data = {
            account_name: formData?.tripName || '',
            small_description_one: formData?.shortDescription || '',
        }
        callApi({ action: 'saveAccountDetailsNames', urlParams: { accountUniqCode: accountUniqCode }, data })
            .then(response => {
                accountRefetch?.();
                setSubStep((prev) => prev + 1);
            })
    }

    const handleSubmitForm = () => {
        const data = {
            date_start: '2022-05-10',
            date_end: '2022-05-18',
            description: formData?.description || '',
        }
        callApi({ action: 'saveAccountDetailsOther', urlParams: { accountUniqCode: accountUniqCode }, data })
            .then(response => {
                accountRefetch?.();
                nextCallback?.();
            })
    }

    const handleSkipClick = () => {
        nextCallback?.();
    }

    return (
        <div className={styles.wrapper}>
            { subStep === 0 ?
                <>
                    <div className={styles.formSection}>
                        <SectionBodyTitle title={ t("account_details_form.main_title") }
                                          subTitle={ t("account_details_form.main_sub_title") } />

                        <div className={styles.form}>
                            <CustomTextField label={ t("account_details_form.trip_name_label") }
                                             onChange={(e)=> { updateFormData({ fieldName: 'tripName', fieldValue: e?.target?.value }) }}
                                             placeholder={ t("account_details_form.trip_name_label") }
                                             controlParams={{ value: formData?.tripName }} />
                            <CustomTextField label={ t("account_details_form.short_description_label") }
                                             onChange={(e)=> { updateFormData({ fieldName: 'shortDescription', fieldValue: e?.target?.value }) }}
                                             placeholder={ t("account_details_form.short_description_label") }
                                             controlParams={{ value: formData?.shortDescription }} />
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <div>
                            <div className={styles.buttonsWrapper}>
                                <CustomButton title={ t("account_details_form.next_button") }
                                              type={ BUTTON_TYPE.regularPink }
                                              onClick={ () => { handleSubmitNamesForm() } }
                                              className={ null } />
                            </div>
                        </div>
                    </div>
                </> : null
            }
            { subStep === 1 ?
                <>
                    <div className={styles.formSection}>
                        <SectionBodyTitle title={ t("account_details_form.additional_title") }
                                          subTitle={ t("account_details_form.additional_sub_title") } />

                        <div className={styles.form}>
                            <CustomTextField
                                label={ t("account_details_form.additional_dates_label") }
                                onChange={()=> {}}
                                placeholder={ t("account_details_form.additional_dates_label") } />
                            <CustomTextArea
                                label={ t("account_details_form.additional_description_label") }
                                onChange={(e)=> { updateFormData({ fieldName: 'description', fieldValue: e?.target?.value }) }}
                                placeholder={ t("account_details_form.additional_description_label") }
                                controlParams={{ value: formData?.description }} />
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <div>
                            <div className={styles.buttonsWrapper}>
                                <CustomButton title={ t("account_details_form.back_button") }
                                              type={ BUTTON_TYPE.transparent }
                                              onClick={ () => { setSubStep((prev) => prev - 1) } }
                                              className={ null } />
                                <CustomButton title={ t("account_details_form.next_button") }
                                              type={ BUTTON_TYPE.regularPink }
                                              onClick={ handleSubmitForm }
                                              className={ null } />
                            </div>
                            <div className={styles.buttonSkipWrapper}>
                                <CustomButton title={ t("account_details_form.skip_button") }
                                              type={ BUTTON_TYPE.simpleLink }
                                              onClick={ handleSkipClick }
                                              className={ null } />
                            </div>
                        </div>
                    </div>
                </> : null
            }
        </div>
    )
}

