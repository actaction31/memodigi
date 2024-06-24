import React from 'react';
import { classes } from "@/helpers";

import styles from './AlbumBackground.module.css';

export default function AlbumBackground({ account, children, className, ...props }) {

    const template = account?.active_template?.template;

    const portraitImage =  template?.albumCoverPortraitImage  || account?.city?.image || '_/cities/prs/prs.png';
    const landscapeImage = template?.albumCoverLandscapeImage || account?.city?.image || '_/cities/prs/prs.png';

    return (
        <>
            <style jsx>
                { `
                    .background {
                        background-image: url('${portraitImage || landscapeImage}');
                    }
                    
                    @media (orientation: portrait) {
                        .background {
                            background-image: url('${portraitImage || landscapeImage}');
                        }
                    }
                    
                    @media (orientation: landscape) {
                        .background {
                            background-image: url('${landscapeImage || portraitImage}');
                        }
                    }
                ` }
            </style>
            <div className={ classes("background", className) } { ...props }>
                { children }
            </div>
        </>
    );
}
