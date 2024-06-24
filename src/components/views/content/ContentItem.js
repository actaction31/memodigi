import React, { useState } from 'react';
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";

import Link from "next/link";

import dynamic from "next/dynamic";

import {MANAGE_CONTENT_PATH, USER_CONTENT_TYPES, VIEW_CONTENT_PATH} from "@/constants";

import styles from './ContentItem.module.css';
import {classes, getContentPath} from "@/helpers";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import SlideLayout from "@/layouts/customer/SlideLayout";
import Lightbox from "yet-another-react-lightbox";

export default function ContentItem({ contentUniqCode }) {

    const [ isOpenGallery, setIsOpenGallery ] = useState(false);

    const contentQuery = useQuery({
        queryKey: ["contentView", contentUniqCode],
        queryFn: () => {
            return callApiAction({ action: 'contentView', urlParams: { contentUniqCode: contentUniqCode } }).then(response => {
                return getContentData(response.data);
            })
        },
        staleTime: 60 * 1000,
        retry: 0,
        enabled: !!contentUniqCode,
    });

    function getContentData(content) {
        if (!content) {
            return null;
        }
        switch (content.content_type) {
            case USER_CONTENT_TYPES.photo:
                return {
                    src: getContentPath({contentHash: content.uniq_hash, type: 'thumbnail/1024'}),
                    title: "Slide title",
                    description: "Slide description",
                    width: content.width,
                    height: content.height,
                    original: content,
                }
            case USER_CONTENT_TYPES.video:
                return {
                    type: "video",
                    width: content.width,
                    height: content.height,
                    src: getContentPath({contentHash: content.uniq_hash, type: 'thumbnail/1024'}),
                    poster: getContentPath({contentHash: content.uniq_hash, type: 'thumbnail/1024'}),
                    sources: [
                        {
                            src: getContentPath({contentHash: content.uniq_hash, type: 'original'}),
                            type: "video/mp4"
                        }
                    ],
                    title: "Slide title",
                    loop: true,
                    description: "Slide description",
                    original: content,
                }
        }
    }

    const content = contentQuery?.data;
    const contentOriginal = contentQuery?.data?.original;
    const account = content?.original?.account;

    return (
        <div className={styles.wrapper}>
            <Lightbox
                open={ isOpenGallery }
                close={ () => setIsOpenGallery(false) }
                slides={ content ? [content] : [] }
                //styles={{ container: lightBoxStyles }}
                controller={{ focus: false }}
                plugins={[ Video, Zoom, Captions ]} //{[ Video, Fullscreen, Zoom, Captions ]}
                animation={{ fade: 200, swipe: 1000, zoom: 1000 }}
                toolbar={{ buttons: ['close'] }}
                render={{
                    buttonNext: () => {},
                    buttonPrev: () => {},
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    // zoomInMultiplier,
                    // doubleTapDelay,
                    // doubleClickDelay,
                    // doubleClickMaxStops,
                    // keyboardMoveDistance,
                    // wheelZoomDistanceFactor,
                    // pinchZoomDistanceFactor,
                    // scrollToZoom
                }}
            />
            <div className={styles.contentImage}>
                <img src={content?.src} onClick={() => setIsOpenGallery(true)} alt={''} />
            </div>
            <div className={styles.titleMap}>
                Memory location
            </div>
            <div className={styles.map}>
                <img src={"/placeholders/map.png"} alt={''} />
            </div>
            <div className={styles.info}>
                <div className={styles.cityName}>
                    { contentOriginal?.city?.name }, { contentOriginal?.city?.country }
                </div>
                <div className={styles.currentWeatherBlock}>
                    {/*<div className={styles.weatherTitle}>Current weather</div>*/}
                    <div className={styles.weather}>
                        <img src={"/placeholders/weather.png"} alt={''} />
                    </div>
                </div>
            </div>
            <div className={classes("whiteButton", styles.galleryLinkButton)}>
                <Link href={{ pathname: VIEW_CONTENT_PATH,
                              query: { accountUniqCode: account?.uniq_code } }}>
                    Go to Gallery
                </Link>
            </div>
        </div>
    )
}