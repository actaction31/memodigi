import React from 'react';
import { callApiAction } from "@/actions/apiActions";

import Icon, { ICON_TYPES } from "@/components/icon/Icon";

import styles from './ContentItem.module.css';

export default function ContentItem({ accountUniqCode,
                                      contentItem,
                                      callBack = () => {},
                                      selectedItem,
                                      setSelectedItem = () => {} }) {

    if (!contentItem) {
        return null;
    }

    // debugger

    const deleteContent = () => {
        if (confirm(`Are sure you want to delete this ${contentItem?.itemData?.content_type}?`)) {
            callApiAction({ action: 'deleteContent', urlParams: { accountUniqCode, contentId: contentItem?.itemData?.id } }).then(response => {
                callBack?.();
            })
        }
    }

    return (
        <div className={`${styles.contentWrapper} ${selectedItem?.itemData?.id === contentItem?.itemData?.id && styles.selectedItem}`}
             onClick={() => { setSelectedItem(contentItem) }}>
            <div className={styles.content}>
                <img src={contentItem?.thumbnail} alt={""} className={styles.image} />
                <div onClick={() => { deleteContent() }} className={styles.deleteButton} >
                    <Icon type={ ICON_TYPES.trash } />
                </div>
            </div>
        </div>
    )
}