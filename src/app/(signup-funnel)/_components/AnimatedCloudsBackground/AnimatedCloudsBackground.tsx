'use client';

import { useEffect, useState } from 'react';

import styles from './styles.module.css';

const AnimatedCloudsBackground = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = () => {
            const img = new Image();
            img.onload = () => setImagesLoaded(true);
            // Try WebP first
            img.src = '/images/clouds-bg.webp';
            img.onerror = () => {
                // Fallback to PNG if WebP not supported
                img.src = '/images/clouds-bg.png';
            };
        };

        preloadImages();
    }, []);

    return (
        <div className='fixed inset-0 h-screen w-full overflow-hidden bg-[rgb(160,200,238)]'>
            {/* Static background for mobile */}
            <div className='absolute inset-0 md:hidden'>
                <div
                    className={`size-full bg-cover bg-center transition-opacity duration-1000 ${
                        imagesLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: "url('/images/clouds-bg.webp'), url('/images/clouds-bg.png')"
                    }}
                />
                {imagesLoaded && (
                    <div className='absolute inset-0 bg-gradient-to-t from-white from-0% via-white via-30% to-transparent to-50% transition-opacity duration-500' />
                )}
            </div>

            {/* Animated clouds for md and up */}
            <div
                className={`${styles['clouds-bg']} absolute inset-0 hidden transition-opacity duration-1000 md:block ${
                    imagesLoaded ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className='absolute inset-0 bg-gradient-to-t from-white from-0% via-white via-30% to-transparent to-50% transition-opacity duration-500' />
            </div>
        </div>
    );
};

export default AnimatedCloudsBackground;
