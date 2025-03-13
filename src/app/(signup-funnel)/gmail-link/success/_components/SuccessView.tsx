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
        <div className='flex min-h-screen flex-col items-center px-4 py-6'>
            <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />

            <div className='mt-12 flex w-full max-w-xl flex-col items-center text-center'>
                <GradientShadowHeading>Your email is verified!</GradientShadowHeading>
                <p className='mt-4 text-neutral-600'>Choose your plan to start saving money on your trips</p>
            </div>

            <div className='mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:px-0'>
                <div className='relative'>
                    <PricingCard
                        title='Auto Refunds'
                        description={
                            <>
                                <span className='font-semibold text-neutral-950'>We do all the work:</span> we'll
                                monitor prices and hassle with airline support lines to get your the difference back if
                                prices drop
                            </>
                        }
                        price={{ amount: '25' }}
                        strikeThroughPrice={{ amount: '99' }}
                        features={features}
                        buttonText='Yearly Plan'
                        buttonAction={handleStripeSignup}
                        isPopular
                        isLoading={isLoading}
                        error={error}
                        showDiscountPercentage={true}
                    />
                </div>
                <PricingCard
                    title='Free'
                    description='Get alerts when prices drop, then talk to
                            airlines or hotels to get your money back'
                    features={features}
                    buttonText='Choose free'
                    buttonAction={handleFreePlan}
                    variant='secondary'
                    showDiscountPercentage={false}
                />
            </div>
        </div>
    );
}
