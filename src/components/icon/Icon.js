import React from 'react';
import { classes } from "@/helpers";

import styles from './Icon.module.css';

const ICONS_LIST = {
    menu:       { src: '/icons/icon-menu.svg',              width: 32,  height: 32,     className: null },
    volume:     { src: '/icons/icon-volume.svg',            width: 23,  height: 19,     className: null },
    back:       { src: '/icons/icon-back.svg',              width: 9,   height: 14,     className: null },
    hand:       { src: '/assets/hand.svg',                  width: 291, height: 212,    className: null },
    link:       { src: '/icons/icon-link.svg',              width: 16,  height: 16,     className: null },
    photo:      { src: '/icons/icon-photo.svg',             width: 24,  height: 24,     className: null },
    info:       { src: '/icons/icon-info.svg',              width: 24,  height: 24,     className: null },
    stars:      { src: '/icons/icon-stars.svg',             width: 24,  height: 24,     className: null },
    settings:   { src: '/icons/icon-settings.svg',          width: 24,  height: 24,     className: null },
    trash:      { src: '/icons/icon-trash.svg',             width: 16,  height: 18,     className: null },
    edit:       { src: '/icons/icon-edit.svg',              width: 20,  height: 20,     className: null },
    share:      { src: '/icons/icon-share.svg',             width: 24,  height: 20,     className: null },
    location:   { src: '/icons/icon-location.svg',          width: 24,  height: 24,     className: null },

    google:     { src: '/icons/ext-services/google.svg',    width: 36,  height: 36,     className: null },
    instagram:  { src: '/icons/ext-services/instagram.svg', width: 36,  height: 36,     className: null },
    facebook:   { src: '/icons/ext-services/facebook.svg',  width: 36,  height: 36,     className: null },

}

export const ICON_TYPES = Object.fromEntries(Object.keys(ICONS_LIST).map(icon_key => [icon_key, icon_key]));

export default function Icon({ type, src, width, height, className, alt, ...other }) {
    let iconData = ICONS_LIST[type] || { src, width, height, className };
    if (height) {
        iconData = { ...iconData, height };
    }
    if (width) {
        iconData = { ...iconData, width };
    }
    return (
        <img src={ iconData.src }
             height={ iconData.height} width={iconData.width }
             className={ classes(styles.icon, iconData.className, className) }
             alt={ alt }
             {...other} />
    )
}