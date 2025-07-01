'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronDown } from 'lucide-react';

interface ProductLink {
    href: string;
    label: string;
}

interface NavLink {
    href?: string;
    label: string;
    children?: ProductLink[];
}

const NAVIGATION_LINKS: NavLink[] = [
    { href: '/', label: 'Hjem' },
    {
        label: 'Våre produkter',
        children: [
            { href: '/products/isoblock', label: 'Isoblock' },
            { href: '/products/heatpoint-max', label: 'Heatpoint MAX 2N/3N' },
            { href: '/products/wirthwein', label: 'Wirthwein Type 1/2' },
            { href: '/products/termaren', label: 'Termaren TM29' }
        ]
    },
    { href: '/contact', label: 'Kontakt oss' }
];

const NavigationLinks = () => {
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const isActive = (href: string): boolean => (href === '/' ? pathname === href : pathname.startsWith(href));

    const hasActiveChild = (children?: ProductLink[]): boolean => {
        if (!children) return false;
        return children.some((child) => isActive(child.href));
    };

    return (
        <nav className='flex items-center gap-2'>
            {NAVIGATION_LINKS.map((link, idx) => {
                const hasChildren = Array.isArray(link.children) && link.children.length > 0;
                const active = link.href ? isActive(link.href) : hasActiveChild(link.children);

                return (
                    <div
                        key={link.label}
                        className='relative pb-1'
                        onMouseEnter={() => hasChildren && setOpenIndex(idx)}
                        onMouseLeave={() => hasChildren && setOpenIndex(null)}>
                        {hasChildren ? (
                            <button
                                className={`hover:bg-accent hover:text-accent-foreground focus:ring-ring flex items-center gap-1 rounded-[var(--radius)] px-4 py-2 text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                                    active
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'text-foreground hover:shadow-sm'
                                } ${openIndex === idx ? 'bg-accent text-accent-foreground' : ''} `}>
                                {link.label}
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                                />
                            </button>
                        ) : (
                            <Link
                                href={link.href || '#'}
                                className={`hover:bg-accent hover:text-accent-foreground focus:ring-ring inline-flex items-center rounded-[var(--radius)] px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none ${active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-foreground'} `}>
                                {link.label}
                            </Link>
                        )}

                        {/* Dropdown Menu */}
                        {hasChildren && openIndex === idx && (
                            <div className='animate-in fade-in-0 zoom-in-95 absolute top-full left-0 z-50 min-w-[220px] duration-200'>
                                <div className='bg-popover text-popover-foreground border-border overflow-hidden rounded-[var(--radius)] border shadow-lg'>
                                    <div className='p-1'>
                                        {link.children!.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className={`hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block rounded-sm px-3 py-2 text-sm transition-colors duration-150 focus:outline-none ${
                                                    isActive(child.href)
                                                        ? 'bg-accent text-accent-foreground font-medium'
                                                        : 'text-foreground'
                                                } `}>
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default NavigationLinks;
