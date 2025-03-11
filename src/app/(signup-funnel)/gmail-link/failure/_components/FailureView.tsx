'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import IconNewWhite from '@/components/Icon/IconNewWhite';

import GradientShadowHeading from '../../../_components/GradientShadowHeading/GradientShadowHeading';

export function FailureView() {
    const searchParams = useSearchParams();
    const stateId = searchParams.get('state_id');

    // Compute retry URL
    const retryUrl = stateId ? `https://email.ascend.travel/gmail/import/start/${stateId}` : '/gmail-link';

    return (
        <div className='relative z-10 flex min-h-screen w-full flex-col'>
            <div className='flex w-full flex-1 flex-col items-center px-4 md:py-6'>
                {/* Logo container */}
                <div className='mb-6 flex w-full items-center justify-center'>
                    <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />
                </div>

                {/* Text content */}
                <div className='mt-6 flex w-full flex-col items-center justify-center'>
                    <GradientShadowHeading className='max-w-lg'>
                        Oops! Something went wrong while connecting your Gmail account
                    </GradientShadowHeading>
                    <p className='font-figtree mt-4 max-w-sm text-center text-sm text-neutral-900/90'>
                        Please try again or reach out to us at{' '}
                        <a
                            href='mailto:help@ascend.travel'
                            className='text-neutral-900 underline transition-colors hover:text-neutral-900/90'>
                            help@ascend.travel
                        </a>{' '}
                        if the problem persists.
                    </p>

                    {/* Retry button */}
                    <Link
                        href={retryUrl}
                        className='font-figtree mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-neutral-900 transition-all hover:bg-white/90'>
                        <Image
                            src='/images/google-icon.png'
                            alt='Gmail icon'
                            width={24}
                            height={24}
                            className='size-6'
                        />
                        Try connecting again
                    </Link>
                </div>
            </div>
        </div>
    );
}
