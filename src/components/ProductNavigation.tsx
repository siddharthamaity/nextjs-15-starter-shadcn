'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className='border-b bg-white shadow-sm'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between py-4'>
                    <Link href='/products' className='text-2xl font-bold text-[#58565b] transition-colors'>
                        Produkter
                    </Link>

                    <div className='mr-4 hidden space-x-8 md:flex'>
                        <Link
                            href='/products/isoblock'
                            className={`px-3 py-2 text-lg transition-all duration-200 ${
                                pathname === '/products/isoblock'
                                    ? 'font-bold text-[#58565b] underline decoration-[#f3661a] underline-offset-4'
                                    : 'text-[#58565b] hover:text-[#f3661a]'
                            }`}>
                            Isoblock
                        </Link>
                        <Link
                            href='/products/kabelkanaler'
                            className={`px-3 py-2 text-lg transition-all duration-200 ${
                                pathname === '/products/kabelkanaler'
                                    ? 'font-bold text-[#58565b] underline decoration-[#f3661a] underline-offset-4'
                                    : 'text-[#58565b] hover:text-[#f3661a]'
                            }`}>
                            Kabelkanaler
                        </Link>
                        <Link
                            href='/products/ballastlim'
                            className={`px-3 py-2 text-lg transition-all duration-200 ${
                                pathname === '/products/ballastlim'
                                    ? 'font-bold text-[#58565b] underline decoration-[#f3661a] underline-offset-4'
                                    : 'text-[#58565b] hover:text-[#f3661a]'
                            }`}>
                            Ballastlim
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
