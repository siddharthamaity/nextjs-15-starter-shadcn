'use client';

import Image from 'next/image';

import styles from './styles.module.css';

interface AnimatedCloudsBackgroundProps {
    topLayer?: boolean;
    bottomLayer?: boolean;
}

const AnimatedCloudsBackground = ({ topLayer = true, bottomLayer = true }: AnimatedCloudsBackgroundProps) => {
    return (
        <div className='fixed inset-0 h-screen w-full overflow-hidden bg-neutral-900'>
            {/* Top cloud layer */}
            {topLayer && (
                <div className={`${styles['clouds-bg-top']} absolute top-0 h-screen w-full md:h-4/5`}>
                    <Image
                        src='/images/clouds-bg.png'
                        alt='Background clouds'
                        fill
                        priority
                        loading='eager'
                        sizes='100vw'
                        className='object-cover'
                        quality={100}
                        placeholder='blur'
                        blurDataURL='data:image/jpeg;base64,...'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-white from-0% via-white via-30% to-transparent to-50%' />
                </div>
            )}

            {/* Bottom cloud layer */}
            {bottomLayer && (
                <div className={`${styles['clouds-bg-bottom']} absolute bottom-0 hidden h-1/5 w-full md:block`}>
                    <Image
                        src='/images/clouds-bg.png'
                        alt='Background clouds'
                        fill
                        priority
                        loading='eager'
                        sizes='100vw'
                        className='object-cover'
                        quality={100}
                        placeholder='blur'
                        blurDataURL='data:image/jpeg;base64,...'
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-white from-0% via-white via-15% to-transparent to-100%' />
                </div>
            )}
        </div>
    );
};

export default AnimatedCloudsBackground;
