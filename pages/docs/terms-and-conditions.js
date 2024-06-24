import React from 'react';
import Head from 'next/head'

import TermsAndConditions from "@/components/docs/TermsAndConditions";

export default function TermsAndConditionsPage() {

    return (
        <div>
            <Head>
                <title>Memodigi - Terms And Conditions</title>
                <meta name="description" content="Memodigi - Terms And Conditions" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/logo/icon4x3.png" />
            </Head>
            <TermsAndConditions />
        </div>
    )
}
