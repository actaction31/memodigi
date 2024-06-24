import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { classes } from "@/helpers";

import styles from "./useAlert.module.css";

export const ALERT_MESSAGE_TYPES = {
    ERROR: 'Error',
    WARNING: 'Warning',
    SUCCESS: 'Success',
    INFO: 'Info'
}

const ALERT_TITLE_LOGOS = {
    [ALERT_MESSAGE_TYPES.ERROR]:    <span><span>Error</span></span> ,
    [ALERT_MESSAGE_TYPES.WARNING]:  <span><span>Warning</span></span> ,
    [ALERT_MESSAGE_TYPES.SUCCESS]:  <span><span>Success</span></span> ,
    [ALERT_MESSAGE_TYPES.INFO]:     <span><span>Info</span></span> ,
}

export function useAlert() {

    const [show, setShow] = useState(false);
    const [typeValue, setTypeValue] = useState(null);
    const [titleValue, setTitleValue] = useState(null);
    const [okButtonTitleValue, setOkButtonTitleValue] = useState('Ok');
    const [closeButtonTitleValue, setCloseButtonTitleValue] = useState('Close');
    const [messageValue, setMessageValue] = useState(null);
    const [closeCallbackValue, setCloseCallbackValue] = useState(null);
    const [okCallbackValue, setOkCallbackValue] = useState(null);

    const handleClose = () => {
        setShow(false);
    }

    const closeButtonClickHandle = () => {
        handleClose();
        closeCallbackValue?.();
    }

    const okButtonClickHandle = () => {
        handleClose();
        okCallbackValue?.();
    }

    const showMessage = ({ type, title, message, okButtonTitle, closeButtonTitle,
                             closeCallback = () => {}, okCallback }) => {
        setTypeValue(type);
        setTitleValue(title);
        setMessageValue(message);
        setCloseCallbackValue(() => () => { closeCallback() } );
        setOkCallbackValue(okCallback ? () => () => { okCallback?.() } : null);
        if (okButtonTitle) {
            setOkButtonTitleValue(okButtonTitle);
        }
        if (closeButtonTitle) {
            setCloseButtonTitleValue(closeButtonTitle);
        }
        setShow(true);
    }

    const messageData = (
        <>
            <Modal className={"messagePopup"} show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className={classes(styles.titleLogo, styles[`title-type-${typeValue}`])}>
                            { ALERT_TITLE_LOGOS[typeValue] }
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.title}>
                        { titleValue }
                    </div>
                    <div className={styles.message}>
                        { messageValue }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    { okCallbackValue ?
                        <Button variant="secondary" className={"buttonOk"} onClick={() => okButtonClickHandle()}>
                            { okButtonTitleValue }
                        </Button>
                        : null
                    }
                    <Button variant="secondary" className={"buttonClose"} onClick={() => closeButtonClickHandle()}>
                        { closeButtonTitleValue }
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

    return [
        showMessage,
        messageData,
    ]
}