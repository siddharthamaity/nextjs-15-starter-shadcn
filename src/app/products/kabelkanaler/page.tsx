import Image from 'next/image';

import DownloadButton from '@/components/DownloadButton';
import Navigation from '@/components/ProductNavigation';

export default function KabelkanalerPage() {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navigation />

            <main className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='space-y-12'>
                    {/* Heatpoint MAX Section */}
                    <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
                        <div className='p-8 lg:p-12'>
                            <h1 className='mb-8 text-4xl font-bold text-gray-900'>Heatpoint MAX-2N og 3N Kabelkanal</h1>

                            <div className='mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                                <Image
                                    src='/placeholder.svg?height=300&width=400'
                                    alt='Kabelkanal 1'
                                    width={400}
                                    height={300}
                                    className='w-full rounded-lg shadow-md'
                                />
                                <Image
                                    src='/placeholder.svg?height=300&width=400'
                                    alt='Kabelkanal 2'
                                    width={400}
                                    height={300}
                                    className='w-full rounded-lg shadow-md'
                                />
                            </div>

                            <div className='prose prose-lg mb-8 max-w-none'>
                                <p className='mb-6 text-lg leading-relaxed text-gray-700'>
                                    Heatpoint MAX kabelkanaler gir overlegen beskyttelse og pålitelighet for
                                    jernbaneinfrastruktur. Designet for å tåle ekstreme værforhold og høye belastninger.
                                </p>

                                <h3 className='mb-4 text-xl font-semibold text-gray-900'>Fordeler:</h3>
                                <ul className='space-y-2 text-gray-700'>
                                    <li>• Høy mekanisk styrke og holdbarhet</li>
                                    <li>• Utmerket beskyttelse mot miljøpåvirkninger</li>
                                    <li>• Enkel installasjon og vedlikehold</li>
                                    <li>• Optimalisert for jernbanemiljø</li>
                                    <li>• Lang levetid og lav vedlikeholdskostnad</li>
                                </ul>
                            </div>

                            <div className='border-t pt-8'>
                                <h3 className='mb-4 text-xl font-semibold text-gray-900'>Dokumentasjon</h3>
                                <div className='flex flex-col gap-4 sm:flex-row'>
                                    <DownloadButton href='/max_brochure.pdf'>
                                        Brosjyre Heatpoint kabelkanal
                                    </DownloadButton>
                                    <DownloadButton href='/max_n_manual.pdf' variant='secondary'>
                                        Installasjonsmanual
                                    </DownloadButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wirthwein Section */}
                    <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
                        <div className='p-8 lg:p-12'>
                            <h2 className='mb-8 text-4xl font-bold text-gray-900'>Wirthwein kabelkanal Type 1 og 2</h2>

                            <div className='mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                                <Image
                                    src='/placeholder.svg?height=300&width=400'
                                    alt='Wirthwein kabelkanal'
                                    width={400}
                                    height={300}
                                    className='w-full rounded-lg shadow-md'
                                />
                                <Image
                                    src='/placeholder.svg?height=300&width=400'
                                    alt='Wirthwein bilde 2'
                                    width={400}
                                    height={300}
                                    className='w-full rounded-lg shadow-md'
                                />
                            </div>

                            <div className='prose prose-lg mb-8 max-w-none'>
                                <p className='mb-6 text-lg leading-relaxed text-gray-700'>
                                    Wirthwein kabelkanaler har blitt lansert med over tusenvis av meter installert
                                    verden over. Produktene er kjent for sin høye kvalitet og miljøvennlige egenskaper,
                                    og representerer den nyeste teknologien innen kabelkanalløsninger for jernbane.
                                </p>

                                <h3 className='mb-4 text-xl font-semibold text-gray-900'>Fordeler:</h3>
                                <ul className='space-y-2 text-gray-700'>
                                    <li>• Miljøvennlig produksjon og materialer</li>
                                    <li>• Dokumentert kvalitet med tusenvis av meter installert</li>
                                    <li>• Innovativ design for optimal ytelse</li>
                                    <li>• Tilpasset nordiske værforhold</li>
                                    <li>• Kostnadseffektiv løsning</li>
                                </ul>
                            </div>

                            {/* YouTube Video */}
                            <div className='mb-8'>
                                <h3 className='mb-4 text-xl font-semibold text-gray-900'>Produktvideo</h3>
                                <div className='aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md'>
                                    <iframe
                                        src='https://www.youtube.com/embed/NHIFib0Rn-U?start=162'
                                        title='Wirthwein kabelkanal video'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                        className='h-64 w-full lg:h-96'></iframe>
                                </div>
                            </div>

                            <div className='border-t pt-8'>
                                <h3 className='mb-4 text-xl font-semibold text-gray-900'>Dokumentasjon</h3>
                                <div className='flex flex-col gap-4 sm:flex-row'>
                                    <DownloadButton href='/WWAG_PRO_Railway-Cable-duct_en.pdf'>
                                        Produktbrosjyre
                                    </DownloadButton>
                                    <DownloadButton
                                        href='/WWAG_PRO_Assembly-Instructions-Cable-Duct_en.pdf'
                                        variant='secondary'>
                                        Installasjonsinstruksjon
                                    </DownloadButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
