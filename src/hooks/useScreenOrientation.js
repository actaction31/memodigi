import React, { useState, useEffect } from 'react';

function getOrientation() {
    if (typeof window === "undefined") {
        return null;
    }
    let _window$screen, _window$screen$orient;
    return (_window$screen = window.screen) === null || _window$screen === void 0 ? void 0 :
        (_window$screen$orient = _window$screen.orientation) === null || _window$screen$orient === void 0 ? void 0 :
            _window$screen$orient.type;
}

export default function useScreenOrientation() {
    const [orientation, setOrientation] = useState(getOrientation());

    const updateOrientation = event => {
        setOrientation(getOrientation());
    };

    useEffect(() => {
        window.addEventListener('orientationchange', updateOrientation);
        return () => {
            window.removeEventListener('orientationchange', updateOrientation);
        };
    }, []);
    return orientation;
}
