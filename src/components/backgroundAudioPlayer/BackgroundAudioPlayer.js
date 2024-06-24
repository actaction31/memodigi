import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useAppContext } from "@/src/contexts/ApplicationContext";

const BackgroundAudioPlayer = ({ url }) => {
    const playerRef = useRef(null);

    const [ isRendered, setIsRendered ] = useState(false);
    const { bgMusic } = useAppContext();

    useEffect(() => {
        setIsRendered(true);
        if (playerRef?.current) {
            playerRef?.current?.seekTo(0);
        }
    }, [])

    const startPlay = () => {
        playerRef?.current?.getInternalPlayer()?.play();
    }

    const pausePlay = () => {
        playerRef?.current?.getInternalPlayer()?.pause();
    }

    const handleError = (error) => {
        bgMusic?.muteBackgroundMusic?.();
    };

    useEffect(() => {
        if (bgMusic?.volume) {
            startPlay();
        }
        // } else {
        //     pausePlay();
        // }
    }, [ isRendered, playerRef?.current, bgMusic?.volume ]);

    return (isRendered && bgMusic?.volume) ? <ReactPlayer ref={ playerRef }
                                               url={ url }
                                               playing={ true }
                                               volume={ bgMusic?.volume }
                                               loop={ true }
                                               // onReady={ startPlay }
                                               width="0"
                                               height="0"
                                               // onError={ handleError }
                                               style={{ display: 'none' }} /> : null;
};

export default BackgroundAudioPlayer;