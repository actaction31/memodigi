import React from 'react';
import Head from 'next/head'

import FAQ from "@/components/docs/Faq";

export default function FAQPage() {

    return (
        <div>
            <Head>
                <title>Memodigi - FAQ</title>
                <meta name="description" content="Memodigi - FAQ" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/logo/icon4x3.png" />
            </Head>
            <FAQ />
        </div>
    )
}
