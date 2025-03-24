'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import IconNewWhite from '@/components/Icon/IconNewWhite';
import { FRAMER_LINKS } from '@/config/navigation';

import { CheckboxNotice } from '../../gmail-link/_components/CheckboxNotice';
import PriceDropCards from '../_components/PriceDropCards/PriceDropCards';
import { YcombBanner } from '../_components/YcombBanner/YcombBanner';
import { Lock } from 'lucide-react';

export default function GmailLinkB() {
    const [stateId, setStateId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getStateId() {
            try {
                const response = await fetch('/api/gmail/state', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({})
                });

                if (!response.ok) throw new Error('Failed to get state ID');
                const data = await response.json();
                setStateId(data.state_id);
            } catch (err) {
                setError('Failed to initialize. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }

        getStateId();
    }, []);

    return (
        <div className='flex h-screen flex-col'>
            <p className='text-md w-full px-4 pb-1 text-center font-semibold text-white'>Step 1 of 2</p>
            <div className='mb-4 flex flex-col items-center justify-center gap-4 px-2'>
                <p className='font-figtree max-w-md px-6 text-center text-[24px] leading-[28px] font-extrabold tracking-[-0.02em] text-white'>
                    Connect your Gmail to import your reservations
                </p>
                <p className='font-figtree max-w-xs px-2 text-center text-[14px] leading-[20px] font-medium text-white'>
                    Remember to check the first checkbox when connecting your account:
                </p>
            </div>

            <Link href={stateId ? `https://email.ascend.travel/gmail/import/start/${stateId}` : ''}>
            <div className='flex max-h-[200px] flex-col items-center justify-center gap-4 overflow-clip rounded-3xl pb-24'>
                    {stateId && (
                        <div
                            onClick={() =>
                                (window.location.href = `https://email.ascend.travel/gmail/import/start/${stateId}`)
                            }
                            className='cursor-pointer'>
                <CheckboxNotice width={260} height={120} showText={false} />
            </div>
                    )}
                    {!stateId && <CheckboxNotice width={260} height={120} showText={false} />}
                </div>
            </Link>

            <div className='flex flex-1 flex-col items-center'>
                {stateId ? (
                    <Link
                        href={`https://email.ascend.travel/gmail/import/start/${stateId}`}
                        className='font-figtree mt-2 flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-neutral-900 transition-all hover:bg-white/90'>
                        <Image
                            src='/images/google-icon.png'
                            alt='Gmail icon'
                            width={24}
                            height={24}
                            className='size-6'
                        />
                        Connect your Gmail
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

                <div className='mt-3 flex max-w-[260px] flex-row items-center justify-center gap-2'>
                    <Lock className='size-6 text-white/90' />
                    <div className='font-figtree max-w-sm text-left text-xs font-light text-white/90'>
                        <p>
                            We only receive your travel reservations, and store data according to our{' '}
                            <a
                                href={FRAMER_LINKS.privacy}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-figtree text-sm text-white/90 underline transition-colors hover:text-white'>
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
