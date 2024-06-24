import React from 'react';
import { useRouter } from "next/router";

import UploadPreview from "@/components/pages/manage/account/uploadPreview/UploadPreview";

export default function UploadPreviewPage() {
    const router = useRouter();
    const { accountUniqCode } = router.query;
    return (
        <UploadPreview accountUniqCode={accountUniqCode} />
    )
}