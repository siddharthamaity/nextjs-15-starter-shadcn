import Image from 'next/image';

import DownloadButton from '@/components/DownloadButton';
import Navigation from '@/components/ProductNavigation';

import { Award, FileText, Hourglass, Thermometer, TrendingDown, Users, Zap } from 'lucide-react';

export default function IsoblockPage() {
    const benefits = [
        { icon: TrendingDown, text: 'Opptil 50% energibesparelse' },
        { icon: Thermometer, text: 'Effektiv utnyttelse av sporvekselvarme' },
        { icon: Zap, text: 'Økt tilgjengelighet av sporvekslere' },
        { icon: Hourglass, text: 'Lang produktlevetid på 20 år' }
    ];

    return (
        <div className='min-h-screen bg-gray-50'>
            <Navigation />
            <main className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
                    <div className='p-8 lg:p-12'>
                        {/* Simplified header */}
                        <div className='mb-8 rounded-lg border-l-4 border-[#f3661a] bg-gray-50 p-6'>
                            <h1 className='mb-2 text-4xl font-bold text-[#58565b]'>Isoblock</h1>
                            <p className='text-lg font-medium text-gray-600'>
                                Innovativ isolasjonsløsning for sporvekselvarme
                            </p>
                        </div>

                        {/* Simplified Images Section */}
                        <div className='mb-12 w-full'>
                            <div className='flex flex-col gap-6 sm:flex-row'>
                                <div className='flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                                    <Image
                                        src='/assets/isoblock/isoblock_produkttegning.PNG'
                                        alt='Isoblock produkttegning'
                                        width={500}
                                        height={400}
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                                <div className='flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                                    <Image
                                        src='/assets/isoblock/Eitrestraumen_1.JPG'
                                        alt='Isoblock installasjon'
                                        width={500}
                                        height={400}
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Simplified Description Section */}
                        <section className='mb-12'>
                            <div className='mb-6 rounded-lg border-l-4 border-[#f3661a] bg-orange-50 p-6'>
                                <p className='text-lg leading-relaxed font-medium text-[#58565b]'>
                                    Isoblock gjør det mulig for skinnene å holde på tilstrekkelig varme til å smelte snø
                                    og is, og kan i gjennomsnitt gi opptil 50 % energibesparelse. Den syntetiske
                                    isolasjonen sørger for at varmen som brukes til sporvekselvarme utnyttes på en svært
                                    effektiv måte. Vi har mange referanser fra fornøyde kunder som forteller om gode
                                    resultater ved bruk av Isoblock.
                                </p>
                            </div>

                            {/* Benefits + Image Side-by-Side */}
                            <div className='flex flex-col gap-8 lg:flex-row'>
                                {/* Left: Benefits */}
                                <div className='w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:w-1/2'>
                                    <div className='bg-[#58565b] px-6 py-4'>
                                        <h2 className='flex items-center gap-2 text-2xl font-bold text-white'>
                                            <Zap className='h-7 w-7' />
                                            Hovedfordeler
                                        </h2>
                                    </div>
                                    <div className='bg-gray-50 p-6'>
                                        <div className='flex flex-col gap-4'>
                                            {benefits.map((benefit, index) => {
                                                const IconComponent = benefit.icon;
                                                
return (
                                                    <div
                                                        key={index}
                                                        className='flex flex-1 flex-col items-center rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:border-[#f3661a] hover:shadow-md'>
                                                        <div className='mb-3 rounded-full bg-orange-100 p-3'>
                                                            <IconComponent className='h-6 w-6 text-[#f3661a]' />
                                                        </div>
                                                        <p className='leading-relaxed font-medium text-[#58565b]'>
                                                            {benefit.text}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Image */}
                                <div className='flex w-full items-center justify-center lg:w-1/2'>
                                    <Image
                                        src='/assets/isoblock/Ny_isoblock_langs_skinne_3.JPG'
                                        alt='Isoblock installasjon'
                                        width={600}
                                        height={400}
                                        className='h-auto w-full rounded-xl border border-gray-200 object-cover shadow-sm'
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Simplified Awards Section */}
                        <div className='mb-12'>
                            <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                                <div className='bg-[#f3661a] px-6 py-4'>
                                    <h2 className='flex items-center gap-2 text-2xl font-bold text-white'>
                                        <Award className='h-7 w-7' />
                                        Utmerkelser
                                    </h2>
                                </div>
                                <div className='bg-gray-50 p-6'>
                                    <p className='mb-6 text-lg leading-relaxed text-[#58565b]'>
                                        Produktet har vunnet flere innovasjonspriser ved blant annet Rail Tech Europe og
                                        European Rail Congress for sine fremragende resultater og innovasjonsevne.
                                    </p>
                                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                                        <div className='overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                                            <Image
                                                src='/assets/isoblock/Award_isoblock-1.png?height=200&width=300'
                                                alt='Award Isoblock'
                                                width={300}
                                                height={200}
                                                className='h-auto w-full [transform:rotate(0.5deg)] object-cover'
                                            />
                                            <div className='border-t border-gray-100 bg-white p-3'>
                                                <p className='text-sm font-medium text-[#58565b]'>
                                                    Rail Tech Europe Award
                                                </p>
                                            </div>
                                        </div>
                                        <div className='overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                                            <Image
                                                src='/assets/isoblock/Award_Isoblock_mer_utfyllende-1.png?height=200&width=300'
                                                alt='Award Isoblock utfyllende'
                                                width={300}
                                                height={200}
                                                className='h-auto w-full object-cover'
                                            />
                                            <div className='border-t border-gray-100 bg-white p-3'>
                                                <p className='text-sm font-medium text-[#58565b]'>
                                                    European Rail Congress Award
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simplified Customer Reference Section */}
                        <div className='mb-12'>
                            <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                                <div className='bg-gray-50 p-6'>
                                    <p className='mb-6 text-lg leading-relaxed text-[#58565b]'></p>
                                    <div className='overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                                        <Image
                                            src='/assets/isoblock/Montering_av_gammel_isoblock.JPG'
                                            alt='Montering av gammel isoblock'
                                            width={600}
                                            height={300}
                                            className='h-auto w-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simplified Downloads Section */}
                        <div className='border-t border-gray-200 pt-8'>
                            <div className='mb-6 flex items-center gap-3'>
                                <FileText className='h-6 w-6 text-[#f3661a]' />
                                <h2 className='text-2xl font-bold text-[#58565b]'>Dokumentasjon</h2>
                            </div>
                            <div className='flex flex-col gap-4 sm:flex-row'>
                                <DownloadButton href='/assets/isoblock/Dokumentasjon_Isoblock.pdf'>
                                    Dokumentasjon Isoblock
                                </DownloadButton>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
