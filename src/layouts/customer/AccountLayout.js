import React, { useEffect, useState } from 'react';
import Router from "next/router";
import { useQuery } from "react-query";
import { classes, getAccountTemplate } from "@/helpers";
import { useAppContext } from "@/src/contexts/ApplicationContext";

import useApiCalls from "@/hooks/useApiCalls";
import Icon, { ICON_TYPES } from "@/components/icon/Icon";
import OffcanvasView, { OFFCANVAS_ITEM_TYPES } from "@/components/offcanvases/offcanvasView/OffcanvasView";
import ViewAccessPopup from "@/components/viewAccessPopup/ViewAccessPopup";
import OffCanvasLanguageSelector from "@/components/offCanvasLanguageSelector/OffCanvasLanguageSelector";
import useTranslation from "next-translate/useTranslation";
import BackgroundAudioPlayer from "@/components/backgroundAudioPlayer/BackgroundAudioPlayer";

import { ACCOUNT_SECRET_CODE_PATH, MANAGE_CONTENT_PATH, UPLOAD_CONTENT_PATH } from "@/constants";

import styles from './AccountLayout.module.css';

export default function AccountLayout({ accountUniqCode, children, className }) {

    const callApi = useApiCalls({ accountUniqCode });

    const { t } = useTranslation();

    const { bgMusic, setAccountUniqCodeValue, accountQuery } = useAppContext();
    const [ showOffcanvas, setShowOffcanvas ] = useState(false);
    const [ showRequireViewCodePopup, setShowRequireViewCodePopup ] = useState(false);

    useEffect(() => {
        setAccountUniqCodeValue(accountUniqCode);
    }, [ accountUniqCode ])

    const account = accountQuery?.data;
    const isFilledMetadata = !!account?.accounts_detail?.name;

    const offcanvasConfig = [
        { type: OFFCANVAS_ITEM_TYPES.link,  icon: <Icon type={ ICON_TYPES.info } />,     title: t('offcanvas:about_city', { cityName: account?.city?.name}),       onCLick: () => {} },
        { type: OFFCANVAS_ITEM_TYPES.delimiter },
        isFilledMetadata ? { type: OFFCANVAS_ITEM_TYPES.link,  icon: <Icon type={ ICON_TYPES.edit } />,     title: t('offcanvas:upload_content'),
            onCLick: () => {
                Router.push({ pathname: UPLOAD_CONTENT_PATH, query: { accountUniqCode } });
            }
        } : null,
        { type: OFFCANVAS_ITEM_TYPES.link,  icon: <Icon type={ ICON_TYPES.edit } />,     title: t('offcanvas:manage_content'),
            onCLick: () => {
                const routeDetails = account.activated_at ?
                    { pathname: MANAGE_CONTENT_PATH, query: { accountUniqCode } }
                    :
                    { pathname: ACCOUNT_SECRET_CODE_PATH, query: { accountUniqCode } }
                Router.push(routeDetails);
            }
        },
        { type: OFFCANVAS_ITEM_TYPES.link,  icon: <Icon type={ ICON_TYPES.share } />,    title: t('offcanvas:share_album'),       onCLick: () => {} },
        { type: OFFCANVAS_ITEM_TYPES.link,  icon: <Icon type={ ICON_TYPES.location } />, title: t('offcanvas:view_on_map'),       onCLick: () => {} },
        { type: OFFCANVAS_ITEM_TYPES.groupTitle, title: t('offcanvas:slideshow_settings') },
        {
            type: OFFCANVAS_ITEM_TYPES.link,
            icon: <Icon type={ ICON_TYPES.volume } onClick={ () => { bgMusic?.toggleMuted?.() } } className={ !bgMusic?.volume ? styles.mutedIcon : null } />,
            title: <input id="volume" type="range" min={0} max={1} step={0.1}
                          className={ !bgMusic?.volume ? styles.mutedIcon : null }
                          value={ bgMusic?.volume }
                          onChange={ (e) => { bgMusic?.handleVolumeChange(parseFloat(e.target.value)) } } />,
            onCLick: () => {}
        },
        { type: OFFCANVAS_ITEM_TYPES.custom, domElement: <OffCanvasLanguageSelector /> },
    ].filter(v => v)

    const template = getAccountTemplate({ accountTemplate: account?.active_template?.template });

    const renderStyles = () => {
        return null;
        // return (
        //     <style jsx global>
        //         {`
        //             :root {
        //                 --main-background: 'linear-gradient(135deg, rgba(7,64,71,1) 0%, rgba(81,53,57,1) 100%)'
        //             }
        //             // html {
        //             //   background: ${template?.html?.background};
        //             //   min-height: 100vh;
        //             // }
        //         `}
        //     </style>
        // )
    }

    return (
        <div className={classes(styles.wrapper, className)} style={ template?.accountLayout?.wrapper } >
            { renderStyles() }
            <BackgroundAudioPlayer url={"/bg-music/beyond-the-time-main-7425.mp3"} />
            <ViewAccessPopup isShow={ showRequireViewCodePopup }
                             setIsShow={ setShowRequireViewCodePopup } />
            <OffcanvasView isShow={showOffcanvas} setIsShow={setShowOffcanvas} config={offcanvasConfig} />
            <div className={styles.actions}>
                <div onClick={ () => {} }>
                    <Icon type={ ICON_TYPES.volume } onClick={ () => { bgMusic?.toggleMuted?.() } } className={ !bgMusic?.volume ? styles.mutedIcon : null } />
                </div>
                <div onClick={ () => { setShowOffcanvas((prev) => !prev) } }>
                    <Icon type={ ICON_TYPES.menu } />
                </div>
            </div>
            { children }
        </div>
    )
}
