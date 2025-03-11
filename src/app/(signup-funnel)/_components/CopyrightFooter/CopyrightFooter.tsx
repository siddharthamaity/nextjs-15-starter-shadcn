'use client';

import Link from 'next/link';

import { FRAMER_LINKS } from '@/config/navigation';

import { format } from 'date-fns';

const CopyrightFooter = () => {
    return (
        <footer className='relative z-10 w-full py-6 pt-36'>
            <div className='mx-auto flex max-w-6xl flex-col items-center px-6 text-center md:flex-col md:justify-between'>
                <p className='font-figtree text-sm text-neutral-900/60'>
                    Copyright {format(new Date(), 'yyyy')} © Ascend
                </p>
                <div className='flex items-center gap-4'>
                    <a
                        href={FRAMER_LINKS.privacy}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-figtree text-sm text-neutral-900/60 transition-colors hover:text-neutral-900'>
                        Privacy Policy
                    </a>
                    <span className='font-figtree text-sm text-neutral-900/60'>&</span>
                    <a
                        href={FRAMER_LINKS.terms}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-figtree text-sm text-neutral-900/60 transition-colors hover:text-neutral-900'>
                        Terms of Service
                    </a>
                </div>
                <p className='font-figtree text-sm text-neutral-900/60'>All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default CopyrightFooter;
