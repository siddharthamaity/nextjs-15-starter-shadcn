'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    triggerOnce?: boolean;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
    const { threshold = 0.1, triggerOnce = true } = options;
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    if (triggerOnce && ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, triggerOnce]);

    return { ref, isIntersecting };
}
