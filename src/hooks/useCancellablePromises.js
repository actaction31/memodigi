import React, { useRef } from "react";

export const delay = n => new Promise(resolve => setTimeout(resolve, n));

export const cancellablePromise = promise => {
    let isCanceled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            value => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
            error => reject({ isCanceled, error }),
        );
    });
    return {
        promise: wrappedPromise,
        cancel: () => (isCanceled = true),
    };
};

export function useCancellablePromises() {
    const pendingPromises = useRef([]);
    const appendPendingPromise = promise =>
        pendingPromises.current = [...pendingPromises.current, promise];
    const removePendingPromise = promise =>
        pendingPromises.current = pendingPromises.current.filter(p => p !== promise);
    const clearPendingPromises = () => pendingPromises.current.map(p => p.cancel());
    return {
        appendPendingPromise,
        removePendingPromise,
        clearPendingPromises,
    };
};
