import React from 'react';
import { useRouter } from "next/router";

import ConnectExtAccount from "@/components/pages/connectExtAccount/ConnectExtAccount";

export default function ConnectExtAccountPage() {
    const router = useRouter();
    const { accountUniqCode } = router.query;
    return (
        <ConnectExtAccount accountUniqCode={ accountUniqCode } />
    )
}