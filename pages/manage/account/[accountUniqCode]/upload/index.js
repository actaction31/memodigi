import React from 'react';
import { useRouter } from "next/router";

import UploadContent from "@/components/pages/manage/account/upload/UploadContent";

export default function UploadContentPage() {
    const router = useRouter();
    const { accountUniqCode } = router.query;
    return (
        <UploadContent accountUniqCode={accountUniqCode} />
    )
}