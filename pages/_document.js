import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import loader from "../src/components/splashLoader/Loader";
import Logo from "@/components/logo/Logo";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <style>
                        { loader }
                    </style>
                </head>
                <body>
                    <Logo />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;