import Link from 'next/link';

import HeroSection from '../../components/HeroSection';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <main className='mx-auto flex max-w-7xl flex-col justify-center gap-6 px-3 py-12 font-[family-name:var(--font-geist-sans)] sm:gap-12 sm:px-0'>
                <section className='container mx-auto px-4'>
                    <h2 className='mb-8 text-center text-3xl font-bold'>Steelco-Teknikk</h2>
                    <p className='mx-auto max-w-4xl text-center text-lg'>
                        Vi er et familiedrevet selskap som siden 2005 har spesialisert oss på å
                        levere gode, miljøvennlige produkter innen kabelbeskyttelse og isolering.
                        Vi er en utfordrer til tradisjonelle leverandører som leverer kabelkanaler
                        og kummer i betong. Våre produkter lages av returavfall og har 10% av Co2
                        utslippet til tradisjonelle produkter med identisk kvalitet. Det er også
                        billig å være miljøvennlig og det kommer også kundene til gode. Vi har
                        kontorer og et lite bufferlager på Eiksmarka i Bærum, samt hovedlager i
                        Fredrikstad. Steelco- Teknikk leverer til firmaer og sluttbrukere.
                    </p>
                </section>
            </main>
            <footer className='bg-gray-100 py-8 dark:bg-gray-800'>
                <div className='container mx-auto px-4 text-center text-gray-600 dark:text-gray-300'>
                    <div className='mb-4'>
                        <Link
                            href='https://fflive.bisnode.no/988533602_NO_a36f9303-8f22-44bc-8ba9-9376975f3ec4'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='underline hover:text-gray-800 dark:hover:text-white'
                        >
                            Se kredittverdighet
                        </Link>
                    </div>
                    <p>Steelco-Teknikk A/S</p>
                    <p>Copyright © 2025. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
