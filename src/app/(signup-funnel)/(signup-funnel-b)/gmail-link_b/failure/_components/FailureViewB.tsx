'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import IconNewWhite from '@/components/Icon/IconNewWhite';

import GradientShadowHeading from '../../../../_components/GradientShadowHeading/GradientShadowHeading';

export function FailureViewB() {
    const searchParams = useSearchParams();
    const stateId = searchParams.get('state_id');

    // Compute retry URL
    const retryUrl = stateId ? `https://gmail.heyascend.com/gmail/import/start/${stateId} ` : '/gmail-link_b';

    return (
        <div className='relative z-10 mt-2 flex w-full flex-1 flex-col items-center px-4 pb-12 md:py-6'>
            <div className='flex w-full flex-col items-center justify-center'>
                <div className='flex flex-row items-center gap-2 text-center'>
                    <p className='font-figtree px-8 text-[24px] leading-[28px] font-extrabold tracking-[-0.02em] text-white'>
                        Oops! Something went wrong while connecting your Gmail account
                    </p>
                </div>
            </div>

            <div className='mt-6 flex w-full flex-col items-center justify-center'>
                <p className='font-figtree mt-4 max-w-sm text-center text-sm text-white/90'>
                    Please try again or reach out to us at{' '}
                    <a
                        href='mailto:help@ascend.travel'
                        className='text-white underline transition-colors hover:text-white/90'>
                        help@ascend.travel
                    </a>{' '}
                    if the problem persists.
                </p>

                {/* Retry button */}
                <Link
                    href={retryUrl}
                    className='font-figtree mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-neutral-900 transition-all hover:bg-white/90'>
                    <Image src='/images/google-icon.png' alt='Gmail icon' width={24} height={24} className='size-6' />
                    Try connecting again
                </Link>
            </div>
        </div>
    );
}
