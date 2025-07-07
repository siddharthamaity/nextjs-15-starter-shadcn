'use client';

import { useScrollPosition } from '@/hooks/useScrollPosition';

import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ScrollIndicator from './scroll-indicator';

export default function HeroSection() {
    const scrollY = useScrollPosition();

    return (
        <section className='relative h-screen overflow-hidden'>
            <HeroBackground scrollY={scrollY} />

            {/* Main Content */}
            <div className='relative z-10 flex h-full items-center justify-center px-4'>
                <HeroContent scrollY={scrollY} />
            </div>
            <div className='absolute bottom-34 left-1/2 -translate-x-1/2'>
                <ScrollIndicator />
            </div>
        </section>
    );
}
