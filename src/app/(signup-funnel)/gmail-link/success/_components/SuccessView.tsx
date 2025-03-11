'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import IconNewWhite from '@/components/Icon/IconNewWhite';

import GradientShadowHeading from '../../../_components/GradientShadowHeading/GradientShadowHeading';
import { PricingCard } from '../../../_components/PricingCard/PricingCard';

const features = [
    { name: 'We get you your money back', isInFreePlan: false },
    { name: 'Dedicated Concierge for Refunds', isInFreePlan: false },
    { name: 'Automatic Refunds', isInFreePlan: false },
    { name: 'Priority Queue for Alerts', isInFreePlan: false },
    { name: 'Unlimited Alerts', isInFreePlan: true },
    { name: 'Hotel Price Drop Alerts', isInFreePlan: true },
    { name: 'Flight Price Drop Alerts', isInFreePlan: true }
];

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
            <div className='mb-6 flex w-full items-center justify-center'>
                <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />
            </div>

            <div className='mt-6 flex w-full flex-col items-center justify-center'>
                <GradientShadowHeading>Email connected! Next, choose a plan to continue:</GradientShadowHeading>
            </div>

            <div className='relative z-10 w-full px-4 md:mt-12 md:px-6'>
                <div className='mx-auto mt-20 grid max-w-4xl gap-6 md:grid-cols-2'>
                    <PricingCard
                        title='Road Warrior'
                        description={
                            <>
                                <span className='font-semibold text-neutral-950'>We go to war for you:</span> we'll
                                monitor prices and deal with the airlines or hotels on your behalf. Road Warriors save{' '}
                                <span className='font-semibold'>~$200 a year</span> on average on their travel.
                            </>
                        }
                        price={{ amount: '25.00', period: 'year' }}
                        features={features}
                        buttonText='Yearly Plan'
                        buttonAction={handleStripeSignup}
                        isPopular
                        isLoading={isLoading}
                        error={error}
                    />

                    <PricingCard
                        title='Free'
                        description='Get alerts when prices drop, receive refunds by spending an average of 30 minutes haggling with airlines or hotels yourself.'
                        price={{ amount: '0.00' }}
                        features={features}
                        buttonText='Select Free Plan'
                        buttonAction={handleFreePlan}
                        variant='secondary'
                    />
                </div>
            </div>
        </div>
    );
}
