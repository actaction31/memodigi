import React from 'react';
import { CustomTextField } from "@/helpers";
import { BUTTON_TYPE } from "@/components/customButton/CustomButton";

import CustomModal from "@/components/customModal/CustomModal";

import styles from './ViewAccessPopup.module.css';

export default function ViewAccessPopup({ isShow, setIsShow }) {
    if (!isShow) {
        return null;
    }
    const actions = {
        className: null,
        buttons: [
            {
                title: 'Submit',
                type: BUTTON_TYPE.regularPink,
                onClick: () => {},
            }
        ]
    }
    return (
        <CustomModal title={'Require access'}
                     message={'The account you are trying to access require entering the view code.'}
                     actions={ actions } >
            <div>
                <CustomTextField label={'View code'} onChange={()=> {}} />
            </div>
        </CustomModal>
    )
}