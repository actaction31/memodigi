import React, { useState } from 'react';
import Router from "next/router";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
import { ERROR_404 } from "@/constants";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import AlbumCover from "@/components/pages/account/albumCover/AlbumCover";
import dynamic from "next/dynamic";
const Contents = dynamic(() => import("@/components/views/account/contents/Contents"));
const EmptyContents = dynamic(() => import("@/components/views/account/contents/EmptyContents"));

import styles from './Account.module.css';

export default function Account({ accountUniqCode }) {

    const { accountQuery } = useAppContext();

    const account = accountQuery?.data;

    if (accountQuery?.isError) {
        if (accountQuery?.error?.response?.status === 404) {
            Router.push(ERROR_404);
        }
        return 'An error occurred'
    }

    if (!account) {
        return null;
    }

    const contentsCount = account?.contents?.length;

    return (
        <div>
            { contentsCount ?
                // <Contents data={contentsQuery?.data}/>
                <AlbumCover accountUniqCode={accountUniqCode} />
                :
                <EmptyContents accountUniqCode={accountUniqCode} />
            }
        </div>
    )
}