'use client';

import { useScroll } from '@/contexts/ScrollContext';

import FadeInWrapper from './FadeInWrapper';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ScrollIndicator from './scroll-indicator';

export default function HeroSection() {
    const { scrollY } = useScroll();

    return (
        <section className='relative h-screen overflow-hidden'>
            <HeroBackground />

            {/* Main Content */}
            <div className='relative z-10 flex h-full items-center justify-center px-4'>
                <div
                    className='max-w-4xl text-white'
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`
                    }}>
                    <FadeInWrapper>
                        <HeroContent />
                    </FadeInWrapper>
                </div>
            </div>
            <div className='absolute bottom-34 left-1/2 -translate-x-1/2'>
                <ScrollIndicator />
            </div>
        </section>
    );
}
