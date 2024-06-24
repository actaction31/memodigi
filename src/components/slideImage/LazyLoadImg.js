import { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const LazyLoadImg = ({
    alt,
    src,
    handleClick,
    isActive,
    isNext,
    scaleValue,
    defaultScaleValue,
    isMobileHorizontalMode,
}) => {
    const styles = {
        transform: `scale(${
            isActive
                ? defaultScaleValue
                : isNext
                ? scaleValue
                : defaultScaleValue
        })`,
        transition: `3s`,
    };

    return (
        <Fragment>
            {isMobileHorizontalMode ? (
                <div
                    className="lazy-load-image-background"
                    style={{ width: "100%", height: "100%" }}
                >
                    <img
                        onClick={handleClick}
                        style={styles}
                        alt={alt}
                        src={src}
                        loading="lazy"
                    />
                </div>
            ) : (
                <LazyLoadImage
                    onClick={handleClick}
                    style={styles}
                    beforeLoad={() => console.log("beforeload")}
                    afterLoad={() => console.log("afterload")}
                    placeholderSrc={src}
                    width={"100%"}
                    height={"100%"}
                    alt={alt}
                    effect="blur"
                    src={src}
                />
            )}
        </Fragment>
    );
};
export default LazyLoadImg;
