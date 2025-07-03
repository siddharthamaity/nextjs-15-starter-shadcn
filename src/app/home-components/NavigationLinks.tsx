'use client';

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

const NavigationLinks = () => {
    const pathname = usePathname();
    const isActive = (href: string): boolean => (href === '/' ? pathname === href : pathname.startsWith(href));

    return (
        <nav className='flex items-center gap-2'>
            {NAVIGATION_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`hover:bg-accent hover:text-accent-foreground focus:ring-ring inline-flex items-center rounded-[var(--radius)] px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none ${active ? 'bg-secondary text-secondary-foreground shadow-sm' : 'text-primary-foreground'} `}>
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavigationLinks;

