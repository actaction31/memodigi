import React from 'react';

import Icon, { ICON_TYPES } from "@/components/icon/Icon";

import styles from './OptionsList.module.css';

export default function OptionsList({ config }) {
    return (
        <div className={styles.optionsList}>
            { config?.map((configOptionProps, index) => {
                return (
                    <Option key={index} {...configOptionProps} />
                )
            })}
        </div>
    )
}

function Option({ icon, name, rightIcon, onClick }) {
    let gridTemplate = `${icon ? '38px' : ''} auto ${rightIcon ? '16px' : ''}`;
    return (
        <div className={styles.optionWrapper} style={{ gridTemplateColumns: gridTemplate }} onClick={ onClick } >
            { icon }
            <div className={styles.optionName}>{ name }</div>
            { rightIcon ?
                <Icon type={ ICON_TYPES.link } />
                : null
            }
        </div>
    )
}