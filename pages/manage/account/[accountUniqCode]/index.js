import React from 'react';
import { useRouter } from "next/router";

import ManageAccount from "@/components/pages/manage/account/ManageAccount";

export default function ManageAccountPage() {
    const router = useRouter();
    const { accountUniqCode } = router.query;
    return (
        <ManageAccount accountUniqCode={accountUniqCode} />
    )
}