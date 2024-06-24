import { useEffect, useState, Fragment } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const ImageLightbox = ({
    lightBoxData,
    currentIndex,
    openLightBox,
    handleClose,
}) => {
    useEffect(() => {
        setCurrentIndex(currentIndex);
    }, [currentIndex]);
    const [currentImageIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () =>
        setCurrentIndex(
            (currentImageIndex + lightBoxData.length - 1) % lightBoxData.length
        );

    const gotoNext = () =>
        setCurrentIndex((currentImageIndex + 1) % lightBoxData.length);
    const handleCloseLightBox = () => {
        handleClose();
    };
    return (
        <Fragment>
            {openLightBox && (
                <Lightbox
                    onImageLoad={() => {
                        window.dispatchEvent(new Event("resize"));
                    }}
                    mainSrc={lightBoxData[currentImageIndex]}
                    nextSrc={
                        lightBoxData[
                            (currentImageIndex + 1) % lightBoxData.length
                        ]
                    }
                    prevSrc={
                        lightBoxData[
                            (currentImageIndex + lightBoxData.length - 1) %
                                lightBoxData.length
                        ]
                    }
                    onCloseRequest={handleCloseLightBox}
                    onMovePrevRequest={gotoPrevious}
                    onMoveNextRequest={gotoNext}
                />
            )}
        </Fragment>
    );
};
export default ImageLightbox;
