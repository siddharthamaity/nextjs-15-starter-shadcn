'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { IconBadgeCheckFilled } from '@/components/Icon/IconBadgeCheckFilled';

import { WhatsNext } from '../_components/WhatsNext/WhatsNext';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function NewMemberPage() {
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        // Add scroll handler
        const handleScroll = () => {
            setShowConfetti(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isMounted && showConfetti && (
                <Confetti
                    className='fixed inset-0 z-50'
                    width={width || window.innerWidth}
                    height={height || window.innerHeight}
                    numberOfPieces={500}
                    recycle={true}
                    gravity={0.5}
                    colors={['#1DC167', '#006DBC', '#5AA6DA', '#FFD700', '#FF69B4']}
                    tweenDuration={5000}
                />
            )}
            <div className='flex flex-col items-center justify-center gap-1'>
                <div className='mt-8 max-w-[323px] rounded-2xl bg-neutral-100 p-10 pt-8'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <IconBadgeCheckFilled className='size-12 text-[#1DC167]' />
                    </div>
                    <p className='mt-4 text-center text-xl font-bold text-neutral-900'>
                        You're officially done leaving money on the table. 🎉
                    </p>
                </div>

                <WhatsNext
                    componenHeader="Here's what to expect next:"
                    rowsInfo={[
                        {
                            content:
                                "Keep traveling exactly how you do. We'll monitor your bookings for opportunities to save you money."
                        },
                        {
                            content:
                                "We'll send you an alert on WhatsApp when we find an opportunity to rebook your ticket at a lower rate."
                        },
                        {
                            content:
                                'You can then either contact the airline yourself, or just tap a button and our AI will do it for you.'
                        }
                    ]}
                />
                <Link
                    href='/'
                    className='text-md mb-24 rounded-full bg-neutral-50 px-8 py-3 text-center font-semibold text-neutral-900 transition-colors hover:bg-neutral-100'>
                    Go back home
                </Link>
            </div>
        </>
    );
}
