import React, {useEffect, useState} from 'react';
import { classes, formatDate, formatTime } from "@/helpers";

import styles from './SlideLayout.module.css';
import {useClickPreventionOnDoubleClick} from "@/hooks";
import Router from "next/router";
import {CONTENT_PATH, MANAGE_CONTENT_PATH} from "@/constants";
import Link from "next/link";

export default function SlideLayout({ children, slide, showSlideDetails, setShowSlideDetails, accountData, onFullAlbumClick }) {


    const [ showHelpInfo, setShowHelpInfo ] = useState(false);
    const [ isShowMenuIcons, setIsShowMenuIcons ] = useState(false);

    const [ screenClick, screenDoubleClick ] = useClickPreventionOnDoubleClick(handleScreenClick, handleScreenDoubleClick);

    const handleClickOnSlideScreen = (slideIndex) => {
        console.log('handleClickOnSlideScreen');
        setShowSlideDetails((prev) => !prev);
    }

    const handleMenuIconsClick = (e) => {
        e.stopPropagation();
        console.log('handleMenuIconsClick');
        setIsShowMenuIcons((prev) => !prev);
    }

    const isLandImage = () => {
        return false;
        if (!slide?.width || !slide?.height) {
            return false;
        }
        if (slide.width / slide.height > 1.2) {
            return true;
        }
    }

    // if (typeof window !== 'undefined') {
    //     const carusel = document.getElementsByClassName('yarl__carousel')?.[0];
    //
    //     if (carusel) {
    //         carusel.addEventListener('click', () => {
    //             handleClickOnSlideScreen();
    //         })
    //     }
    // }

    useEffect(() => {
        setShowHelpInfo(false);
        if (slide) {
            const timer = setTimeout(function() {
                setShowHelpInfo(true);
            }, 3000)
            return () => {
                clearTimeout(timer);
            };
        }
    }, [ slide, showSlideDetails ])

    function handleScreenClick() {
        console.log('handleScreenClick');
        handleClickOnSlideScreen();
    }

    function handleScreenDoubleClick() {
        console.log('handleScreenDoubleClick');
    }

    function handleRotateClick(e) {
        e.stopPropagation();
        console.log('handleRotateClick');
    }

    function handleLocationClick(e) {
        e.stopPropagation();
        console.log('handleLocationClick');
        Router.push({ pathname: CONTENT_PATH, query: { contentUniqCode: slide?.original?.uniq_hash }})
    }

    function handleWeatherClick(e) {
        e.stopPropagation();
        console.log('handleWeatherClick');
        Router.push({ pathname: CONTENT_PATH, query: { contentUniqCode: slide?.original?.uniq_hash }})
    }

    function handleInfoClick(e) {
        e.stopPropagation();
        console.log('handleInfoClick');
        Router.push({ pathname: CONTENT_PATH, query: { contentUniqCode: slide?.original?.uniq_hash }})
    }

    const handleFullAlbumClick = (e) => {
        e.stopPropagation();
        console.log('handleFullAlbumClick');
        onFullAlbumClick?.();
    }

    return (
        <>
            <div className={classes(styles.wrapper, styles.rotated)} onClick={() => { handleClickOnSlideScreen() }} onDoubleClick={ () => { } } >
                <div className={styles.topMenuIconMain} onClick={(e) => handleMenuIconsClick(e)}>
                    { isShowMenuIcons ?
                        <div className={styles.topMenuIcons}>
                            <ul>
                                <li>
                                    <Link href={{ pathname: MANAGE_CONTENT_PATH, query: { accountUniqCode: accountData?.uniq_code } }}>
                                        <img src={"/icons/edit-content-2.svg"} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        : null
                    }
                </div>
                { showSlideDetails ?
                    <>
                        {/*<div className={styles.overlay}/>*/}
                        {/*<div className={styles.detailsLogo} />*/}
                        <div className={styles.titleInfo}>
                            <div className={styles.date}>
                                { formatDate(slide?.original?.created_at) }
                            </div>
                            <div className={styles.location}>
                                { accountData?.city?.name }, { accountData?.city?.country }
                            </div>
                            <div className={styles.time}>
                                { formatTime(slide?.original?.created_at) }
                            </div>
                            <div className={styles.icons}>
                                <ul>
                                    { isLandImage() ?
                                        <li onClick={(e) => { handleRotateClick(e) }}>
                                            <span className={styles.rotateIcon} />
                                        </li>
                                        : null
                                    }
                                    <li onClick={(e) => { handleLocationClick(e) }}>
                                        <span className={styles.locationIcon} />
                                    </li>
                                    <li onClick={(e) => { handleWeatherClick(e) }}>
                                        <span className={styles.weatherIcon} />
                                    </li>
                                    <li onClick={(e) => { handleInfoClick(e) }}>
                                        <span className={styles.infoIcon} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                    : null
                }
                <div className={classes( styles.tapIconBlock,
                        (!showSlideDetails && showHelpInfo) ? null : styles.tapIconBlockHide)}>
                    <span className={styles.tapIcon} />
                    <span className={styles.tapIconText}>Tap to see details</span>
                </div>
                { showSlideDetails ?
                    <div className={styles.fullAlbum} onClick={(e) => { handleFullAlbumClick(e) }}>
                        <span className={styles.fullAlbumButton}>Full Album</span>
                    </div>
                    : null
                }
                {/*{ children }*/}

            </div>

        </>
    )
}