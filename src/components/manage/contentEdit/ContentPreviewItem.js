import React, { useEffect, useState } from 'react';
import { callApiAction } from "@/actions/apiActions";

import Icon, { ICON_TYPES } from "@/components/icon/Icon";

import styles from './ContentPreviewItem.module.css';

export default function ContentPreviewItem({
    contentItem,
    callBack = () => { },
    index,
    selectedItem,
    setSelectedItem = () => { } }
) {
    if (!contentItem) {
        return null;
    }
    // debugger
    const deleteContent = (index) => {
        if (confirm(`Are sure you want to delete this file?`)) {
            callBack(index);
        }
    }

    return (
        <div className={`${styles.contentWrapper} ${selectedItem === index && styles.selectedItem}`}
            onClick={() => { setSelectedItem(index) }}>
            <div className={styles.content}>
                <img src={URL.createObjectURL(contentItem.file)} alt={""} className={styles.image} style={{ position: 'relative' }} />
                {
                    !contentItem.progress &&
                    <div onClick={() => { deleteContent(index) }} className={styles.deleteButton} >
                        <Icon type={ICON_TYPES.trash} />
                    </div>
                }
                <div className={styles.progressbar}>
                    <span style={{ width: `${contentItem.progress}%` }}></span>
                </div>
            </div>
        </div>
    )
}