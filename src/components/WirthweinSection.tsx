import Image from 'next/image';

import DownloadButton from './DownloadButton';
import { BicepsFlexed, CheckCircle, Clock, FileText, Globe, Recycle, Shield, Weight, Wrench, Zap } from 'lucide-react';

export default function WirthweinSection() {
    const advantages = [
        { icon: Weight, text: 'Lav vekt' },
        { icon: Recycle, text: 'Ressursbesparende produksjon' },
        { icon: Recycle, text: 'Gjenbrukbarhet på ulike brukssteder' },
        { icon: Wrench, text: 'Enkel installasjon uten løfteutstyr' },
        { icon: Zap, text: 'Integrert koblingssystem for rask montering og demontering' },
        { icon: Clock, text: 'Lang levetid' },
        { icon: Shield, text: 'Vedlikeholdsfri' },
        { icon: BicepsFlexed, text: 'Høy bæreevne i henhold til DIN EN 124-1 / DIN EN 1433' }
    ];

    return (
        <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
            <div className='p-8 lg:p-12'>
                {/* Simplified header */}
                <div className='mb-8 rounded-lg border-l-4 border-[#f3661a] bg-gray-50 p-6'>
                    <h2 className='text-4xl font-bold text-[#58565b]'>Wirthwein kabelkanal Type 1 og 2</h2>
                </div>

                {/* Simplified Images Section */}
                <div className='mb-12 w-full'>
                    <div className='flex flex-col gap-6 sm:flex-row'>
                        <div className='flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                            <Image
                                src='/assets/kabelkanal_wirthwein/Wirthwein_kabelkanal_bilde.jpg'
                                alt='Wirthwein kabelkanal'
                                width={400}
                                height={300}
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <div className='flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                            <Image
                                src='/assets/kabelkanal_wirthwein/Wirthwein_kabelkan_bilde_2.PNG'
                                alt='Wirthwein kabelkanal installasjon'
                                width={400}
                                height={300}
                                className='h-full w-full object-cover'
                            />
                        </div>
                    </div>
                </div>

                {/* Simplified description section */}
                <section className='mb-8'>
                    <div className='mb-6 rounded-lg border-l-4 border-[#f3661a] bg-orange-50 p-6'>
                        <p className='mb-4 text-lg leading-relaxed font-medium text-[#58565b]'>
                            Plastkabelkanaler produsert av Wirthwein tilbyr den optimale løsningen for installasjon av
                            strøm- og datalinjer. Så langt har Deutsche Bahn AG og mange andre selskaper over hele
                            verden installert mer enn 1 000 000 meter med kabelkanaler.
                        </p>
                        <p className='mb-4 text-lg leading-relaxed font-medium text-[#58565b]'>
                            Kabelkanalene fra Wirthwein brukes også i solcelleanlegg, vindkraftverk og andre
                            installasjoner. Vår erfaring, kombinert med det brede bruksområdet for Wirthweins
                            kabelkanaler, gir mange løsninger for et stort spekter av konstruksjonsmessige krav. Våre
                            kunder drar nytte av rask, fleksibel og sikker installasjon av sine signal- og
                            kommunikasjonsløsninger i våre kabelkanalsystemer.
                        </p>
                        <p className='text-lg leading-relaxed font-medium text-[#58565b]'>
                            Wirthwein kabelkanal kombinerer kvalitet, økonomi og miljøvennlighet. Sammenlignet med
                            tradisjonelle kabelkanaler i betong, reduserer den spesielt utslipp og kostnader gjennom:
                        </p>
                    </div>

                    {/* Simplified advantages section */}
                    <div className='mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                        <div className='bg-[#58565b] px-6 py-4'>
                            <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                                <CheckCircle className='h-6 w-6' />
                                Hovedfordeler
                            </h3>
                        </div>
                        <div className='bg-gray-50 p-6'>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
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

                    {/* <div className='mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6'>
                        <div className='mb-3 flex items-start gap-3'>
                            <Globe className='mt-1 h-6 w-6 flex-shrink-0 text-[#f3661a]' />
                            <h4 className='text-lg font-semibold text-[#58565b]'>Bredt bruksområde</h4>
                        </div>
                        <p className='text-lg leading-relaxed text-[#58565b]'>
                            Kabelkanalene fra Wirthwein brukes også i solcelleanlegg, vindkraftverk og andre
                            installasjoner. Vår erfaring, kombinert med det brede bruksområdet for Wirthweins
                            kabelkanaler, gir mange løsninger for et stort spekter av konstruksjonsmessige krav. Våre
                            kunder drar nytte av rask, fleksibel og sikker installasjon av sine signal- og
                            kommunikasjonsløsninger i våre kabelkanalsystemer.
                        </p>
                    </div>*/}

                    {/* Simplified application section */}
                </section>

                {/* Simplified video section */}
                <div className='mb-8'>
                    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                        <div className='bg-[#f3661a] px-6 py-4'>
                            <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M8 5v14l11-7z' />
                                </svg>
                                Produktvideo
                            </h3>
                        </div>
                        <div className='p-6'>
                            <div className='overflow-hidden rounded-lg border border-gray-200 shadow-sm'>
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

                {/* Simplified downloads section */}
                <div className='border-t border-gray-200 pt-8'>
                    <div className='mb-6 flex items-center gap-3'>
                        <FileText className='h-6 w-6 text-[#f3661a]' />
                        <h3 className='text-xl font-bold text-[#58565b]'>Dokumentasjon</h3>
                    </div>
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
