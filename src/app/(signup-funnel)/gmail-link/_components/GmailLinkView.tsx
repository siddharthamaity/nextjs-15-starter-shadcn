'use client';

import { Suspense, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import IconNewWhite from '@/components/Icon/IconNewWhite';
import { FRAMER_LINKS } from '@/config/navigation';

import GradientShadowHeading from '../../_components/GradientShadowHeading/GradientShadowHeading';
import { format } from 'date-fns';
import Cookies from 'js-cookie';

interface GmailLinkViewProps {
    initialStateId: string | null;
}

// Dynamically import the checkbox notice
const CheckboxNotice = dynamic(() => import('./CheckboxNotice').then((mod) => mod.CheckboxNotice), {
    ssr: false,
    loading: () => <div className='mt-8 h-[200px] animate-pulse rounded-lg bg-white/10' />
});

export function GmailLinkView({ initialStateId }: GmailLinkViewProps) {
    const [stateId, setStateId] = useState<string | null>(initialStateId);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Add FB pixel data if needed
    useEffect(() => {
        if (stateId) return;

        const updateStateWithPixelData = async () => {
            setIsLoading(true);
            try {
                const fbp = Cookies.get('_fbp');
                const fbc = Cookies.get('_fbc');

                const response = await fetch('/api/gmail/state', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ fbp, fbc })
                });

                if (!response.ok) throw new Error('Failed to update state');
                const data = await response.json();
                setStateId(data.state_id);
            } catch (err) {
                setError('Unable to initialize Gmail connection');
            } finally {
                setIsLoading(false);
            }
        };

        updateStateWithPixelData();
    }, [stateId]);

    return (
        <div className='relative z-10 flex min-h-screen w-full flex-col'>
            <div className='flex w-full flex-1 flex-col items-center px-4 md:py-6'>
                {/* Logo container */}
                <div className='mb-6 flex w-full items-center justify-center'>
                    <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />
                </div>

                {/* Text content */}
                <div className='mt-6 flex w-full flex-col items-center justify-center'>
                    <GradientShadowHeading>Try Ascend for free to start saving money on travel</GradientShadowHeading>
                    <p className='font-figtree mt-4 max-w-sm text-center text-sm text-neutral-900'>
                        Connect your email to automatically import your reservations:
                    </p>
                </div>

                {/* Floating button */}
                {stateId ? (
                    <Link
                        href={`https://email.ascend.travel/gmail/import/start/${stateId}`}
                        className='font-figtree mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-neutral-900 transition-all hover:bg-white/90'>
                        <Image
                            src='/images/google-icon.png'
                            alt='Gmail icon'
                            width={24}
                            height={24}
                            className='size-6'
                        />
                        Connect your Gmail account
                    </Link>
                ) : isLoading ? (
                    <div className='font-figtree mt-8 rounded-full bg-white/80 px-6 py-4 font-semibold text-neutral-900'>
                        Loading...
                    </div>
                ) : (
                    <div className='mt-8 text-center text-red-500'>
                        {error}
                        <button className='mt-2 underline' onClick={() => setStateId(null)}>
                            Try again
                        </button>
                    </div>
                )}

                {/* Load checkbox notice immediately since it's above the fold */}
                <div className='mt-8 max-w-sm'>
                    <CheckboxNotice width={260} height={120} showText={false} />
                </div>
                <div className='font-figtree mt-4 max-w-sm text-center text-xs font-light text-neutral-900/90'>
                    We'll only tab into your Gmail to pull out your travel reservations, nothing else is shared
                </div>
            </div>
        </div>
    );
}
