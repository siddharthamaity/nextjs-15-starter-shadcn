import Image from 'next/image';

import DownloadButton from '@/components/DownloadButton';
import Navigation from '@/components/ProductNavigation';

export default function IsoblockPage() {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navigation />

            <main className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
                    <div className='p-8 lg:p-12'>
                        <h1 className='mb-8 text-4xl font-bold text-gray-900'>Isoblock</h1>

                        {/* Images Section */}
                        <div className='mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                            <div className='space-y-4'>
                                <Image
                                    src='/placeholder.svg?height=400&width=500'
                                    alt='Isoblock produkttegning'
                                    width={500}
                                    height={400}
                                    className='w-full rounded-lg shadow-md'
                                />
                            </div>
                            <div className='space-y-4'>
                                <Image
                                    src='/placeholder.svg?height=400&width=500'
                                    alt='Ny isoblock langs skinne'
                                    width={500}
                                    height={400}
                                    className='w-full rounded-lg shadow-md'
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className='prose prose-lg mb-12 max-w-none'>
                            <p className='text-lg leading-relaxed text-gray-700'>
                                Isoblock gjør det mulig for skinnene å holde på tilstrekkelig varme til å smelte snø og
                                is, og kan i gjennomsnitt gi opptil 50 % energibesparelse. Den syntetiske isolasjonen
                                sørger for at varmen som brukes til sporvekselvarme utnyttes på en svært effektiv måte.
                                Det er også mulig å omsette besparelsene i høyere skinnetemperaturer, noe som innebærer
                                økt tilgjengelighet av sporvekslere.
                            </p>
                        </div>

                        {/* Awards Section */}
                        <div className='mb-12'>
                            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Utmerkelser</h2>
                            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                                <Image
                                    src='/placeholder.svg?height=200&width=300'
                                    alt='Award Isoblock'
                                    width={300}
                                    height={200}
                                    className='w-full rounded-lg shadow-md'
                                />
                                <Image
                                    src='/placeholder.svg?height=200&width=300'
                                    alt='Award Isoblock utfyllende'
                                    width={300}
                                    height={200}
                                    className='w-full rounded-lg shadow-md'
                                />
                            </div>
                        </div>

                        {/* Customer Reference */}
                        <div className='mb-12'>
                            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Kundereferanse</h2>
                            <Image
                                src='/placeholder.svg?height=300&width=600'
                                alt='Montering av gammel isoblock'
                                width={600}
                                height={300}
                                className='w-full rounded-lg shadow-md'
                            />
                        </div>

                        {/* Downloads */}
                        <div className='border-t pt-8'>
                            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Dokumentasjon</h2>
                            <div className='flex flex-col gap-4 sm:flex-row'>
                                <DownloadButton href='/Dokumentasjon_isoblock.pdf'>
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
