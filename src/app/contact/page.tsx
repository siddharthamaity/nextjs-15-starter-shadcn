import Navigation from '@/components/ProductNavigation';

import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className='min-h-screen bg-white'>
            <main className='mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='mb-12 text-center'>
                    <h1 className='mb-4 text-4xl font-bold text-gray-900'>Kontakt oss</h1>
                </div>

                <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-2'>
                    {/* Contact Information */}
                    <div className='space-y-8'>
                        {/* Address */}
                        <div className='flex items-start gap-4'>
                            <MapPin className='mt-1 h-6 w-6 flex-shrink-0 text-gray-600' />
                            <div>
                                <h3 className='mb-2 font-semibold text-gray-900'>Besøksadresse</h3>
                                <p className='text-gray-700'>Fossumveien 70</p>
                                <p className='text-gray-700'>1359 Eiksmarka</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className='flex items-start gap-4'>
                            <Phone className='mt-1 h-6 w-6 flex-shrink-0 text-gray-600' />
                            <div>
                                <h3 className='mb-2 font-semibold text-gray-900'>Telefon</h3>
                                <a
                                    href='tel:+4795964035'
                                    className='text-gray-700 transition-colors hover:text-blue-600'>
                                    95 96 40 35
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className='flex items-start gap-4'>
                            <Mail className='mt-1 h-6 w-6 flex-shrink-0 text-gray-600' />
                            <div>
                                <h3 className='mb-2 font-semibold text-gray-900'>E-post</h3>
                                <div className='space-y-1'>
                                    <p>
                                        <a
                                            href='mailto:salg@steelco.no'
                                            className='text-gray-700 transition-colors hover:text-blue-600'>
                                            salg@steelco.no
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href='mailto:tlu@steelco.no'
                                            className='text-gray-700 transition-colors hover:text-blue-600'>
                                            tlu@steelco.no
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Postal Address */}
                        <div className='flex items-start gap-4'>
                            <MapPin className='mt-1 h-6 w-6 flex-shrink-0 text-gray-600' />
                            <div>
                                <h3 className='mb-2 font-semibold text-gray-900'>Postadresse</h3>
                                <p className='text-gray-700'>Pb. 100</p>
                                <p className='text-gray-700'>1332 Østerås</p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className='w-full'>
                        <div className='overflow-hidden rounded-lg bg-gray-100 shadow-sm'>
                            <iframe
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                    'Fossumveien 70, 1359 Eiksmarka, Norway'
                                )}&z=15&output=embed`}
                                width='100%'
                                height='400'
                                style={{ border: 0 }}
                                allowFullScreen
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                                title='Steelco-Teknikk lokasjon'
                            />
                        </div>
                    </div>
                </div>
                {/* CTA Section */}
                <div className='mt-12 rounded-2xl border border-gray-100 bg-white p-12 text-center shadow-lg'>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        Kontakt oss i dag for en uforpliktende samtale om hvordan vi kan hjelpe deg med dine prosjekter.
                        ""Kan endres til et form for mail sending elns""
                    </p>

                    <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                        <a
                            href='tel:+4795964035'
                            className='inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl'>
                            <Phone className='h-5 w-5' />
                            Ring oss nå
                        </a>
                        <a
                            href='mailto:salg@steelco.no'
                            className='inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl'>
                            <Mail className='h-5 w-5' />
                            Send e-post
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
