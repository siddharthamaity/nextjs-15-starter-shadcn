'use client';

import Image from 'next/image';
import Link from 'next/link';

import FramerFooter from '@/components/FramerFooter';
import IconNewWhite from '@/components/Icon/IconNewWhite';

import styles from './styles.module.css';

export default function GmailLinkPage() {
    return (
        <div className='relative h-screen overflow-x-hidden overflow-y-auto bg-neutral-900'>
            {/* Top cloud layer (40% height) */}
            <div className={`${styles['clouds-bg-top']} absolute top-0 h-screen w-full md:h-4/5`}>
                <div className='absolute inset-0 bg-gradient-to-t from-white from-0% via-white via-30% to-transparent to-50%' />
            </div>

            {/* Bottom cloud layer (60% height) */}
            <div className={`${styles['clouds-bg-bottom']} absolute bottom-0 hidden h-1/5 w-full md:block`}>
                <div className='absolute inset-0 bg-gradient-to-b from-white from-0% via-white via-15% to-transparent to-100%' />
            </div>

            {/* Main content */}
            <div className='relative z-10 flex w-full flex-col items-center px-4 md:py-6'>
                {/* Logo container */}
                <div className='mb-6 flex w-full items-center justify-center'>
                    <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />
                </div>

                {/* Text content */}
                <div className='mt-6 flex w-full flex-col items-center justify-center'>
                    <h1 className='font-figtree max-w-lg text-center text-2xl font-light text-white drop-shadow-lg md:text-4xl'>
                        Try Ascend for free and start saving money on your trips
                    </h1>
                    <p className='font-figtree text-neutral-1000/90 mt-4 max-w-sm text-center text-sm'>
                        Connect your email to automatically import your reservations:
                    </p>
                </div>

                {/* Floating button */}
                <Link
                    href='https://email.ascend.travel/gmail/import/fresh_start'
                    className={`${styles['floating-button']} font-figtree mt-8 rounded-full bg-white px-6 py-4 font-semibold text-neutral-900 transition-all hover:bg-white/90`}>
                    <div className='flex items-center gap-2'>
                        <Image
                            src='/images/google-icon.png'
                            alt='Gmail icon'
                            width={24}
                            height={24}
                            className='size-6'
                        />
                        Connect your Gmail account
                    </div>
                </Link>

                <div className='font-figtree text-neutral-1000/60 mt-4 max-w-sm text-center text-xs font-light'>
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
                <div className='font-figtree text-neutral-1000/60 mt-4 max-w-sm text-center text-xs font-light'>
                    We'll only tab into your Gmail to pull out your travel reservations, nothing else is shared
                </div>
            </div>
            <FramerFooter />
        </div>
    );
}
