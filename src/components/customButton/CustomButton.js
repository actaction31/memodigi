import React from 'react';
import { Button } from "react-bootstrap";
import { classes } from "@/helpers";

import styles from "./CustomButton.module.css";

export const BUTTON_TYPE = {
    regularPink:    'regularPink',
    pinkNext:       'pinkNext',
    pinkJustPlay:   'pinkJustPlay',
    transparent:    'transparent',
    simpleLink:     'simpleLink',
    custom:         'custom',
}

const BUTTON_CLASSNAMES = {
    [BUTTON_TYPE.regularPink]:  classes(styles.pinkButton),
    [BUTTON_TYPE.pinkNext]:     classes(styles.pinkButton, styles.pinkButtonWrapper, styles.pinkNext),
    [BUTTON_TYPE.pinkJustPlay]: classes(styles.pinkButton, styles.pinkButtonWrapper, styles.pinkJustPlay),
    [BUTTON_TYPE.transparent]:  classes(styles.transparentButton),
    [BUTTON_TYPE.simpleLink]:   classes(styles.simpleLinkButton),
    [BUTTON_TYPE.custom]:       '',
}

const getButtonTitle = ({ type, title }) => {
    switch (type) {
        case BUTTON_TYPE.pinkNext:
            return (
                <>
                    <span><img src={"/icons/icon-play.svg"} alt={""} /></span>
                    { title? <span>{ title }</span> : null }
                </>
            )
        case BUTTON_TYPE.pinkJustPlay:
            return (
                <span><img src={"/icons/icon-play.svg"} alt={""} /></span>
            )
        case BUTTON_TYPE.regularPink:
            return (
                <span>{ title }</span>
            )
    }
    return title;
}

export default function CustomButton({ type, title, className, ...props }) {
    return (
        <Button className={classes(BUTTON_CLASSNAMES[type], className)} {...props}>
            { getButtonTitle({ type, title }) }
        </Button>
    )
}