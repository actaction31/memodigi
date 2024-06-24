import React, { Fragment, useEffect, useState } from "react";

const Video = ({ originalUrl, id, handlePlay, handleClick, isActive }) => {
    var vid = document.getElementById(id);
    useEffect(() => {
        if (isActive && id && vid) {
            setTimeout(() => {
                vid.muted = true;
                vid.currentTime = 0;
                vid.play();
            });
        }
    }, [ isActive, id, vid ]);
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
            <video id={ id } onEnded={ onPlayOnEnded } onClick={ handleClick }>
                <source src={ originalUrl } type="video/mp4"/>
            </video>
        </Fragment>
    );
};
export default Video;
