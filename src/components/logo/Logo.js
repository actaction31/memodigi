import React, { useState } from 'react';

import styles from './Logo.module.css';

export default function Logo() {
    const [ isShowIcons, setIsShowIcons ] = useState(false);
    const handleLogoClick = (e) => {
        e.stopPropagation();
        setIsShowIcons((prev) => !prev);
    }
    return (
        <>
            <div id={"logo"} onClick={(e) => { handleLogoClick(e) }} className={styles.logo} />
            { isShowIcons ?
                <div className={styles.topIcons}>
                    <ul>
                        <li>
                            1
                        </li>
                    </ul>
                </div>
                : null
            }
            <div id={'globalLoader'}>
                <div className="loader" >
                    <div/>
                </div>
            </div>
        </>
    )
}