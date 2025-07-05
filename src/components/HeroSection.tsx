import Link from 'next/link';

interface HeroSectionProps {
    scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
    return (
        <section className='relative h-screen overflow-hidden'>
            {/* Background Image with Parallax Effect */}
            <div
                className='absolute inset-0 mt-[-5%] h-[120%] w-full bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url('/hero_image.JPG?height=1080&width=1920')`,
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            />

            {/* Dark Overlay with Blur Effect */}
            <div className='absolute inset-0 bg-black/50 backdrop-blur-[2px]' />

            {/* Main Content */}
            <div className='relative z-10 flex h-full items-center justify-center px-4'>
                <div
                    className='max-w-4xl text-white'
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`
                    }}>
                    <h1 className='mb-6 text-5xl leading-tight font-bold md:text-7xl'>
                        Steelco Teknikk -
                        <span className='block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>
                            din leverandør innen kabelkanaler i miljøvennlig plast og isolasjon av sporvekslere
                        </span>
                    </h1>

                    <div className='flex flex-col justify-start gap-4 sm:flex-row'>
                        <Link
                            href='/contact'
                            className='transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700'>
                            Kontakt oss
                        </Link>
                        <Link
                            href='/products'
                            className='rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900'>
                            Våre produkter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
