import React from 'react';
import Router from "next/router";
import { callApiAction } from "@/actions/apiActions";
import { StatusCodes } from "http-status-codes";
import { deleteAuthToken } from "@/helpers";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import { AUTH_TO_MANAGE_CONTENT_PATH } from "@/constants";

export default function useApiCalls({ accountUniqCode }) {

    const { setConfigContextItems } = useAppContext();

    return (props) => {
        return callApiAction(props)
            .catch(error => {
                if ([ StatusCodes.UNAUTHORIZED, StatusCodes.FORBIDDEN ].includes(error?.status)) {
                    deleteAuthToken();
                    Router.push({ pathname: AUTH_TO_MANAGE_CONTENT_PATH, query: { accountUniqCode } })
                    setConfigContextItems({ isLoginPopupShow: true });
                } else {
                    throw error;
                }
            })
    }

}