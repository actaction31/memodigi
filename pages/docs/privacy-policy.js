import React from 'react';
import Head from 'next/head'

import PrivacyPolicy from "@/components/docs/PrivacyPolicy";

export default function PrivacyPolicyPage() {

    return (
        <div>
            <Head>
                <title>Memodigi - Privacy Policy</title>
                <meta name="description" content="Memodigi - Privacy Policy" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/logo/icon4x3.png" />
            </Head>
            <PrivacyPolicy />
        </div>
    )
}
