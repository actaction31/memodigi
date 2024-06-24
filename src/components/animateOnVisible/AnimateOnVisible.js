import React, { useRef, useEffect } from 'react';

const AnimateOnVisible = ({ children, animationDelay, animationDuration = '2.3s', defaultClassName, classToAdd='animate-on-visible' }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (animationDelay) {
                            entry.target.style['animation-delay'] = animationDelay;
                        }
                        if (animationDuration) {
                            entry.target.style['animation-duration'] = animationDuration;
                        }
                        entry.target.classList.add(classToAdd);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return <div ref={elementRef} className={defaultClassName}>{children}</div>;
};

export default AnimateOnVisible;