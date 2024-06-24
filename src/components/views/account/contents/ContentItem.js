import React, { useState } from 'react';
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";

import styles from './ContentItem.module.css';

export default function ContentItem({ contentItem }) {

    if (!contentItem?.s3_hash) {
        return null;
    }

    return (
        <img src={`/${process.env.apiSlug}/account-view/content/${contentItem.s3_hash}`} alt={""} className={styles.image} />
    )
}