import React from 'react';
import { Offcanvas } from "react-bootstrap";

import styles from './OffcanvasView.module.css';

export const OFFCANVAS_ITEM_TYPES = {
    link:       'link',
    delimiter:  'delimiter',
    groupTitle: 'groupTitle',
    custom:     'custom',
}

export default function OffcanvasView({ isShow, setIsShow, config }) {
    return(
        <Offcanvas show={isShow} onHide={() => { setIsShow(false) }} placement={'end'} className={styles.wrapper}>
            <Offcanvas.Header closeButton closeVariant={'white'}>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offcanvasBody}>
                <ul>
                    { config?.map((configItem, index) => {
                        switch (configItem.type) {
                            case OFFCANVAS_ITEM_TYPES.link:
                                return (
                                    <li key={index} onClick={ configItem?.onCLick }>
                                        <span>
                                            { configItem?.icon }
                                        </span>
                                        <span>{ configItem?.title }</span>
                                    </li>
                                )
                            case OFFCANVAS_ITEM_TYPES.delimiter:
                                return (
                                    <li key={index} className={styles.delim} />
                                )
                            case OFFCANVAS_ITEM_TYPES.groupTitle:
                                return (
                                    <li key={index} className={styles.groupTitle}>
                                        <span>{ configItem?.title }</span>
                                    </li>
                                )
                            case OFFCANVAS_ITEM_TYPES.custom:
                                return (
                                    <li key={index} className={styles.custom}>
                                        { configItem?.domElement }
                                    </li>
                                )
                        }
                    })}
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    )
}