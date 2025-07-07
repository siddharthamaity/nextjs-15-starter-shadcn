// components/HeroBackground.tsx
'use client';

// or remove it if you make this a server component
import Image from 'next/image';

// components/HeroBackground.tsx

interface HeroBackgroundProps {
    scrollY: number;
}

export default function HeroBackground({ scrollY }: HeroBackgroundProps) {
    return (
        <div className='absolute inset-0 overflow-hidden'>
            <Image
                alt='Hero background'
                src='/hero_image.JPG?height=1080&width=1920'
                fill
                priority
                className='object-cover'
                style={{ transform: `translateY(${scrollY * 0.5}px) scale(1.2)` }}
            />
            {/* Dark Overlay + Blur */}
            <div className='absolute inset-0 bg-black/50 backdrop-blur-[2px]' />
        </div>
    );
}
