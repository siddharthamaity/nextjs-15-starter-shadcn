import Image from 'next/image';

import DownloadButton from '@/components/DownloadButton';
import Navigation from '@/components/ProductNavigation';

import { Award, FileText, Thermometer, TrendingDown, Users, Zap } from 'lucide-react';

export default function IsoblockPage() {
    const benefits = [
        { icon: TrendingDown, text: 'Opptil 50% energibesparelse' },
        { icon: Thermometer, text: 'Effektiv utnyttelse av sporvekselvarme' },
        { icon: Zap, text: 'Økt tilgjengelighet av sporvekslere' }
    ];

    return (
        <div className='min-h-screen bg-gray-50'>
            <Navigation />

            <main className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
                    <div className='p-8 lg:p-12'>
                        {/* Enhanced header */}
                        <div className='mb-8 rounded-lg border-l-4 border-teal-500 bg-gradient-to-r from-teal-50 to-cyan-100 p-6'>
                            <h1 className='mb-2 text-4xl font-bold text-gray-900'>Isoblock</h1>
                            <p className='text-lg font-medium text-teal-700'>
                                Innovativ isolasjonsløsning for sporvekselvarme
                            </p>
                        </div>

                        {/* Enhanced Images Section */}
                        <div className='mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                            <div className='space-y-6'>
                                <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
                                    <Image
                                        src='/assets/isoblock/isoblock_produkttegning.PNG'
                                        alt='Isoblock produkttegning'
                                        width={500}
                                        height={400}
                                        className='h-auto w-full object-cover'
                                    />
                                    <div className='border-t border-teal-100 bg-teal-50 p-3'>
                                        <p className='text-sm font-medium text-teal-800'>Produkttegning</p>
                                    </div>
                                </div>

                                <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
                                    <Image
                                        src='/assets/isoblock/Eitrestraumen_1.JPG'
                                        alt='Isoblock installasjon'
                                        width={500}
                                        height={400}
                                        className='h-auto w-full object-cover'
                                    />
                                    <div className='border-t border-teal-100 bg-teal-50 p-3'>
                                        <p className='text-sm font-medium text-teal-800'>
                                            Installasjon på Eitrestraumen
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-6'>
                                <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
                                    <Image
                                        src='/assets/isoblock/Ny_isoblock_langs_skinne_3.JPG'
                                        alt='Ny isoblock langs skinne'
                                        width={500}
                                        height={400}
                                        className='h-auto w-full object-cover'
                                    />
                                    <div className='border-t border-teal-100 bg-teal-50 p-3'>
                                        <p className='text-sm font-medium text-teal-800'>Isoblock langs skinne</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Description Section */}
                        <section className='mb-12'>
                            <div className='mb-6 rounded-lg border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 p-6'>
                                <p className='text-lg leading-relaxed font-medium text-gray-800'>
                                    Isoblock gjør det mulig for skinnene å holde på tilstrekkelig varme til å smelte snø
                                    og is, og kan i gjennomsnitt gi opptil 50 % energibesparelse. Den syntetiske
                                    isolasjonen sørger for at varmen som brukes til sporvekselvarme utnyttes på en svært
                                    effektiv måte.
                                </p>
                            </div>

                            {/* Key benefits */}
                            <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                                <div className='bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4'>
                                    <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                                        <Zap className='h-6 w-6' />
                                        Hovedfordeler
                                    </h3>
                                </div>

                                <div className='bg-gradient-to-b from-teal-50 to-white p-6'>
                                    <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                                        {benefits.map((benefit, index) => {
                                            const IconComponent = benefit.icon;
                                            return (
                                                <div
                                                    key={index}
                                                    className='flex flex-col items-center rounded-lg border border-teal-100 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:shadow-md'>
                                                    <div className='mb-3 rounded-full bg-teal-100 p-3'>
                                                        <IconComponent className='h-6 w-6 text-teal-600' />
                                                    </div>
                                                    <p className='leading-relaxed font-medium text-gray-700'>
                                                        {benefit.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Enhanced Awards Section */}
                        <div className='mb-12'>
                            <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                                <div className='bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-4'>
                                    <h2 className='flex items-center gap-2 text-2xl font-bold text-white'>
                                        <Award className='h-7 w-7' />
                                        Utmerkelser
                                    </h2>
                                </div>

                                <div className='bg-gradient-to-b from-yellow-50 to-white p-6'>
                                    <p className='mb-6 text-lg leading-relaxed text-gray-700'>
                                        Produktet har vunnet flere innovasjonspriser ved blant annet Rail Tech Europe og
                                        European Rail Congress for sine fremragende resultater og innovasjonsevne.
                                    </p>

                                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                                        <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
                                            <Image
                                                src='/assets/isoblock/Award_isoblock-1.png?height=200&width=300'
                                                alt='Award Isoblock'
                                                width={300}
                                                height={200}
                                                className='h-auto w-full object-cover'
                                            />
                                            <div className='border-t border-yellow-100 bg-yellow-50 p-3'>
                                                <p className='text-sm font-medium text-yellow-800'>
                                                    Rail Tech Europe Award
                                                </p>
                                            </div>
                                        </div>

                                        <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
                                            <Image
                                                src='/assets/isoblock/Award_Isoblock_mer_utfyllende-1.png?height=200&width=300'
                                                alt='Award Isoblock utfyllende'
                                                width={300}
                                                height={200}
                                                className='h-auto w-full object-cover'
                                            />
                                            <div className='border-t border-yellow-100 bg-yellow-50 p-3'>
                                                <p className='text-sm font-medium text-yellow-800'>
                                                    European Rail Congress Award
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Customer Reference Section */}
                        <div className='mb-12'>
                            <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
                                <div className='bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4'>
                                    <h2 className='flex items-center gap-2 text-2xl font-bold text-white'>
                                        <Users className='h-7 w-7' />
                                        Kundereferanse
                                    </h2>
                                </div>

                                <div className='bg-gradient-to-b from-green-50 to-white p-6'>
                                    <p className='mb-6 text-lg leading-relaxed text-gray-700'>
                                        Vi har mange referanser fra fornøyde kunder som forteller om gode resultater ved
                                        bruk av Isoblock.
                                    </p>

                                    <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
                                        <Image
                                            src='/assets/isoblock/Montering_av_gammel_isoblock.JPG'
                                            alt='Montering av gammel isoblock'
                                            width={600}
                                            height={300}
                                            className='h-auto w-full object-cover'
                                        />
                                        <div className='border-t border-green-100 bg-green-50 p-3'>
                                            <p className='text-sm font-medium text-green-800'>Montering av Isoblock</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Downloads Section */}
                        <div className='border-t pt-8'>
                            <div className='mb-6 flex items-center gap-3'>
                                <FileText className='h-6 w-6 text-teal-600' />
                                <h2 className='text-2xl font-bold text-gray-900'>Dokumentasjon</h2>
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
