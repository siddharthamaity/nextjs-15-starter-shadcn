'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useWindowSize } from '@/hooks/useWindowSize';

import HamburgerMenu from './HamburgerMenu';
import NavigationLinks from './NavigationLinks';

const NavigationBar = () => {
    return (
        <header className='relative z-50 h-[8rem] w-full bg-white backdrop-blur-sm'>
            {/* inner container: centered & constrained */}
            <div className='mx-auto flex h-full w-full max-w-7xl items-center justify-center gap-16 px-4 sm:px-6 lg:px-8'>
                {/* LEFT: logo */}
                <Link href='/' className='flex items-center transition-transform duration-200'>
                    <Image
                        src={'/Steelco-logo.svg'}
                        alt='Steelco-Teknikk Logo'
                        width={258}
                        height={258}
                        className={`'h-24' w-auto object-contain`}
                    />
                </Link>

                {/* RIGHT: nav links */}
                <div className='hidden md:block'>
                    <NavigationLinks />
                </div>
                <HamburgerMenu />
            </div>
        </header>
    );
};

export default NavigationBar;
