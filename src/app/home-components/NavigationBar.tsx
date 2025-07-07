'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useWindowSize } from '@/hooks/useWindowSize';

import HamburgerMenu from './HamburgerMenu';
import NavigationLinks from './NavigationLinks';

const NavigationBar = () => {
    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;

    return (
        <header className='relative z-50 h-[6rem] w-full bg-[linear-gradient(135deg,_var(--background)_40%,_var(--header-split)_40%)] backdrop-blur-sm'>
            {/* inner container: centered & constrained */}
            <div className='mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                {/* LEFT: logo */}
                <Link href='/' className='flex items-center transition-transform duration-200'>
                    <Image
                        src={isMobile ? '/Steelco_logo_2-removebg.png' : '/Steelco-logo.svg'}
                        alt='Steelco-Teknikk Logo'
                        width={258}
                        height={258}
                        className={`${isMobile ? 'h-24' : 'h-20'} w-auto object-contain`}
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
