'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import IconNewWhite from '@/components/Icon/IconNewWhite';

import GradientShadowHeading from '../../../_components/GradientShadowHeading/GradientShadowHeading';
import { ShieldCheck } from 'lucide-react';

export function SuccessView() {
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
                    {/* Pro Plan Card */}
                    <div className='relative'>
                        <div className='absolute inset-x-0 -top-12 z-0 flex flex-row items-center justify-center gap-2 rounded-t-2xl bg-[#FFF6DF] pt-3 pb-6 font-semibold text-[#E3A400]'>
                            <ShieldCheck className='mb-0.5 size-5 text-[#E3A400]' />
                            30-Day Refund Guarantee
                        </div>

                        <div className='relative z-10 rounded-2xl bg-white p-6 drop-shadow-md'>
                            <div className='flex h-full flex-col gap-4'>
                                <h2 className='font-figtree text-2xl font-bold'>We do the work</h2>
                                <p className='text-sm text-neutral-800'>
                                    We sit on hold on the phone with airlines to get the price difference back if the
                                    prices drop.
                                </p>

                                <div className='flex items-start justify-start gap-1'>
                                    <span className='font-figtree -mr-1 pt-2 text-xl font-bold text-neutral-900'>
                                        $
                                    </span>
                                    <span className='text-3xl font-bold'>2.</span>
                                    <span className='-ml-1 pt-2 text-xl font-bold'>09</span>
                                </div>
                                <div className='text-neutral-1000 -mt-3 text-sm'>
                                    <span className='font-semibold'>Per month, </span>
                                    billed yearly
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

                    {/* Free Plan Card */}
                    <div className='rounded-2xl bg-white p-6 drop-shadow-md'>
                        <div className='flex h-full flex-col gap-4'>
                            <h2 className='font-figtree text-2xl font-bold'>You do the work yourself</h2>
                            <p className='text-neutral-1000 text-sm'>
                                You sit on hold on the phone with airlines to get the price difference back if the
                                prices drop.
                            </p>

                            <div className='flex items-baseline gap-1'>
                                <span className='text-3xl font-bold'>Free</span>
                            </div>

                            <button
                                onClick={handleFreePlan}
                                className='mt-6 w-full rounded-lg border-2 border-[#1DC167] bg-white py-2.5 font-semibold text-[#1DC167] transition-all hover:bg-[#1DC167]/10'>
                                Choose Option
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
