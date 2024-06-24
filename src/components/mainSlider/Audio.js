import React, { Fragment, useState } from "react";
import { QueueMusicOutlined, CancelOutlined } from "@mui/icons-material";
import LazyLoadImg from "./LazyLoadImg";

const Audio = ({
                   originalUrl,
                   id,
                   handlePlay,
                   placeholderImage,
                   handleClick,
                   isActive,
                   isNext,
                   scaleValue,
                   defaultScaleValue,
                   isMobileHorizontalMode
               }) => {
    const [ playStatus, setPlayStatus ] = useState(true);
    const handlePlayClick = (id) => () => {
        let Dom = document.getElementById(id);
        handlePlay(id);
        setPlayStatus(Dom.paused);
    };
    const onPlayOnEnded = () => {
        setPlayStatus(true);
    };
    return (
        <Fragment>
            <LazyLoadImg
                alt="img"
                src={ placeholderImage }
                handleClick={ handleClick }
                isActive={ isActive }
                isNext={ isNext }
                scaleValue={ scaleValue }
                defaultScaleValue={ defaultScaleValue }
                isMobileHorizontalMode={ isMobileHorizontalMode }
            />
            <audio id={ id } onEnded={ onPlayOnEnded }>
                <source src={ originalUrl } type="audio/mpeg"/>
            </audio>
            { playStatus ? (
                <QueueMusicOutlined
                    className="audio-play-icon"
                    onClick={ handlePlayClick(id) }
                />
            ) : (
                <CancelOutlined
                    className="audio-play-icon"
                    onClick={ handlePlayClick(id) }
                />
            ) }
        </Fragment>
    );
};
export default Audio;
