'use client';

import { cn } from '@/lib/utils';

import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
    className?: string;
    onClick?: () => void;
    variant?: 'subtle' | 'gentle' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
}

export default function ScrollIndicator({ className, onClick, variant = 'subtle', size = 'md' }: ScrollIndicatorProps) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            // Default behavior: scroll down by viewport height
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    };

    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10'
    };

    const iconSizes = {
        sm: 14,
        md: 16,
        lg: 20
    };

    const animationClasses = {
        subtle: 'animate-pulse [animation-duration:3s]',
        gentle: 'hover:translate-y-0.5 transition-transform duration-500',
        minimal: 'opacity-60 hover:opacity-80 transition-opacity duration-300'
    };

    return (
        <button
            onClick={handleClick}
            className={cn(
                'flex items-center justify-center rounded-full bg-gray-100/60 backdrop-blur-sm transition-all duration-500 hover:bg-gray-200/70 focus:ring-1 focus:ring-gray-300 focus:ring-offset-1 focus:outline-none',
                sizeClasses[size],
                animationClasses[variant],
                className
            )}
            aria-label='Scroll down for more content'>
            <ChevronDown size={iconSizes[size]} className='text-gray-500' />
        </button>
    );
}
