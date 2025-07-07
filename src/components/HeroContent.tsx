import Link from 'next/link';

export default function HeroContent() {
    return (
        <>
            <h1 className='mb-6 text-5xl font-bold leading-tight md:text-7xl'>
                <span className='text-[#f3661a] underline decoration-4'>Steelco-Teknikk</span>
                <span className='block text-white'>
                    din leverandør innen kabelkanaler i miljøvennlig plast og isolasjon av sporvekslere
                </span>
            </h1>
            <div className='flex flex-col justify-start gap-4 sm:flex-row'>
                <Link
                    href='/products'
                    className='transform rounded-lg bg-[#f3661a] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#f3661a]'>
                    Våre produkter
                </Link>
                <Link
                    href='/contact'
                    className='rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900'>
                    Kontakt oss
                </Link>
            </div>
        </>
    );
}
