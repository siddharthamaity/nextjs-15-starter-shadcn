'use client';

import { useState, useEffect } from 'react';

// Hook to get window size
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
