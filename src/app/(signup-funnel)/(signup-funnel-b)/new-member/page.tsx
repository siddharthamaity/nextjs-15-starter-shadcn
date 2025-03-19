'use client';

import { useEffect, useState } from 'react';

import { IconBadgeCheckFilled } from '@/components/Icon/IconBadgeCheckFilled';

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

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isMounted && (
                <Confetti
                    className='absolute inset-0'
                    width={width || window.innerWidth}
                    height={height || window.innerHeight}
                    numberOfPieces={100}
                    recycle={true}
                    gravity={0.5}
                    colors={['#1DC167', '#006DBC', '#5AA6DA', '#FFD700', '#FF69B4']}
                    tweenDuration={5000}
                />
            )}
            <div className='flex flex-col items-center justify-center gap-1'>
                <div className='pt-8 text-lg text-neutral-50'>Account Created</div>
                <div className='text-2xl font-bold text-neutral-50'>Congratulations!</div>
                <div className='mt-8 max-w-[323px] rounded-2xl bg-neutral-100 p-12'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <IconBadgeCheckFilled className='size-12 text-[#1DC167]' />
                    </div>
                    <p className='mt-4 text-center text-xl font-bold text-neutral-900'>
                        You're officially done leaving money on the table. 🎉
                    </p>
                    <p className='mt-2 text-center text-sm font-semibold text-neutral-900'>
                        Keep traveling exactly how you do. We'll hit you up on WhatsApp whenever we find hidden price
                        drops on your bookings.
                    </p>
                </div>
                <div></div>
            </div>
        </>
    );
}
