import React from 'react';
import { useRouter } from "next/router";

import AuthToManageAccount from "@/components/pages/manage/account/auth/AuthToManageAccount";
import EditContentLayout from "@/layouts/manager/EditContentLayout";

import styles from "@/components/pages/manage/account/upload/UploadContent.module.css";

export default function AuthToManageAccountPage() {
    const router = useRouter();
    const { accountUniqCode } = router.query;
    return (
        <EditContentLayout accountUniqCode={ accountUniqCode } className={styles.wrapper} isPublic>
            <AuthToManageAccount accountUniqCode={accountUniqCode} />
        </EditContentLayout>
    )
}