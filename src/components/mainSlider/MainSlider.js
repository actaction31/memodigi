import React, { Fragment, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Video from "./Video";
import Audio from "./Audio";
import LazyLoadImg from "./LazyLoadImg";
import LightBox from "./LightBox";
import ThumbnailList from "./ThumbnailList";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Zoom, EffectFade } from "swiper";

import styles from './MainSlider.module.css';

const MainSlider = ({
                        data,
                        volume,
                        movementSpeed,
                        slideDelay,
                        movementDirection,
                        scaleValue,
                        defaultScaleValue,
                    }) => {
    const swiperRef = useRef();
    const [ lightBoxData, setLightBoxData ] = useState([]);
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ openLightBox, setOpenLightBox ] = useState(false);
    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const [ isRendered, setIsRendered ] = useState(false);
    const [ isMobileHorizontalMode, setIsMobileHorizontalMode ] = useState(false);
    useEffect(() => {
        setIsRendered(true);
        if (data.length > 0) {
            let arr = [];
            // eslint-disable-next-line array-callback-return
            data.map((item) => {
                if (item.type === "photo") {
                    arr.push(item.originalUrl);
                } else {
                    arr.push(item.placeholderImage);
                }
            });
            setLightBoxData([ ...arr ]);
        }
    }, []);

    if (!isRendered) {
        return null;
    }

    const onInit = (Swiper) => {
        swiperRef.current = Swiper;
        if (Swiper.width < 760) {
            setIsMobileHorizontalMode(true)
        }
    };
    const handlePlay = (id) => {
        let dom = document.getElementById(id);
        dom.volume = volume;
        if (dom.paused) {
            dom.play();
        } else {
            dom.currentTime = 0;
            dom.load();
        }
    };
    const onClickImage = (index) => () => {
        setOpenLightBox(true);
        setCurrentIndex(index);
        if (swiperRef.current) swiperRef.current.autoplay.stop();
    };
    const handleClose = () => {
        setOpenLightBox(false);
        if (swiperRef.current) swiperRef.current.autoplay.start();
    };
    const handleDisplayFullScreen = (id) => () => {
        if (swiperRef.current) swiperRef.current.autoplay.stop();
        let dom = document.getElementById(id);
        if (dom.requestFullscreen) {
            dom.requestFullscreen();
        } else if (dom.webkitRequestFullscreen) {
            /* Safari */
            dom.webkitRequestFullscreen();
        } else if (dom.msRequestFullscreen) {
            /* IE11 */
            dom.msRequestFullscreen();
        }
    };
    const toggleDrawerHandler = () => {
        setDrawerOpen(!drawerOpen);
    };
    const handleSlideSwipedUp = (indexSlide) => () => {
        setCurrentIndex(indexSlide);
        setDrawerOpen(true);
    };
    const handleSlideMove = (index) => {
        setDrawerOpen(false);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index, 0, false);
            swiperRef.current.autoplay.start();
        }
    };
    return (
        <div className={styles.mainSliderWrapper}>
            <Swiper
                onInit={ onInit }
                modules={ [ Autoplay, Zoom ] }
                spaceBetween={ 30 }
                speed={ movementSpeed }
                allowTouchMove={ true }
                autoplay={ {
                    delay: slideDelay,
                    reverseDirection: movementDirection,
                } }
                breakpoints={ {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                } }
                loop={ true }
                onSwiper={ (swiper) => console.log(swiper) }
            >
                { data.map((item, index) => {
                    return (
                        <SwiperSlide key={ index }>
                            { ({ isNext, isActive, isPrev }) => (
                                <Swiper
                                    onSliderMove={ handleSlideSwipedUp(index) }
                                    effect="fade"
                                    modules={ [ EffectFade ] }
                                    loop={ true }
                                    direction={ "vertical" }
                                    className="vertical-slide"
                                    allowTouchMove={ true }
                                >
                                    <SwiperSlide>
                                        <div className="image_container">
                                            { index % 2 === 0 && (
                                                <div>
                                                    <p className="title">{ item.title }</p>
                                                    <p className="sub-title pb-2">{ item.subTitle }</p>
                                                </div>
                                            ) }
                                            { item.type === "photo" && (
                                                <LazyLoadImg
                                                    handleClick={ onClickImage(index) }
                                                    alt="img"
                                                    src={ item.originalUrl }
                                                    isActive={ isMobileHorizontalMode ? isPrev : isActive }
                                                    isNext={ isMobileHorizontalMode ? isActive : isNext }
                                                    scaleValue={ scaleValue }
                                                    defaultScaleValue={ defaultScaleValue }
                                                    isMobileHorizontalMode={ isMobileHorizontalMode }
                                                />
                                            ) }
                                            { item.type === "video" && (
                                                <div className="video-layout">
                                                    <Video
                                                        id={ item.id }
                                                        originalUrl={ item.originalUrl }
                                                        handlePlay={ handlePlay }
                                                        handleClick={ handleDisplayFullScreen(item.id) }
                                                        isActive={ isMobileHorizontalMode ? isActive : isNext }
                                                    />
                                                </div>
                                            ) }
                                            { item.type === "audio" && (
                                                <div className="audio-layout">
                                                    <Audio
                                                        placeholderImage={ item.placeholderImage }
                                                        id={ item.id }
                                                        originalUrl={ item.originalUrl }
                                                        handlePlay={ handlePlay }
                                                        handleClick={ onClickImage(index) }
                                                        isActive={ isMobileHorizontalMode ? isPrev : isActive }
                                                        isNext={ isMobileHorizontalMode ? isActive : isNext }
                                                        scaleValue={ scaleValue }
                                                        defaultScaleValue={ defaultScaleValue }
                                                        isMobileHorizontalMode={ isMobileHorizontalMode }
                                                    />
                                                </div>
                                            ) }
                                            { index % 2 === 1 && (
                                                <div>
                                                    <p className="title pt-2">{ item.title }</p>
                                                    <p className="sub-title">{ item.subTitle }</p>
                                                </div>
                                            ) }
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            ) }
                        </SwiperSlide>
                    );
                }) }
            </Swiper>
            <LightBox
                lightBoxData={ lightBoxData }
                currentIndex={ currentIndex }
                openLightBox={ openLightBox }
                handleClose={ handleClose }
            />
            <ThumbnailList
                drawerOpen={ drawerOpen }
                thumbnailData={ lightBoxData }
                toggleDrawerHandler={ toggleDrawerHandler }
                handleClick={ handleSlideMove }
            />
        </div>
    );
};

export default MainSlider;
