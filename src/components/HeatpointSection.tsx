import Image from 'next/image';

import DownloadButton from './DownloadButton';
import { CheckCircle, Recycle, Shield, Weight, Wrench, Zap } from 'lucide-react';

export default function HeatpointSection() {
    const advantages = [
        { icon: Weight, text: 'Lav vekt - enkel å bære og bruke.' },
        { icon: Shield, text: 'Stabilt design - "honningstruktur" i deksel og kanal og kanalen har doble vegger.' },
        { icon: CheckCircle, text: 'Ingen tilkoblingsdeler.' },
        { icon: CheckCircle, text: 'Vedlikeholdsfrie.' },
        { icon: Recycle, text: 'Miljøvennlige - laget av resirkulert plast og er igjen resirkulerbare.' },
        { icon: CheckCircle, text: 'Hvert deksel kan åpnes individuelt.' },
        { icon: Wrench, text: 'Kanalene kan tilpasses på stedet uten kraftig verktøy.' },
        { icon: CheckCircle, text: 'Lokkene er sammenkoblet til kanalen også i åpen tilstand.' },
        { icon: Zap, text: 'Jording eller isolasjon er ikke nødvendig.' },
        { icon: CheckCircle, text: 'Kostnadsbesparende pga rask og enkel legging.' },
        { icon: CheckCircle, text: '100% vedlikeholdsfri.' },
        { icon: CheckCircle, text: 'Lokkene har en anti-skli struktur.' }
    ];

    return (
        <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
            <div className='p-8 lg:p-12'>
                <h1 className='mb-8 text-4xl font-bold text-gray-900'>Heatpoint MAX-2N og 3N Kabelkanal</h1>

                <div className='mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    <Image
                        src='/assets/kabelkanal_heatpoint/Kabelkanal_1.PNG'
                        alt='Kabelkanal 1'
                        width={400}
                        height={300}
                        className='w-full rounded-lg shadow-md'
                    />
                    <Image
                        src='/assets/kabelkanal_heatpoint/kabelkanal_2.jpeg'
                        alt='Kabelkanal 2'
                        width={400}
                        height={300}
                        className='w-full rounded-lg shadow-md'
                    />
                </div>

                {/* Enhanced description section */}
                <section className='mb-8'>
                    <div className='mb-8 space-y-6'>
                        <div className='rounded-lg border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 p-6'>
                            <p className='text-lg leading-relaxed font-medium text-gray-800'>
                                Kritiske systemer er avhengige av kabler og rør som ligger i eller på bakken. For å
                                sikre pålitelighet og tilgjengelighet, er det viktig å beskytte disse kablene og rørene
                                best mulig mot ytre påvirkninger.
                            </p>
                        </div>

                        <div className='rounded-lg border border-gray-200 bg-gray-50 p-6'>
                            <p className='text-lg leading-relaxed text-gray-700'>
                                Vi leverer et plastbasert kabelkanalsystem fra Heatpoint som gir optimal beskyttelse av
                                slike kabler og rør. Dette innovative systemet består av et bredt utvalg komponenter og
                                tilbehør, noe som gir fleksibilitet til å finne egnede løsninger i alle situasjoner.
                                Systemet er utviklet for å fungere selv i de mest krevende miljøer – for eksempel innen
                                jernbaneinfrastruktur.
                            </p>
                        </div>

                        <div className='rounded-lg border border-green-200 bg-green-50 p-6'>
                            <p className='text-lg leading-relaxed text-gray-700'>
                                Plastkanaler sikrer at totalkostnadene blir lavere enn tradisjonell betong. Selv om de
                                veier lite sikrer utformingen av kabelkanalen at den har høy stabilitet og beskytter
                                effektivt kabler og linjer mot påvirkning utenfra.
                            </p>
                        </div>
                    </div>

                    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                        <div className='bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4'>
                            <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                                <CheckCircle className='h-6 w-6' />
                                Fordeler
                            </h3>
                        </div>

                        <div className='p-6'>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                                {advantages.map((advantage, index) => {
                                    const IconComponent = advantage.icon;
                                    
return (
                                        <div
                                            key={index}
                                            className='flex items-start gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50'>
                                            <div className='mt-0.5 flex-shrink-0'>
                                                <IconComponent className='h-5 w-5 text-green-600' />
                                            </div>
                                            <p className='leading-relaxed text-gray-700'>{advantage.text}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <div className='border-t pt-8'>
                    <h3 className='mb-4 text-xl font-semibold text-gray-900'>Dokumentasjon</h3>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                        <DownloadButton href='/assets/kabelkanal_heatpoint/MAX_brochure_ENGELS_PP.pdf'>
                            Brosjyre Heatpoint kabelkanal
                        </DownloadButton>
                        <DownloadButton
                            href='/assets/kabelkanal_heatpoint/EN-H5070-ISV-MAX-N_(PP)_manual_version_1.1.pdf'
                            variant='secondary'>
                            Installasjonsmanual
                        </DownloadButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
