'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import IconNewWhite from '@/components/Icon/IconNewWhite';

import GradientShadowHeading from '../../../../_components/GradientShadowHeading/GradientShadowHeading';
import { FlipCard } from './FlipCard';
import { ShieldCheck } from 'lucide-react';

export function SuccessViewB() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const stateId = searchParams.get('state_id');

    const [isLoading, setIsLoading] = useState(true);
    const [stripeUrl, setStripeUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getStripeUrl() {
            if (!stateId) {
                setError('Please contact hey@ascend.travel for assistance');
                setIsLoading(false);

                return;
            }

            try {
                const response = await fetch('/api/stripe-signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ state_id: stateId })
                });

                const data = await response.json();

                if (data?.signup_link_code) {
                    setStripeUrl(`https://payments.heyascend.com/${data.signup_link_code}`);
                } else {
                    setError('Please contact hey@ascend.travel for assistance');
                }
            } catch (err) {
                console.error('Error getting Stripe signup URL:', err);
                setError('Please contact hey@ascend.travel for assistance');
            } finally {
                setIsLoading(false);
            }
        }

        getStripeUrl();
    }, [stateId]);

    const handleStripeSignup = () => {
        if (stripeUrl) {
            window.location.href = stripeUrl;
        }
    };

    const handleFreePlan = (data: { phone: string; citizenship: string }) => {
        const query = stateId ? `?state_id=${stateId}` : '';
        router.push(`/trynow${query}&phone=${data.phone}&citizenship=${data.citizenship}`);
    };

    return (
        <div className='relative z-10 mt-2 flex w-full flex-1 flex-col items-center px-4 pb-12 md:py-6'>
            <p className='w-full px-4 pb-1 text-center text-lg font-semibold text-white'>Step 2 of 2</p>

            <div className='flex w-full flex-col items-center justify-center'>
                <div className='flex flex-row items-center gap-2 text-center'>
                    <p className='font-figtree px-8 text-[24px] leading-[28px] font-extrabold tracking-[-0.02em] text-white'>
                        Success! Choose an option to continue:
                    </p>
                </div>
            </div>

            <div className='relative z-10 w-full px-4 md:px-6'>
                <div className='mx-auto mt-4 grid max-w-4xl gap-6 md:grid-cols-2'>
                    {/* Annual Plan Card */}
                    <div className='relative'>
                        <div className='relative z-10 rounded-2xl bg-white p-8 drop-shadow-md'>
                            <div className='flex h-full flex-col gap-4'>
                                <h2 className='font-figtree text-[22px] leading-[100%] font-bold'>We do the work</h2>
                                <p className='text-md text-neutral-900'>
                                    We sit on the phone with airlines to get the price difference back when the prices
                                    drop.
                                </p>

                                <div className='flex flex-row gap-3'>
                                    <div className='flex items-start justify-start gap-1'>
                                        <span className='font-figtree -mr-1 pt-2 text-xl font-bold text-neutral-900'>
                                            $
                                        </span>
                                        <span className='text-3xl font-bold'>2.</span>
                                        <span className='-ml-1 pt-2 text-xl font-bold'>09</span>
                                    </div>
                                </div>
                                <div className='text-neutral-1000 -mt-3 flex flex-row items-center gap-2 text-sm'>
                                    <span className='font-semibold'>Per month, </span>
                                    billed yearly
                                </div>

                                <button
                                    onClick={handleStripeSignup}
                                    disabled={isLoading || !!error}
                                    className='w-full rounded-full bg-[#1DC167] py-3 font-semibold text-white transition-all hover:bg-[#1DC167]/90 disabled:opacity-50'>
                                    {error ? (
                                        <a href='mailto:hey@ascend.travel' className='text-white hover:text-white/90'>
                                            Contact hey@ascend.travel
                                        </a>
                                    ) : isLoading ? (
                                        'Loading...'
                                    ) : (
                                        'Start Saving Money'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Plan Card */}
                    <FlipCard
                        onSubmit={handleFreePlan}
                        frontContent={
                            <div className='flex h-full flex-col gap-4'>
                                <h2 className='font-figtree text-[22px] leading-[100%] font-bold'>
                                    You do the work yourself
                                </h2>
                                <p className='text-neutral-1000 text-sm'>
                                    You sit on hold on the phone with airlines to get the price difference back if the
                                    prices drop.
                                </p>
                                <div className='flex items-start justify-start gap-1 text-2xl font-bold'>Free</div>
                                <div className='hidden h-5 w-full md:block' />
                                <button className='w-full rounded-full border border-neutral-900 bg-white py-2.5 font-semibold text-neutral-900 transition-all'>
                                    I'll Call The Airline Myself
                                </button>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
