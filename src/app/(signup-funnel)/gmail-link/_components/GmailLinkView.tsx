'use client';

import Image from 'next/image';
import Link from 'next/link';

import IconNewWhite from '@/components/Icon/IconNewWhite';

import GradientShadowHeading from '../../_components/GradientShadowHeading/GradientShadowHeading';

export function GmailLinkView() {
    return (
        <div className='relative z-10 flex min-h-screen w-full flex-col'>
            <div className='flex w-full flex-1 flex-col items-center px-4 md:py-6'>
                {/* Logo container */}
                <div className='mb-6 flex w-full items-center justify-center'>
                    <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />
                </div>

                {/* Text content */}
                <div className='mt-6 flex w-full flex-col items-center justify-center'>
                    <GradientShadowHeading>
                        Try Ascend for free and start saving money on your trips
                    </GradientShadowHeading>
                    <p className='font-figtree mt-4 max-w-sm text-center text-sm text-neutral-900'>
                        Connect your email to automatically import your reservations:
                    </p>
                </div>

                {/* Floating button */}
                <Link
                    href='https://email.ascend.travel/gmail/import/fresh_start'
                    className='font-figtree mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-neutral-900 transition-all hover:bg-white/90'>
                    <Image src='/images/google-icon.png' alt='Gmail icon' width={24} height={24} className='size-6' />
                    Connect your Gmail account
                </Link>

                <div className='font-figtree mt-4 max-w-sm text-center text-xs font-light text-neutral-900/90'>
                    <span className='font-bold uppercase'>Important: </span>
                    <span>When connecting, remember to check the first checkbox as indicated below</span>
                </div>

                {/* Checkbox notice image */}
                <div className='mt-8 text-center text-sm text-white/80'>
                    <Image
                        src='/images/notice-checkbox.png'
                        alt='Dont forget checkbox'
                        width={328}
                        height={200}
                        className='w-[328px] rounded-lg'
                    />
                </div>
                <div className='font-figtree mt-4 max-w-sm text-center text-xs font-light text-neutral-900/90'>
                    We'll only tab into your Gmail to pull out your travel reservations, nothing else is shared
                </div>
            </div>
        </div>
    );
}
