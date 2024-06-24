import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import { handleLoadingComplete } from "@/helpers/loader";
import { AppWrapper } from "@/src/contexts/ApplicationContext";
import { useRouter } from "next/router";

// import loader from "../src/components/splashLoader/loader";

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "flag-icons/css/flag-icons.min.css";
import '../styles/globals.css'

const queryClient = new QueryClient();

ReactGA.initialize("G-X8391HTZ4L");

function App({ Component, pageProps }) {

    const { push, locale, asPath } = useRouter();

    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');

        if (storedLocale && storedLocale !== locale) {
            push(asPath, asPath, { locale: storedLocale });
        }
    }, []);

    if (typeof window !== 'undefined') {
        handleLoadingComplete();
    }

    return (
        <QueryClientProvider client={ queryClient }>
            <AppWrapper>
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </AppWrapper>
        </QueryClientProvider>
    )
}

export default App;
