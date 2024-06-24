import React, { useState } from "react";
import Router from "next/router";
import { useQuery } from "react-query";
import { callApiAction } from "@/actions/apiActions";
import { getContentPath } from "@/helpers";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useAppContext } from "@/src/contexts/ApplicationContext";

// import MainSlider from "@/components/mainSlider/MainSlider";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

import { USER_CONTENT_TYPES, VIEW_CONTENT_PATH } from "@/constants";

import styles from "./AlbumView.module.css";

import { data } from "@/components/mainSlider/const";
import SlidesCarousel from "@/components/slidesCarousel/SlidesCarousel";

export default function AlbumView({ accountUniqCode }) {
    const volume = 0.8;
    const movementSpeed = 3000;
    const slideDelay = 4000;
    const movementDirection = false;
    const scaleValue = 1.5;
    const defaultScaleValue = 1;

    //const handle = useFullScreenHandle();

    const { bgMusic, accountQuery } = useAppContext();

    const account = accountQuery?.data;
    const accountRefetch = accountQuery?.refetch;

    const prevPageClick = () => {
        try {
            bgMusic?.muteBackgroundMusic?.();
        } catch (error) {
            console.error(error);
        }
        Router.push({ pathname: VIEW_CONTENT_PATH, query: { accountUniqCode } })
    }

    const items = account?.contents?.map((item, index) => {

        if (!item) {
            return null;
        }
        switch (item.content_type) {
            case USER_CONTENT_TYPES.photo:
                return {
                    // id: `item-${index}`,
                    // type: "photo",
                    // originalUrl: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/1024' }),
                    // originalWidth: item.width,
                    // originalHeight: item.height,
                    // thumbnails: {
                    //     60: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/60' }),
                    //     150: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/150' }),
                    //     300: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/300' }),
                    // },
                    // backgroundAudioDuration: 20,
                    // title: "Montmartre, Jan, 6, 2022",
                    // subTitle: "Slide description",
                    // original: item,

                    id: `item-${index}`,
                    type: "photo",
                    originalUrl: getContentPath({
                        contentHash: item.uniq_hash,
                        type: "thumbnail/1024",
                    }), // type: 'original'
                    originalWidth: item.width,
                    originalHeight: item.height,
                    thumbnail: getContentPath({
                        contentHash: item.uniq_hash,
                        type: "thumbnail/300",
                    }),
                    title: "Montmartre, Jan, 6, 2022",
                    subTitle: "Welcome to my trip memories about beautiful city I’ve visited",
                    original: item,
                };
            case USER_CONTENT_TYPES.video:
                return {
                    // id: `item-${index}`,
                    // type: "video",
                    // originalUrl: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                    // placeholderImage: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/300' }),
                    // originalWidth: item.width,
                    // originalHeight: item.height,
                    // thumbnails: {
                    //     60: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/60' }),
                    //     150: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/150' }),
                    //     300: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/300' }),
                    // },
                    // title: "Montmartre, Jan, 6, 2022",
                    // subTitle: "Slide description",
                    // original: item,

                    id: `item-${index}`,
                    type: "video",
                    width: item.width,
                    height: item.height,
                    thumbnail: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/300' }),
                    image: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/1024' }),
                    poster: getContentPath({ contentHash: item.uniq_hash, type: 'thumbnail/1024' }),
                    sources: [
                        {
                            src: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                            type: item.file_type
                        }
                    ],
                    title: "Slide title",
                    autoPlay: true,
                    loop: true,
                    description: "Slide description",
                    original: item,
                };
            case USER_CONTENT_TYPES.audio:
                return {
                    // id: `item-${index}`,
                    // type: "audio",
                    // originalUrl: getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                    // placeholderImage: "/placeholders/audio.jpg",
                    // duration: 25, // ???
                    // title: "Montmartre, Jan, 6, 2022",
                    // subTitle: "Slide description",
                    // original: item,

                    id: `item-${index}`,
                    type: "audio",
                    originalUrl:getContentPath({ contentHash: item.uniq_hash, type: 'original' }),
                    placeholderImage: "/placeholders/audio_background.jpg",
                    originalWidth: 1024,
                    originalHeight: 1024,
                    title: "Montmartre, Jan, 6, 2022",
                    subTitle: "Welcome to my trip memories about beautiful city I’ve visited",
                    original: item,
                };
        }
    });
    const getAlbumTitle = () => {
        return (
            <span className={styles.albumTitleWrapper}>
                <span className={styles.albumTitle}>
                    {  account?.accounts_detail?.small_description_one }
                </span>
                <span className={styles.albumDates}>
                    May 27 - May 30, 2022
                </span>
            </span>
        )
    }

    return (
        <div className={styles.wrapper}>
             <div className={styles.paddingWrapper}>
                <SectionTitle prevAction={ prevPageClick } title={ getAlbumTitle() } />
            </div>
            <div>
                <SlidesCarousel items={items} />

                {/*{ items?.length ?*/}
                {/*    <MainSlider*/}
                {/*        data={ items }*/}
                {/*        volume={volume}*/}
                {/*        movementSpeed={movementSpeed}*/}
                {/*        slideDelay={slideDelay}*/}
                {/*        movementDirection={movementDirection}*/}
                {/*        scaleValue={scaleValue}*/}
                {/*        defaultScaleValue={defaultScaleValue}*/}
                {/*    />*/}
                {/*    : null*/}
                {/*}*/}

            </div>
        </div>
    );
}
