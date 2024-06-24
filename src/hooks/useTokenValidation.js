import React, { useState, useEffect } from 'react';
import Router from "next/router";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import useApiCalls from "@/hooks/useApiCalls";

import { AUTH_TO_MANAGE_CONTENT_PATH } from "@/constants";

export default function useTokenValidation({ accountUniqCode, backRedirectPath }) {

    const callApi = useApiCalls({ accountUniqCode });

    const { setConfigContextItems } = useAppContext();
    const [ isTokenValid, setIsTokenValid ] = useState(false);

    useEffect(() => {
        if (accountUniqCode) {
            validateToken();
        }
    }, [ accountUniqCode ])

    function validateToken() {
        callApi({ action: 'validateToken', urlParams: { accountUniqCode } })
            .then(response => {
                setIsTokenValid(true);
            })
            .catch(error => {
                setIsTokenValid(false);
                console.log('Token not valid');
                if (backRedirectPath) {
                    setConfigContextItems({ redirectAfterLoginUri: backRedirectPath });
                }
                Router.push({ pathname: AUTH_TO_MANAGE_CONTENT_PATH, query: { accountUniqCode } })
            })
    }

    return {
        isTokenValid,
    }

}