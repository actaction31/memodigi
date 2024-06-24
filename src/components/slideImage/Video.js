import { Fragment, useEffect } from "react";

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
    }, [isActive, id, vid]);
    return (
        <Fragment>
            <video id={id} onClick={handleClick}>
                <source src={originalUrl} type="video/mp4" />
            </video>
        </Fragment>
    );
};
export default Video;
