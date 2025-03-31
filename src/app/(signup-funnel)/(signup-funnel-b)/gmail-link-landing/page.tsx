import Link from 'next/link';

import PriceDropCards from '../_components/PriceDropCards/PriceDropCards';

export default function GmailLinkLanding() {
    return (
        <div className='flex h-screen flex-col'>
            <div className='flex w-full flex-col items-center justify-center gap-2 px-8 pb-8'>
                <PriceDropCards className='h-full w-full max-w-md' />
            </div>
            <div className='mb-8 flex flex-col items-center justify-center gap-4 px-4'>
                <p className='font-figtree max-w-md text-center text-[32px] leading-[33px] font-extrabold tracking-[-0.02em] text-white'>
                    Airlines secretly drop prices after you book. We catch them.
                </p>
                <p className='font-figtree max-w-xs px-2 text-center text-[16px] leading-[20px] font-medium text-white'>
                    You get the difference back, even on non-refundable bookings.
                </p>
            </div>
            <Link href='/gmail-link_b'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='text-md rounded-full bg-neutral-50 px-8 py-3 text-center font-semibold text-neutral-900 lg:px-16 lg:text-xl'>
                        Start Saving for free
                    </div>
                </div>
            </Link>
        </div>
    );
}
