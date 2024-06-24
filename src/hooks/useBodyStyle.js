import React, { useEffect } from 'react';

export function useBodyStyle({ bodyStyle }) {
    useEffect(() => {
        document.body.classList.add(bodyStyle);
        return () => {
            document.body.classList.remove(bodyStyle);
        };
    }, []);
    return {};
}