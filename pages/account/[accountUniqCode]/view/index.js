import React from 'react';
import { useRouter } from "next/router";

import AccountLayout from "@/layouts/customer/AccountLayout";
import AlbumView from "@/components/pages/account/albumView/AlbumView";

export default function AccountPage() {
    const router = useRouter();
    const { accountUniqCode } = router.query;
    return (
        <AccountLayout accountUniqCode={ accountUniqCode } >
            <AlbumView accountUniqCode={ accountUniqCode } />
        </AccountLayout>
    )
}