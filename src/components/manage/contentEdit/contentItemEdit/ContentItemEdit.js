import React, { useState } from 'react';
import { capitalize, CustomDataPicker, CustomTextArea } from "@/helpers";

import styles from './ContentItemEdit.module.css';

export default function ContentItemEdit({ contentItem,
                                          callBack = () => {} }) {

    const [startDate, setStartDate] = useState(new Date());

    if (!contentItem) {
        return null;
    }

    // debugger
    return (
        <div className={styles.info}>
            <div className={styles.infoTitle}>
                Save your { capitalize(contentItem?.content_type) } memories
            </div>
            <div className={styles.contentItemData}>
                <div className={styles.formRow}>
                    <div className={styles.formRowLabel}>
                        When did you take this {contentItem?.content_type}?
                    </div>
                    <div className={styles.formRowLabel}>
                        <CustomDataPicker startDate={startDate}
                                          setStartDate={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formRowLabel}>
                        Please say more about this {contentItem?.content_type}
                    </div>
                    <div className={styles.formRowLabel}>
                        <CustomTextArea />
                    </div>
                </div>
            </div>
        </div>
    )
}