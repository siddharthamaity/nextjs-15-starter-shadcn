'use client';

import { cn } from '@/lib/utils';

import { CheckCircle, StarIcon, XCircle } from 'lucide-react';

interface PricingFeature {
    name: string;
    isInFreePlan: boolean;
}

interface PricingCardProps {
    title: string;
    description: React.ReactNode;
    price: {
        amount: string;
        period?: string;
    };
    features: PricingFeature[];
    buttonText: string;
    buttonAction: () => void;
    isPopular?: boolean;
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
    error?: string | null;
}

export function PricingCard({
    title,
    description,
    price,
    features,
    buttonText,
    buttonAction,
    isPopular,
    variant = 'primary',
    isLoading,
    error
}: PricingCardProps) {
    const isPaidPlan = variant === 'primary';

    return (
        <div className='relative'>
            {isPopular && (
                <div className='absolute inset-x-0 -top-12 z-0 flex flex-row items-center justify-center gap-2 rounded-t-2xl bg-[#FFF6DF] pt-3 pb-6 font-semibold text-[#E3A400] drop-shadow-md'>
                    <StarIcon className='size-4 text-[#E3A400]' />
                    Most Popular
                </div>
            )}

            <div className='relative z-10 rounded-2xl bg-white p-6 drop-shadow-md'>
                <div className='flex h-full flex-col gap-4'>
                    <h2 className='font-figtree text-2xl font-bold text-neutral-900'>{title}</h2>
                    <p className='text-sm text-neutral-800'>{description as React.ReactNode}</p>

                    <div className='flex items-start justify-start gap-1'>
                        <span className='pt-2 text-lg font-medium text-neutral-900'>$</span>
                        <span className='text-3xl font-bold text-neutral-900'>{price.amount}</span>
                        {price.period && (
                            <span className='text-md pt-2 font-medium text-neutral-900'>/{price.period}</span>
                        )}
                    </div>

                    <button
                        onClick={buttonAction}
                        disabled={isLoading || !!error}
                        className={cn(
                            'w-full rounded-lg py-3 font-semibold transition-all disabled:opacity-50',
                            variant === 'primary'
                                ? 'bg-[#1DC167] text-white hover:bg-[#1DC167]/90'
                                : 'border-2 border-[#1DC167] bg-white py-2.5 text-[#1DC167] hover:bg-[#1DC167]/10'
                        )}>
                        {error ? (
                            <a href='mailto:hey@ascend.travel' className='text-white hover:text-white/90'>
                                Contact hey@ascend.travel
                            </a>
                        ) : isLoading ? (
                            'Loading...'
                        ) : (
                            buttonText
                        )}
                    </button>

                    <ul className='mt-4 flex flex-col gap-3'>
                        {features.map((feature, index) => {
                            const isAvailable = isPaidPlan || feature.isInFreePlan;
                            const showFeature = isPaidPlan || index >= features.length - 3;

                            return (
                                <li
                                    key={feature.name}
                                    className={cn(
                                        'flex items-center gap-2 text-sm',
                                        isAvailable ? 'text-neutral-900' : 'text-neutral-400'
                                    )}>
                                    {isPaidPlan || (isAvailable && <CheckCircle className='size-5 text-[#1DC167]' />)}
                                    {isPaidPlan || (!isAvailable && <XCircle className='size-5 text-neutral-400' />)}
                                    {isPaidPlan && <CheckCircle className='size-5 text-[#1DC167]' />}
                                    {feature.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
