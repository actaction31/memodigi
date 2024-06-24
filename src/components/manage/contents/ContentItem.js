import React, { useState } from 'react';
import Image from "next/image";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './ContentItem.module.css';

export default function ContentItem({ accountUniqCode,
                                      contentItem,
                                      callBack = () => {},
                                      selectedItem,
                                      setSelectedItem = () => {} }) {

    const [ isLoading, setIsLoading ] = useState(false);

    if (!contentItem) {
        return null;
    }

    // debugger

    const deleteContent = () => {
        if (confirm(`Are sure you want to delete this ${contentItem?.itemData?.content_type}?`)) {
            setIsLoading(true);
            callApiAction({ action: 'deleteContent', urlParams: { accountUniqCode, contentId: contentItem?.itemData?.id } }).then(response => {
                callBack?.();
            }).catch(error => {
                console.log('error', error);
                alert(error?.response?.data?.message || error?.message || "Something went wrong. Please try again");
            }).finally(() => {
                setIsLoading(false);
            })
        }
    }

    return (
        <div className={`${styles.contentWrapper} ${selectedItem?.itemData?.id === contentItem?.itemData?.id && styles.selectedItem}`}
             onClick={() => { setSelectedItem(contentItem) }}>
            { isLoading ? <span className={styles.loader} /> : null }
            <div className={styles.content}>
                {/*<Image src={contentItem.original} alt={""} className={styles.image} fill />*/}
                <img src={contentItem?.thumbnail} alt={""} className={styles.image} />
                <div onClick={() => { deleteContent() }} className={styles.deleteButton} >
                    <FontAwesomeIcon icon={Icons.faClose} className={styles.deleteIcon}/>
                </div>
            </div>
        </div>
    )
}