import React, {useEffect, useRef, useState} from 'react';
import { handleLoadingComplete } from "@/helpers/loader";

import ImageGallery from 'react-image-gallery';
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Video from "yet-another-react-lightbox/plugins/video";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import ReactPlayer from 'react-player'
// import LeftNav from "react-image-gallery/src/controls/LeftNav";
// import RightNav from "react-image-gallery/src/controls/RightNav";

import dynamic from "next/dynamic";
const CityInfo = dynamic(() => import("@/components/views/account/cityInfo/CityInfo"));

import {USER_CONTENT_TYPES, VIEW_CONTENT_PATH} from "@/constants";

import styles from './Contents.module.css';
import SlideLayout from "@/layouts/customer/SlideLayout";
import {classes, getContentPath} from "@/helpers";
import Link from "next/link";

const lightBoxStyles = {
    backgroundColor: '#262626',
}

export default function Contents({ data }) {

    const [ selectedSlideIndex, setSelectedSlideIndex ] = useState(-1);
    const [ showSlideDetails, setShowSlideDetails ] = useState(false);

    const imagesLightBox = data?.contents?.map(item => {
        switch(item.content_type) {
            case USER_CONTENT_TYPES.photo:
                return {
                    src: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/1024' }), // type: 'original'
                    thumbnail: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/1024' }),
                    title: "Slide title",
                    description: "Slide description",
                    width: item.width,
                    height: item.height,
                    original: item,
                }
            case USER_CONTENT_TYPES.video:
                return {
                    type: "video",
                    width: item.width,
                    height: item.height,
                    thumbnail: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/1024' }),
                    poster: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/1024' }),
                    sources: [
                        {
                            src: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                            type: item.file_type
                        }
                    ],
                    title: "Slide title",
                    loop: true,
                    description: "Slide description",
                    original: item,
                }
            case USER_CONTENT_TYPES.audio:
                return {
                    type: "video",
                    poster: '/placeholders/audio-2.png',
                    thumbnail: '/placeholders/audio.jpg',
                    title: "Slide title",
                    description: "Slide description",
                    width: 782,
                    height: 440,
                    original: item,
                    sources: [
                        {
                            src: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                            type: item.file_type
                        }
                    ],
                }
        }
    });

    useEffect(() => {
        if (data?.contents?.length) {
            setSelectedSlideIndex(0)
        }
    }, [ data ])

    const handleLogoClick = () => {
        console.log('handleLogoClick');
    }

    // if (typeof window !== 'undefined') {
    //     handleLoadingComplete();
    //     // const logo = document.getElementById('logo');
    //     //
    //     // logo.addEventListener('click', () => {
    //     //     handleLogoClick();
    //     //     galleryRef?.current?.exitFullScreen();
    //     // })
    // }

    const albumPhotos = imagesLightBox?.map(slide => {
        return {
            src: slide?.thumbnail,
            height: slide?.height,
            width: slide?.width,
        }
    })

    const renderLightBox = () => {
        if (!imagesLightBox?.length) {
            return null;
        }
        return (
            <Lightbox
                open={ selectedSlideIndex > -1 }
                close={ () => setSelectedSlideIndex(-1) }
                index={ selectedSlideIndex }
                fullscreen={ false }
                slides={ imagesLightBox }
                styles={{ container: lightBoxStyles }}
                controller={{ focus: false }}
                carousel={{ padding: '0px' }}
                plugins={[ Video, Zoom, Fullscreen ]} //{[ Video, Fullscreen, Zoom, Captions ]}
                animation={{ fade: 200, swipe: 1000, zoom: 1000 }}
                toolbar={{ buttons: [/*'close'*/] }}
                on={{
                    view: (index) => { setSelectedSlideIndex(index) },
                    click: (index) => { setShowSlideDetails((prev) => !prev) },
                }}
                render={{
                    buttonFullscreen: () => { return (<></>) },
                    buttonZoomIn: () => {},
                    buttonZoomOut: () => {
                        return (
                            <SlideLayout accountData={ data }
                                         slide={ imagesLightBox?.[selectedSlideIndex] }
                                         showSlideDetails={ showSlideDetails }
                                         setShowSlideDetails={ setShowSlideDetails }
                                         onFullAlbumClick={() => { setSelectedSlideIndex(-1) }}>
                            </SlideLayout>
                        )
                    },
                    buttonClose: () => {
                        return (
                            <div className={styles.testButton} onClick={(e) => {  console.log('button click'); }}>
                                <span className={styles.testButtonButton}>Full Album</span>
                            </div>
                        )
                    }
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
        )
    }

    const renderGalleryAndInfo = () => {
        return (
            <div className={styles.album}>
                <div className={styles.albumWithCity}>
                    <PhotoAlbum
                        layout="rows"
                        spacing={6}
                        photos={ albumPhotos }
                        targetRowHeight={ 200 }
                        onClick={({ index }) => setSelectedSlideIndex(index)}
                    />
                    <div className={styles.cityNameBlock}>
                        <span className={styles.cityName}>{ data?.city?.name }</span>
                        <span className={styles.countryName}>{ data?.city?.country }</span>
                    </div>
                </div>
                <div className={styles.info}>
                    { data ? <CityInfo contentData={ data } /> : null }
                </div>
                <div className={classes("whiteButton", styles.galleryLinkButton)}
                     onClick={() => { setSelectedSlideIndex(0) }}>
                     Back
                </div>
            </div>
        )
    }

    return (
        <div className={styles.content}>
            { selectedSlideIndex > -1 ? renderLightBox() : null }
            { selectedSlideIndex === -1 ? renderGalleryAndInfo() : null }
        </div>
    )
}