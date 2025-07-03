import Image from 'next/image';

import DownloadButton from './DownloadButton';
import { CheckCircle, Clock, Globe, Recycle, Shield, Weight, Wrench, Zap } from 'lucide-react';

export default function WirthweinSection() {
    const advantages = [
        { icon: Weight, text: 'Lav vekt' },
        { icon: Recycle, text: 'Ressursbesparende produksjon' },
        { icon: Recycle, text: 'Gjenbrukbarhet på ulike brukssteder' },
        { icon: Wrench, text: 'Enkel installasjon uten løfteutstyr' },
        { icon: Zap, text: 'Integrert koblingssystem for rask montering og demontering' },
        { icon: Clock, text: 'Lang levetid' },
        { icon: Shield, text: 'Vedlikeholdsfri' }
    ];

    return (
        <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
            <div className='p-8 lg:p-12'>
                <h2 className='mb-8 text-4xl font-bold text-gray-900'>Wirthwein kabelkanal Type 1 og 2</h2>

                <div className='mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    <Image
                        src='/assets/kabelkanal_wirthwein/Wirthwein_kabelkanal_bilde.jpg'
                        alt='Wirthwein kabelkanal'
                        width={400}
                        height={300}
                        className='w-full rounded-lg shadow-md'
                    />
                    <Image
                        src='/assets/kabelkanal_wirthwein/Wirthwein_kabelkan_bilde_2.PNG'
                        alt='Wirthwein bilde 2'
                        width={400}
                        height={300}
                        className='w-full rounded-lg shadow-md'
                    />
                </div>

                {/* Enhanced description section */}
                <section className='mb-8'>
                    <div className='mb-8 space-y-6'>
                        <div className='rounded-lg border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 p-6'>
                            <p className='text-lg leading-relaxed font-medium text-gray-800'>
                                Plastkabelkanaler produsert av Wirthwein tilbyr den optimale løsningen for installasjon
                                av strøm- og datalinjer. Så langt har Deutsche Bahn AG og mange andre selskaper over
                                hele verden installert mer enn 1 000 000 meter med kabelkanaler.
                            </p>
                        </div>

                        <div className='rounded-lg border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 p-6'>
                            <p className='mb-4 text-lg leading-relaxed font-medium text-gray-800'>
                                Wirthwein kabelkanal kombinerer kvalitet, økonomi og miljøvennlighet. Sammenlignet med
                                tradisjonelle kabelkanaler i betong, reduserer den spesielt utslipp og kostnader
                                gjennom:
                            </p>
                        </div>
                    </div>

                    {/* Enhanced advantages section */}
                    <div className='mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                        <div className='bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4'>
                            <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                                <CheckCircle className='h-6 w-6' />
                                Hovedfordeler
                            </h3>
                        </div>

                        <div className='p-6'>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                                {advantages.map((advantage, index) => {
                                    const IconComponent = advantage.icon;
                                    
return (
                                        <div
                                            key={index}
                                            className='flex items-center gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50'>
                                            <div className='flex-shrink-0'>
                                                <IconComponent className='h-5 w-5 text-purple-600' />
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

                    {/* Enhanced application section */}
                    <div className='rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-6'>
                        <div className='mb-3 flex items-start gap-3'>
                            <Globe className='mt-1 h-6 w-6 flex-shrink-0 text-blue-600' />
                            <h4 className='text-lg font-semibold text-gray-900'>Bredt bruksområde</h4>
                        </div>
                        <p className='text-lg leading-relaxed text-gray-700'>
                            Kabelkanalene fra Wirthwein brukes også i solcelleanlegg, vindkraftverk og andre
                            installasjoner. Vår erfaring, kombinert med det brede bruksområdet for Wirthweins
                            kabelkanaler, gir mange løsninger for et stort spekter av konstruksjonsmessige krav. Våre
                            kunder drar nytte av rask, fleksibel og sikker installasjon av sine signal- og
                            kommunikasjonsløsninger i våre kabelkanalsystemer.
                        </p>
                    </div>
                </section>

                {/* Enhanced video section */}
                <div className='mb-8'>
                    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                        <div className='bg-gradient-to-r from-red-500 to-red-600 px-6 py-4'>
                            <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M8 5v14l11-7z' />
                                </svg>
                                Produktvideo
                            </h3>
                        </div>
                        <div className='p-6'>
                            <div className='aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md'>
                                <iframe
                                    src='https://www.youtube.com/embed/NHIFib0Rn-U?start=162'
                                    title='Wirthwein kabelkanal video'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                    className='h-64 w-full lg:h-96'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t pt-8'>
                    <h3 className='mb-4 text-xl font-semibold text-gray-900'>Dokumentasjon</h3>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                        <DownloadButton href='/assets/kabelkanal_wirthwein/WWAG_PRO_Railway-Cable-duct_en.pdf'>
                            Produktbrosjyre
                        </DownloadButton>
                        <DownloadButton
                            href='/assets/kabelkanal_wirthwein/WWAG_PRO_Assembly-Instructions-Cable-Duct_en.pdf'
                            variant='secondary'>
                            Installasjonsinstruksjon
                        </DownloadButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
