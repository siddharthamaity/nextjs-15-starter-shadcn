import Image from 'next/image';

import DownloadButton from '@/components/DownloadButton';
import Navigation from '@/components/ProductNavigation';

export default function BallastlimPage() {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navigation />

            <main className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
                    <div className='p-8 lg:p-12'>
                        <h1 className='mb-8 text-4xl font-bold text-gray-900'>
                            Termaren TM29 – Forsterking av ballast
                        </h1>

                        {/* Images Section */}
                        <div className='mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                            <Image
                                src='/placeholder.svg?height=400&width=500'
                                alt='Ballastlim bilde 1'
                                width={500}
                                height={400}
                                className='w-full rounded-lg shadow-md'
                            />
                            <Image
                                src='/placeholder.svg?height=400&width=500'
                                alt='Ballastlim bilde 2'
                                width={500}
                                height={400}
                                className='w-full rounded-lg shadow-md'
                            />
                        </div>

                        {/* Description */}
                        <div className='prose prose-lg mb-8 max-w-none'>
                            <p className='mb-6 text-lg leading-relaxed text-gray-700'>
                                Ved høy hastighet og tung belastning på jernbanespor oppstår det behov for forsterking
                                av ballast for å sikre sporstabilitet og redusere vedlikeholdskostnader. Termaren TM29
                                er en miljøvennlig harpiks som gir effektiv stabilisering av ballast og øker sporenes
                                levetid betydelig.
                            </p>

                            <h2 className='mb-4 text-2xl font-semibold text-gray-900'>Fordeler:</h2>
                            <ul className='space-y-3 text-gray-700'>
                                <li>• Miljøvennlig og bærekraftig løsning</li>
                                <li>• Betydelig reduksjon i vedlikeholdskostnader</li>
                                <li>• Økt sporstabilitet ved høye hastigheter</li>
                                <li>• Forlenget levetid for jernbanespor</li>
                                <li>• Enkel applikasjon og rask herding</li>
                                <li>• Motstandsdyktig mot værpåkjenninger</li>
                                <li>• Reduserer støv og partikkelspredning</li>
                            </ul>
                        </div>

                        {/* Downloads */}
                        <div className='border-t pt-8'>
                            <h2 className='mb-6 text-2xl font-bold text-gray-900'>Dokumentasjon</h2>
                            <div className='flex flex-col gap-4 sm:flex-row'>
                                <DownloadButton href='/Produktblad_ballastlim.pdf'>
                                    Produktblad ballastlim
                                </DownloadButton>
                                <DownloadButton href='/ballast_bonding.pdf' variant='secondary'>
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
