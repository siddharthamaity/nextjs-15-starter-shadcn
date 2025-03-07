'use client';

import Link from 'next/link';

import { ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react';

// Footer links data
const ascendLinks = [
    {
        label: 'Hotel Repricings',
        url: 'https://heyascend.com/hotel-repricings'
    },
    {
        label: 'Flight Repricings',
        url: 'https://heyascend.com/flight-repricings'
    },
    { label: 'Cancellation Policy', url: 'https://heyascend.com/cancellation' },
    { label: 'Get Help', url: 'https://heyascend.com/support' }
];

const productLinks = [{ label: 'Hotel Deal', url: 'https://heyascend.com/' }];

const companyLinks = [
    { label: 'Privacy Policy', url: 'https://heyascend.com/privacy' },
    { label: 'Terms & Conditions', url: 'https://heyascend.com/terms' }
];

const socialLinks = [
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/discoverascend/',
        icon: Instagram
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/company/gordian-software',
        icon: Linkedin
    },
    {
        label: 'discoverascend',
        url: 'https://x.com/discoverascend',
        icon: Twitter
    }
];

const FramerFooter = () => {
    return (
        <div>
            <footer className='relative z-10 mt-20 w-full px-6 pb-12 text-neutral-900'>
                <div className='mx-auto max-w-6xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:pl-28'>
                        {/* Column 1: Ascend */}
                        <div className='flex justify-center py-4 md:py-8 lg:justify-center'>
                            <div className='flex w-full flex-col gap-4 lg:w-48'>
                                <h3 className='font-figtree text-lg font-semibold'>Ascend</h3>
                                <ul className='flex flex-col gap-3'>
                                    {ascendLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.url}
                                                className='font-figtree text-neutral-1000/80 hover:text-neutral-1000 text-sm'>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Products */}
                        <div className='flex justify-center py-4 md:py-8 lg:justify-center'>
                            <div className='flex w-full flex-col gap-4 lg:w-48'>
                                <h3 className='font-figtree text-lg font-semibold'>Products</h3>
                                <ul className='flex flex-col gap-3'>
                                    {productLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.url}
                                                className='font-figtree text-neutral-1000/80 hover:text-neutral-1000 flex items-center gap-2 text-sm'>
                                                {item.label}
                                                <ArrowUpRight className='size-4 -translate-y-0.5' />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Company */}
                        <div className='flex justify-center py-4 md:py-8 lg:justify-center'>
                            <div className='flex w-full flex-col gap-4 lg:w-48'>
                                <h3 className='font-figtree text-lg font-semibold'>Company</h3>
                                <ul className='flex flex-col gap-3'>
                                    {companyLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.url}
                                                className='font-figtree text-neutral-1000/80 hover:text-neutral-1000 flex items-center gap-2 text-sm'>
                                                {item.label}
                                                <ArrowUpRight className='size-4 -translate-y-0.5' />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Column 4: Social */}
                        <div className='flex justify-center py-4 md:py-8 lg:justify-center'>
                            <div className='flex w-full flex-col gap-4 lg:w-48'>
                                <h3 className='font-figtree text-lg font-semibold'>Social</h3>
                                <ul className='flex flex-col gap-3'>
                                    {socialLinks.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='font-figtree text-neutral-1000/80 hover:text-neutral-1000 flex items-center gap-2 text-sm'>
                                                <item.icon className='size-4' />
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FramerFooter;
