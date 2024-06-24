import Router from "next/router";
import { deleteAuthToken, getAuthToken, prepareUrl } from "@/helpers";
import { LOGIN_PATH, RESPONSE_OK } from "@/constants";
import axios from "axios";

const CONTENT_TYPES = {
    json: 'application/json',
    form: 'application/x-www-form-urlencoded',
    formData: 'multipart/form-data',
}

export const API_CALLS = {
    validateToken:          { method: 'GET',    url: 'validate-token/{accountUniqCode}' },
    accountLogin:           { method: 'POST',   url: 'account-edit/login/{accountUniqCode}' },

    login:                  { method: 'POST',   url: 'login', public: true },
    activateAccount:        { method: 'POST',   url: 'account/activate/{accountUniqCode}/{key}', public: true },
    setAccountPassword:     { method: 'POST',   url: 'account/set-password/{accountUniqCode}' },

    accountView:            { method: 'GET',    url: 'account-view/{accountUniqCode}', public: true },
    contentView:            { method: 'GET',    url: 'content-item/{contentUniqCode}', public: true },

    saveContent:            { method: 'POST',   url: 'account-content/save/{accountUniqCode}', paramsContentType: CONTENT_TYPES.formData },
    deleteContent:          { method: 'POST',   url: 'account-content/delete/{accountUniqCode}/{contentId}', paramsContentType: CONTENT_TYPES.formData },

    createContent:          { method: 'POST',   url: 'account-content/create/{accountUniqCode}', paramsContentType: CONTENT_TYPES.formData },
    createContentStatus:    { method: 'GET',    url: 'account-content/create-status/{accountUniqCode}' },

    saveAccountDetailsNames: { method: 'POST',   url: 'account-edit/update-details-names/{accountUniqCode}', queryParams: true },
    saveAccountDetailsOther: { method: 'POST',   url: 'account-edit/update-details-other/{accountUniqCode}', queryParams: true },
}

export function callApiAction({
    action,
    data = {},
    urlParams = {},
    withResponseStatus = true,
    returnFirstResponse = false,
    replaceAuthToken,
    setProgress
}) {

    const apiCallAction = API_CALLS[action];

    const authToken = replaceAuthToken || getAuthToken();

    // if (!authToken && !apiCallAction.public) {
    //     console.log(`Empty authToken for action: ${action}`);
    //     throw "Empty authToken for action: ${action}";
    //     return new Promise((resolve, reject) => {
    //         resolve([])
    //     });
    // }
    let callConfig = {
        method: apiCallAction.method,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };
    if (!apiCallAction.public || replaceAuthToken) {
        callConfig = {
            ...callConfig,
            headers: {
                Authorization: authToken
            }
        }
    }
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(apiCallAction.method)) {
        let requestParams = null;
        // if (apiCallAction.paramsContentType === CONTENT_TYPES.form && data) {
        //     requestParams = new URLSearchParams();
        //     Object.keys(data).forEach(paramKey => {
        //         requestParams.append(paramKey, data[paramKey]);
        //     })
        // }
        if (apiCallAction.paramsContentType === CONTENT_TYPES.formData && data) {
            requestParams = data;
        }
        if ((!apiCallAction.paramsContentType || apiCallAction.paramsContentType === CONTENT_TYPES.json) && data) {
            requestParams = JSON.stringify(data);
        }
        callConfig = {
            ...callConfig,
            headers: {
                'Content-Type': apiCallAction.paramsContentType || CONTENT_TYPES.json,
                ...callConfig.headers
            },
            body: requestParams
        }
    }

    const url = `/${process.env.apiSlug}/${apiCallAction.url}`;

    const axiosConfig = {
        method: apiCallAction.method,
        url: prepareUrl({ urlTemplate: url, urlParams, data, queryParams: apiCallAction.queryParams }),
        data: callConfig.body,
        headers: callConfig.headers
    }

    if(setProgress){
        axiosConfig.onUploadProgress = (data) => {
            setProgress(Math.round((100 * data.loaded) / data.total));
        }
    }

    return axios(axiosConfig).catch(async error => {
            if ([401, 403].includes(error.response?.status)) {
                console.log('Auth exception');
                deleteAuthToken();
                await Router.push(LOGIN_PATH);
            }
            throw error;
        })

    // return fetch( prepareUrl({ urlTemplate: url, urlParams, data, queryParams: apiCallAction.queryParams }), callConfig )
    //     .then(async (response) => {
    //         if (returnFirstResponse) {
    //             return response;
    //         }
    //         if ([401, 403].includes(response?.status)) {
    //             deleteAuthToken();
    //             await Router.push(LOGIN_PATH);
    //             return { status: response?.status, body: null };
    //         }
    //         const text = await response?.text();
    //         let body = text.length ? JSON.parse(text) : {};
    //         if (withResponseStatus) {
    //             return { status: response?.status, body };
    //         }
    //         return body;
    //     }).then((response) => {
    //         if (response.status !== RESPONSE_OK) {
    //             throw response;
    //         }
    //         return response.body;
    //     }).catch(error => {
    //         console.log('error', error);
    //         throw error;
    //     })
}