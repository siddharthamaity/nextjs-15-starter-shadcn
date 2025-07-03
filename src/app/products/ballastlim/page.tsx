import Image from 'next/image';

import DownloadButton from '@/components/DownloadButton';
import Navigation from '@/components/ProductNavigation';

import { Anchor, Ban, Construction, Shield, Volume2 } from 'lucide-react';

export default function BallastlimPage() {
    const advantages = [
        { icon: Ban, text: 'Hindrer løs pukk i å fly av sporet' },
        { icon: Shield, text: 'Hindrer hærverk' },
        { icon: Volume2, text: 'Reduserer støy' },
        { icon: Construction, text: 'Forsterker pukkoverflaten' },
        { icon: Anchor, text: 'Stabiliserer pukken langs jernbanen og ved brokrysninger' }
    ];

    return (
        <div className='min-h-screen bg-gray-50'>
            <Navigation />

            <main className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
                    <div className='p-8 lg:p-12'>
                        {/* Header with gradient background */}
                        <div className='mb-8 rounded-lg border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 to-yellow-100 p-6'>
                            <h1 className='text-3xl leading-tight font-bold text-gray-900 md:text-4xl'>
                                Termaren TM29 til forsterking av ballast- Liming av pukk langs jernbane, sporvei og
                                undergrunnspor
                            </h1>
                        </div>

                        {/* Images Section with enhanced styling */}
                        <div className='mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                            <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
                                <Image
                                    src='/assets/lim/IMG_1478.JPG'
                                    alt='Ballastlim bilde 1'
                                    width={500}
                                    height={400}
                                    className='h-auto w-full object-cover'
                                />
                            </div>
                            <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
                                <Image
                                    src='/assets/lim/lim.PNG'
                                    alt='Ballastlim bilde 2'
                                    width={500}
                                    height={400}
                                    className='h-auto w-full object-cover'
                                />
                            </div>
                        </div>

                        {/* Enhanced description section */}
                        <section className='mb-8'>
                            <div className='mb-8 space-y-6'>
                                <div className='rounded-lg border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 p-6'>
                                    <p className='text-lg leading-relaxed font-medium text-gray-800'>
                                        Stadig høyere hastigheter og økt belastning på sporene betyr at jernbanelinjer
                                        og deres underlag krever mer og mer vedlikehold. Særlig utsatte er
                                        planoverganger og jernbanebroer med overgang mellom stiv og ballastert
                                        konstruksjon, samt limskjøter og sporvekselmotorer.
                                    </p>
                                </div>

                                <div className='rounded-lg border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 p-6'>
                                    <p className='text-lg leading-relaxed font-medium text-gray-800'>
                                        Termaren TM29 limer det øverste laget av ballast med en spesiell, miljøvennlig
                                        syntetisk harpiks på steder som krever regelmessig vedlikehold. Ballasten, som
                                        blir svært fast, men samtidig elastisk og vannpermeabel, stabiliserer sporene,
                                        reduserer vedlikeholdskostnader og forbedrer reiseopplevelsen.
                                    </p>
                                </div>
                            </div>

                            {/* Enhanced advantages section */}
                            <div className='mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                                <div className='bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4'>
                                    <h2 className='flex items-center gap-2 text-xl font-bold text-white'>
                                        <Shield className='h-6 w-6' />
                                        Liming av pukk har følgende fordeler
                                    </h2>
                                </div>

                                <div className='bg-gradient-to-b from-amber-50 to-white p-6'>
                                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                                        {advantages.map((advantage, index) => {
                                            const IconComponent = advantage.icon;
                                            return (
                                                <div
                                                    key={index}
                                                    className='flex items-center gap-3 rounded-lg border border-amber-100 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md'>
                                                    <div className='flex-shrink-0 rounded-full bg-amber-100 p-2'>
                                                        <IconComponent className='h-5 w-5 text-amber-600' />
                                                    </div>
                                                    <p className='leading-relaxed font-medium text-gray-700'>
                                                        {advantage.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Enhanced downloads section */}
                        <div className='border-t pt-8'>
                            <div className='mb-6 flex items-center gap-3'>
                                <svg
                                    className='h-6 w-6 text-amber-600'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                                    />
                                </svg>
                                <h2 className='text-2xl font-bold text-gray-900'>Dokumentasjon</h2>
                            </div>

                            <div className='flex flex-col gap-4 sm:flex-row'>
                                <DownloadButton href='/assets/lim/Produktblad_Ballastlim.pdf'>
                                    Produktblad ballastlim
                                </DownloadButton>
                                <DownloadButton
                                    href='/assets/lim/EN-L-L5000-A1-ballast_bonding_V1.0.pdf'
                                    variant='secondary'>
                                    Installasjonsmanual
                                </DownloadButton>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
