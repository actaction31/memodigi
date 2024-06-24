import React, { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel'

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import useScreenOrientation from "@/hooks/useScreenOrientation";
import Slide from "@/components/slidesCarousel/Slide";

import styles from './SlidesCarousel.module.css';

const getSlideItem = ({ item, index, onClick }) => {
    return ({
        id: item?.id,
        renderItem: (
            <Slide data={ item } textOnTop={ !(index % 2) } onClick={ onClick } />
        )
    })
}

const lightBoxStyles = {
    backgroundColor: '#262626',
}

export default function SlidesCarousel({ items }) {

    const slideshowRef = React.useRef(null);

    const [ selectedSlideIndex, setSelectedSlideIndex ] = useState(-1);

    const screenOrientation = useScreenOrientation();

    let params = {
        //slideAmount: 352,
        withLoop: true,
        items: items?.map((item, index) =>
            getSlideItem({ item, index, onClick: () => { setSelectedSlideIndex(index) } })) || [{ index: 0 }],
    };
    if (screenOrientation === 'landscape-primary' || screenOrientation === 'landscape-secondary') {
        params = {
            ...params,
            gutter: 5,

            slideType: 'fluid',

            springConfig: {
                // tension: 3,
                // friction: 1,
                // frequency: 3,
                // velocity: 0.1,
                // duration: 3,

                mass: 2,
                tension: 200,
                friction: 150,
            }
        }
    }

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel(params);

    useEffect(() => {
        const timer = setInterval(() => {
            slideToNextItem();
        }, 5000);
        return () => {
            window.clearInterval(timer);
        };
        // You MUST add the slide methods to the dependency list useEffect!
    }, [slideToNextItem]);

    const renderLightBox = () => {
        if (!items?.length) {
            return null;
        }
        return (
            <Lightbox
                open={ selectedSlideIndex > -1 }
                close={ () => setSelectedSlideIndex(-1) }
                index={ selectedSlideIndex }
                fullscreen={ false }
                slides={ items }
                slideshow={ { ref: slideshowRef, autoplay: true, delay: 4000 } }
                styles={{ container: lightBoxStyles }}
                controller={{ focus: false }}
                carousel={{ padding: '0px' }}
                plugins={[ Video, Zoom, Fullscreen ]} //{[ Video, Fullscreen, Zoom, Captions ]}
                animation={{ fade: 1200, swipe: 5000, zoom: 1000 }}
                toolbar={{ buttons: ['close'] }}
                on={{
                    view: (index) => { setSelectedSlideIndex(index) },
                }}
                render={{
                    buttonFullscreen: () => { return (<></>) },
                    // buttonZoomIn: () => {},
                    // buttonZoomOut: () => {
                    //     return (
                    //         <SlideLayout accountData={ data }
                    //                      slide={ items?.[selectedSlideIndex] }
                    //                      showSlideDetails={ showSlideDetails }
                    //                      setShowSlideDetails={ setShowSlideDetails }
                    //                      onFullAlbumClick={() => { setSelectedSlideIndex(-1) }}>
                    //         </SlideLayout>
                    //     )
                    // },
                    // buttonClose: () => {
                    //     return (
                    //         <div className={styles.testButton} onClick={(e) => {  console.log('button click'); }}>
                    //             <span className={styles.testButtonButton}>Full Album</span>
                    //         </div>
                    //     )
                    // }
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

    return (
        <div className={styles.wrapper}>
            { renderLightBox() }
            {/*<button onClick={slideToPrevItem}>Prev item</button>*/}
            { carouselFragment }
            {/*<button onClick={slideToNextItem}>Next item</button>*/}
        </div>
    );
}