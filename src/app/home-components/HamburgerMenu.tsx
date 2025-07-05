'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
    href: string;
    label: string;
}

const NAVIGATION_LINKS: NavLink[] = [
    { href: '/', label: 'Hjem' },
    { href: '/products', label: 'Våre produkter' },
    { href: '/contact', label: 'Kontakt oss' }
];

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (href: string): boolean => (href === '/' ? pathname === href : pathname.startsWith(href));

    return (
        <div className='md:hidden'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='text-primary-foreground focus:ring-ring inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset'>
                <span className='sr-only'>Open main menu</span>
                {isOpen ? (
                    <svg
                        className='block h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                ) : (
                    <svg
                        className='block h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                )}
            </button>
            {isOpen && (
                <div className='bg-background absolute top-24 right-0 left-0 z-50 shadow-lg'>
                    <div className='space-y-1 px-2 pt-2 pb-3'>
                        {NAVIGATION_LINKS.map((link) => {
                            const active = isActive(link.href);
                            
return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block rounded-md px-3 py-2 text-base font-medium ${active ? 'bg-primary text-primary-foreground' : 'text-secondary-foreground/70 hover:bg-accent hover:text-accent-foreground'}`}>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
