import Image from 'next/image';

import DownloadButton from './DownloadButton';
import {
    CheckCircle,
    DollarSign,
    FileText,
    Hammer,
    PackageCheck,
    Recycle,
    Scissors,
    ShieldCheck,
    Weight,
    Wrench,
    Zap
} from 'lucide-react';

export default function HeatpointSection() {
    const advantages = [
        { icon: Weight, text: 'Lav vekt – enkel å bære og bruke.' },
        { icon: PackageCheck, text: 'Ingen tilkoblingsdeler.' },
        { icon: Recycle, text: 'Miljøvennlige – laget av resirkulert plast og er igjen resirkulerbare.' },
        { icon: ShieldCheck, text: 'Hvert deksel kan åpnes individuelt.' },
        { icon: Wrench, text: 'Kanalene kan tilpasses på stedet uten kraftig verktøy.' },
        { icon: Zap, text: 'Jording eller isolasjon er ikke nødvendig.' },
        { icon: DollarSign, text: 'Kostnadsbesparende pga rask og enkel legging.' },
        { icon: Hammer, text: '100% vedlikeholdsfri.' }
    ];

    return (
        <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
            <div className='p-8 lg:p-12'>
                {/* Simplified header */}
                <div className='mb-8 rounded-lg border-l-4 border-[#f3661a] bg-gray-50 p-6'>
                    <h1 className='text-4xl font-bold text-[#58565b]'>Heatpoint MAX-2N og 3N Kabelkanal</h1>
                </div>

                {/* Simplified Images Section */}
                <div className='mb-12 w-full'>
                    <div className='flex flex-col gap-6 sm:flex-row'>
                        <div className='flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                            <Image
                                src='/assets/kabelkanal_heatpoint/Kabelkanal_1.PNG'
                                alt='Heatpoint kabelkanal'
                                width={400}
                                height={300}
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <div className='flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                            <Image
                                src='/assets/kabelkanal_heatpoint/kabelkanal_2.jpeg'
                                alt='Heatpoint kabelkanal installasjon'
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
                            Kritiske systemer er avhengige av kabler og rør som ligger i eller på bakken. For å sikre
                            pålitelighet og tilgjengelighet, er det viktig å beskytte disse kablene og rørene best mulig
                            mot ytre påvirkninger.
                        </p>
                        <p className='mb-4 text-lg leading-relaxed font-medium text-[#58565b]'>
                            Vi leverer et plastbasert kabelkanalsystem fra Heatpoint som gir optimal beskyttelse av
                            slike kabler og rør. Dette innovative systemet består av et bredt utvalg komponenter og
                            tilbehør, noe som gir fleksibilitet til å finne egnede løsninger i alle situasjoner.
                            Systemet er utviklet for å fungere selv i de mest krevende miljøer – for eksempel innen
                            jernbaneinfrastruktur.
                        </p>
                        <p className='text-lg leading-relaxed font-medium text-[#58565b]'>
                            Plastkanaler sikrer at totalkostnadene blir lavere enn tradisjonell betong. Selv om de veier
                            lite sikrer utformingen av kabelkanalen at den har høy stabilitet og beskytter effektivt
                            kabler og linjer mot påvirkning utenfra.
                        </p>
                    </div>

                    {/* Simplified advantages section */}
                    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                        <div className='bg-[#58565b] px-6 py-4'>
                            <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                                <CheckCircle className='h-6 w-6' />
                                Fordeler
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
                </section>

                {/* Simplified downloads section */}
                <div className='border-t border-gray-200 pt-8'>
                    <div className='mb-6 flex items-center gap-3'>
                        <FileText className='h-6 w-6 text-[#f3661a]' />
                        <h3 className='text-xl font-bold text-[#58565b]'>Dokumentasjon</h3>
                    </div>
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
