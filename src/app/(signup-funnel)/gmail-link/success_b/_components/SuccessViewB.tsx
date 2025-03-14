'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import IconNewWhite from '@/components/Icon/IconNewWhite';

import GradientShadowHeading from '../../../_components/GradientShadowHeading/GradientShadowHeading';
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
                    setStripeUrl(`https://payments.ascend.travel/${data.signup_link_code}`);
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

    const handleFreePlan = () => {
        const query = stateId ? `?state_id=${stateId}` : '';
        router.push(`/trynow${query}`);
    };

    return (
        <div className='relative z-10 mt-3 flex w-full flex-1 flex-col items-center px-4 pb-12 md:py-6'>
            <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />

            <div className='mt-6 flex w-full flex-col items-center justify-center'>
                <GradientShadowHeading>Success! Choose an option to continue:</GradientShadowHeading>
            </div>

            <div className='relative z-10 w-full px-4 md:mt-12 md:px-6'>
                <div className='mx-auto mt-20 grid max-w-4xl gap-6 md:grid-cols-2'>
                    {/* Annual Plan Card */}
                    <div className='relative'>
                        <div className='relative z-10 rounded-2xl bg-white p-6 drop-shadow-md'>
                            <div className='flex h-full flex-col gap-4'>
                                <div className='justify-left mt-4 flex flex-row items-center gap-2 text-xs font-semibold text-[#E3A400]'>
                                    <ShieldCheck className='mb-0.5 size-4 text-[#E3A400]' />
                                    30-Day Refund Guarantee
                                </div>

                                <h2 className='font-figtree text-2xl font-bold'>Annual Plan</h2>
                                <p className='text-sm text-neutral-900'>
                                    <span className='font-semibold text-neutral-950'>We do all the work: </span>
                                    We sit on hold on the phone with airlines to get the price difference back if the
                                    prices drop.
                                </p>

                                <div className='flex flex-row gap-3'>
                                    <div className='flex items-start justify-start gap-1'>
                                        <span className='font-figtree -mr-1 pt-2 text-xl font-bold text-neutral-900'>
                                            $
                                        </span>
                                        <span className='text-3xl font-bold'>2.</span>
                                        <span className='-ml-1 pt-2 text-xl font-bold'>99</span>
                                    </div>
                                    <div className='flex items-start justify-start gap-1 line-through opacity-20'>
                                        <span className='font-figtree -mr-1 pt-2 text-xl font-bold text-neutral-900'>
                                            $
                                        </span>
                                        <span className='text-3xl font-bold'>9.</span>
                                        <span className='-ml-1 pt-2 text-xl font-bold'>99</span>
                                    </div>
                                </div>
                                <div className='text-neutral-1000 -mt-3 flex flex-row items-center gap-2 text-sm'>
                                    <span className='font-semibold'>Per month, </span>
                                    billed yearly
                                    <div className='w-fit rounded-full bg-[#1DC167]/15 px-2 py-0.5 text-xs font-bold text-[#1DC167]'>
                                        Save 75%
                                    </div>
                                </div>

                                <button
                                    onClick={handleStripeSignup}
                                    disabled={isLoading || !!error}
                                    className='w-full rounded-lg bg-[#1DC167] py-3 font-semibold text-white transition-all hover:bg-[#1DC167]/90 disabled:opacity-50'>
                                    {error ? (
                                        <a href='mailto:hey@ascend.travel' className='text-white hover:text-white/90'>
                                            Contact hey@ascend.travel
                                        </a>
                                    ) : isLoading ? (
                                        'Loading...'
                                    ) : (
                                        'Choose Option'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Plan Card */}
                    <div className='rounded-2xl bg-white p-6 drop-shadow-md'>
                        <div className='flex h-full flex-col gap-4'>
                            <div className='justify-left mt-4 flex flex-row items-center gap-2 text-xs font-semibold text-[#E3A400]'>
                                <ShieldCheck className='mb-0.5 size-4 text-[#E3A400]' />
                                30-Day Refund Guarantee
                            </div>
                            <h2 className='font-figtree text-2xl font-bold'>Monthly Plan</h2>
                            <p className='text-neutral-1000 text-sm'>
                                You sit on hold on the phone with airlines to get the price difference back if the
                                prices drop.
                            </p>

                            <div className='flex items-start justify-start gap-1'>
                                <span className='font-figtree -mr-1 pt-2 text-xl font-bold text-neutral-900'>$</span>
                                <span className='text-3xl font-bold'>8.</span>
                                <span className='-ml-1 pt-2 text-xl font-bold'>99</span>
                            </div>
                            <div className='text-neutral-1000 -mt-3 flex flex-row items-center gap-2 text-sm'>
                                <span className='font-semibold'>Per month, </span>
                                billed monthly
                            </div>

                            <button
                                onClick={handleFreePlan}
                                className='w-full rounded-lg border-2 border-[#1DC167] bg-white py-2.5 font-semibold text-[#1DC167] transition-all hover:bg-[#1DC167]/10'>
                                Choose Option
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
