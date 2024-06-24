import React, { useState } from 'react';
import Router from "next/router";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import AlbumBackground from "@/components/albumBackground/AlbumBackground";
import CustomButton, { BUTTON_TYPE } from "@/components/customButton/CustomButton";
import OffcanvasView, {OFFCANVAS_ITEM_TYPES} from "@/components/offcanvases/offcanvasView/OffcanvasView";
import Icon, { ICON_TYPES } from "@/components/icon/Icon";

import { ALBUM_VIEW_PATH } from "@/constants";

import styles from "./AlbumCover.module.css";

export default function AlbumCover({ accountUniqCode }) {

    const { bgMusic, accountQuery } = useAppContext();

    const account = accountQuery?.data;
    const accountRefetch = accountQuery?.refetch;

    const template = account?.active_template?.template;

    const handlePlayClick = () => {
        bgMusic?.toggleMuted?.();
        Router.push({ pathname: ALBUM_VIEW_PATH, query: { accountUniqCode } })
    }

    return (
        <>
            <AlbumBackground className={styles.wrapper} account={ account }>
                <div className={styles.wrapperOpacity} />
                <div className={styles.topText}>
                    <div className={styles.logo}>
                        <img src={"/logo/logo.png"} alt={""} />
                    </div>
                    <div className={styles.albumCoverName} style={ template?.css?.albumCover?.slogan }>
                        { account?.accounts_detail?.name }
                    </div>
                </div>
                <div className={styles.middleText}>

                </div>
                <div className={styles.bottomBlock}>
                    <div className={styles.welcomeTextBlock}>
                        <span className={styles.albumCoverSmallDesc}>
                            { account?.accounts_detail?.small_description_one }
                        </span>
                        <span className={styles.albumCoverMidDesc}>
                            { account?.accounts_detail?.small_description_two }
                        </span>
                    </div>
                    <CustomButton type={ BUTTON_TYPE.pinkJustPlay }
                                  onClick={ handlePlayClick } />
                </div>
            </AlbumBackground>
        </>
    )
}