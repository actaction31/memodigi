import React from 'react';
import Head from 'next/head'

import CookiesPolicy from "@/components/docs/CookiesPolicy";

export default function CookiesPolicyPage() {

    return (
        <div>
            <Head>
                <title>Memodigi - Cookies Policy</title>
                <meta name="description" content="Memodigi - Cookies Policy" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/logo/icon4x3.png" />
            </Head>
            <CookiesPolicy />
        </div>
    )
}
