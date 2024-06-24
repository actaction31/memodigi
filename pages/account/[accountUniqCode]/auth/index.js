import React from 'react';
import { useRouter } from "next/router";
import Auth from "@/components/pages/auth/Auth";

export default function AuthPage() {
    const router = useRouter();
    const { accountUniqCode } = router.query;

    return (
        <Auth accountUniqCode={ accountUniqCode } />
    )
}