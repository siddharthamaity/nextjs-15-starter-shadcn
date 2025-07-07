'use client';

import { createContext, useContext, type ReactNode } from 'react';

import { useScrollPosition } from '@/hooks/useScrollPosition';

interface ScrollContextType {
    scrollY: number;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
    const scrollY = useScrollPosition();

    return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
}

export function useScroll() {
    const context = useContext(ScrollContext);
    if (context === undefined) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    
return context;
}
