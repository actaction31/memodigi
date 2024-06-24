import React from 'react';
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import AccountLayout from "@/layouts/customer/AccountLayout";
const Account = dynamic(() => import("@/components/views/account/Account"));

export default function AccountPage() {
    const router = useRouter();
    const { accountUniqCode } = router.query;
    return (
        <AccountLayout accountUniqCode={ accountUniqCode } >
            <Account accountUniqCode={ accountUniqCode } />
        </AccountLayout>
    )
}