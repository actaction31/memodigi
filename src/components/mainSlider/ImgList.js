import React from "react";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImgList = ({ thumbnailData, handleClick }) => {
    return (
        <Grid
            display={ "flex" }
            flexDirection={ "row" }
            justifyContent={ "flex-start" }
            flexWrap={ "wrap" }
        >
            { thumbnailData.map((item, index) => {
                return (
                    <div key={ index } style={ { padding: "3px" } }>
                        <LazyLoadImage
                            onClick={ () => handleClick(index) }
                            width={ 100 }
                            height={ 100 }
                            alt="image"
                            effect="blur"
                            style={ { cursor: 'pointer' } }
                            src={ item }
                        />
                    </div>
                );
            }) }
        </Grid>
    );
};

export default ImgList;
