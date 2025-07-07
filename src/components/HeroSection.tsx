import Link from 'next/link';

import ScrollIndicator from './scroll-indicator';

interface HeroSectionProps {
    scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
    return (
        <section className='relative h-screen overflow-hidden'>
            {/* Background Image with Parallax Effect */}
            <div
                className='absolute inset-0 mt-[-5%] h-[120%] w-full bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url('/hero_image.JPG?height=1080&width=1920')`,
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            />

            {/* Dark Overlay with Blur Effect */}
            <div className='absolute inset-0 bg-black/50 backdrop-blur-[2px]' />

            {/* Main Content */}
            <div className='relative z-10 flex h-full items-center justify-center px-4'>
                <div
                    className='max-w-4xl text-white'
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`
                    }}>
                    <h1 className='mb-6 text-5xl leading-tight font-bold md:text-7xl'>
                        <span className='text-[#f3661a] underline decoration-4'>Steelco-Teknikk</span>
                        <span className='block text-white'>
                            din leverandør innen kabelkanaler i miljøvennlig plast og isolasjon av sporvekslere
                        </span>
                    </h1>

                    <div className='flex flex-col justify-start gap-4 sm:flex-row'>
                        <Link
                            href='/products'
                            className='transform rounded-lg bg-[#f3661a] px-8 py-4 font-semibold text-[#f3661a] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#f3661a]'>
                            Våre produkter
                        </Link>
                        <Link
                            href='/contact'
                            className='rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900'>
                            Kontakt oss
                        </Link>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-34 left-1/2 -translate-x-1/2'>
                <ScrollIndicator />
            </div>
        </section>
    );
}
