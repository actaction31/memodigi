import React, { useEffect } from 'react';
import { useBodyStyle } from "@/hooks/useBodyStyle";

import styles from './CommonLayout.module.css';

export default function CommonLayout({ children }) {

    const {} = useBodyStyle({ bodyStyle: 'common-layout' });

    return (
        <div>
            <style jsx global>{`
                html {
                  background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(36.53deg, #025C66 -0.21%, #784C52 102.16%);
                }
            `}</style>
            { children }
        </div>
    )
}
