import Image from 'next/image';
import Link from 'next/link';

import NavigationLinks from './NavigationLinks';

const NavigationBar = () => {
    return (
        <header className='z-50 h-[4.5rem] w-full bg-[linear-gradient(135deg,_var(--background)_40%,_var(--header-split)_40%)] backdrop-blur-sm'>
            {/* inner container: centered & constrained */}
            <div className='mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                {/* LEFT: logo */}
                <Link href='/' className='flex items-center transition-transform duration-200'>
                    <Image
                        src='/Steelco_logo.jpg'
                        alt='Steelco-Teknikk Logo'
                        width={258}
                        height={258}
                        className='h-12 w-auto object-contain'
                    />
                </Link>

                {/* RIGHT: nav links */}
                <NavigationLinks />
            </div>
        </header>
    );
};

export default NavigationBar;
