import Image from 'next/image';

import DownloadButton from '@/components/DownloadButton';
import Navigation from '@/components/ProductNavigation';

import { Anchor, Ban, Construction, FileText, Shield, Volume2 } from 'lucide-react';

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
                        {/* Simplified header */}
                        <div className='mb-8 rounded-lg border-l-4 border-[#f3661a] bg-gray-50 p-6'>
                            <h1 className='text-3xl leading-tight font-bold text-[#58565b] md:text-4xl'>
                                Termaren TM29 ballastlim
                                <br />
                                <p className='mt-2 text-lg leading-relaxed font-medium text-[#58565b]'>
                                    Til forsterking av ballast, liming av pukk langs jernbane, sporvei og undergrunnspor
                                </p>
                            </h1>
                        </div>

                        {/* Simplified Images Section */}
                        <div className='mb-12 w-full'>
                            <div className='flex flex-col gap-6 sm:flex-row'>
                                <div className='flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                                    <Image
                                        src='/assets/lim/IMG_1478.JPG'
                                        alt='Ballastlim installasjon'
                                        width={500}
                                        height={400}
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                                <div className='flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                                    <Image
                                        src='/assets/lim/lim.PNG'
                                        alt='Ballastlim produkt'
                                        width={500}
                                        height={400}
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Simplified description section */}
                        <section className='mb-12'>
                            <div className='mb-6 rounded-lg border-l-4 border-[#f3661a] bg-orange-50 p-6'>
                                <p className='mb-4 text-lg leading-relaxed font-medium text-[#58565b]'>
                                    Stadig høyere hastigheter og økt belastning på sporene betyr at jernbanelinjer og
                                    deres underlag krever mer og mer vedlikehold. Særlig utsatte er planoverganger og
                                    jernbanebroer med overgang mellom stiv og ballastert konstruksjon, samt limskjøter
                                    og sporvekselmotorer.
                                </p>
                                <p className='text-lg leading-relaxed font-medium text-[#58565b]'>
                                    Termaren TM29 limer det øverste laget av ballast med en spesiell, miljøvennlig
                                    syntetisk harpiks på steder som krever regelmessig vedlikehold. Ballasten, som blir
                                    svært fast, men samtidig elastisk og vannpermeabel, stabiliserer sporene, reduserer
                                    vedlikeholdskostnader og forbedrer reiseopplevelsen.
                                </p>
                            </div>

                            {/* Benefits in single column layout */}
                            <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                                <div className='bg-[#58565b] px-6 py-4'>
                                    <h2 className='flex items-center gap-2 text-xl font-bold text-white'>
                                        <Shield className='h-6 w-6' />
                                        Liming av pukk har følgende fordeler
                                    </h2>
                                </div>
                                <div className='bg-gray-50 p-6'>
                                    <div className='flex flex-col gap-4'>
                                        {advantages.map((advantage, index) => {
                                            const IconComponent = advantage.icon;
                                            
return (
                                                <div
                                                    key={index}
                                                    className='flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#f3661a] hover:shadow-md'>
                                                    <div className='flex-shrink-0 rounded-full bg-orange-100 p-2'>
                                                        <IconComponent className='h-5 w-5 text-[#f3661a]' />
                                                    </div>
                                                    <p className='leading-relaxed font-medium text-[#58565b]'>
                                                        {advantage.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Simplified downloads section */}
                        <div className='border-t border-gray-200 pt-8'>
                            <div className='mb-6 flex items-center gap-3'>
                                <FileText className='h-6 w-6 text-[#f3661a]' />
                                <h2 className='text-2xl font-bold text-[#58565b]'>Dokumentasjon</h2>
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
