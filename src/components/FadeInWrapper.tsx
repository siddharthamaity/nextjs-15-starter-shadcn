'use client';

import type { ReactNode } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function FadeInWrapper({ children }: { children: ReactNode }) {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {children}
        </div>
    );
}
