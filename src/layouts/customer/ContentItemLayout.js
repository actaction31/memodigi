import React, { useEffect } from 'react';
import { useBodyStyle } from "@/hooks/useBodyStyle";

import styles from './ContentItemLayout.module.css';

export default function ContentItemLayout({ children }) {

    const {} = useBodyStyle({ bodyStyle: 'content-item' });

    return (
        <div>
            { children }
        </div>
    )
}
