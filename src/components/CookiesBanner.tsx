'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { CookieIcon } from 'lucide-react';

export function CookiesBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieChoice = localStorage.getItem('cookie-consent');
        if (!cookieChoice) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className='fixed right-0 bottom-0 left-0 z-50 p-3 md:p-6'>
            {/* Mobile Layout */}
            <div className='mx-auto max-w-4xl md:hidden'>
                <div className='rounded-lg bg-white p-3 shadow-lg'>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='flex items-start gap-2'>
                            <div className='flex flex-1 flex-row items-center gap-2 text-xs text-neutral-700'>
                                <CookieIcon className='mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500' />
                                <div>
                                    <p>
                                        We use cookies to enhance your experience. By continuing, you agree to our use
                                        of cookies.{' '}
                                        <Link
                                            href='/cookies-info'
                                            className='ml-1 text-xs text-neutral-600 underline hover:text-neutral-900'>
                                            Learn more
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Button
                                onClick={acceptCookies}
                                size='sm'
                                className='h-8 bg-[#1DC167] px-3 text-sm font-semibold hover:bg-[#1DC167]/90'>
                                Accept
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className='mx-auto hidden max-w-4xl md:block'>
                <div className='rounded-lg bg-white p-6 shadow-lg'>
                    <div className='flex flex-row items-center gap-6'>
                        <div className='flex items-start gap-3'>
                            <CookieIcon className='mt-1 h-5 w-5 flex-shrink-0 text-neutral-500' />
                            <div className='flex-1'>
                                <p className='text-sm text-neutral-700'>
                                    We use cookies to enhance your experience and analyze our website traffic. By
                                    clicking "Accept", you agree to our use of cookies.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-shrink-0 items-center gap-4'>
                            <Button
                                onClick={acceptCookies}
                                className='bg-[#1DC167] font-semibold hover:bg-[#1DC167]/90'>
                                Accept
                            </Button>
                            <Link
                                href='/cookies-info'
                                className='text-sm text-neutral-600 underline hover:text-neutral-900'>
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
