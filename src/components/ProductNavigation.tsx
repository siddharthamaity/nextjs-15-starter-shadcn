import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className='border-b bg-white shadow-sm'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between py-4'>
                    <Link
                        href='/products'
                        className='text-2xl font-bold text-gray-900 transition-colors hover:text-blue-600'>
                        Produkter
                    </Link>

                    <div className='hidden space-x-8 md:flex'>
                        <Link href='/products/isoblock' className='text-gray-700 transition-colors hover:text-blue-600'>
                            Isoblock
                        </Link>
                        <Link
                            href='/products/kabelkanaler'
                            className='text-gray-700 transition-colors hover:text-blue-600'>
                            Kabelkanaler
                        </Link>
                        <Link
                            href='/products/ballastlim'
                            className='text-gray-700 transition-colors hover:text-blue-600'>
                            Ballastlim
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
