import Link from 'next/link';

import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-[#58565b] text-white'>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                    {/* Company Info */}
                    <div>
                        <h2 className='mb-4 text-2xl font-bold text-white'>Steelco-Teknikk A/S</h2>
                        <p className='mb-4 leading-relaxed text-gray-300'>
                            Leverandør av kvalitetsprodukter og tjenester innen stål og teknikk.
                        </p>
                        <div className='mb-4'>
                            <Link
                                href='https://fflive.bisnode.no/988533602_NO_a36f9303-8f22-44bc-8ba9-9376975f3ec4'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='-ml-8 inline-flex items-center justify-start gap-2 text-white transition-colors hover:text-blue-300'>
                                <img
                                    src='https://ratinglogo.kredittverdig.no/laurels/livelogo_988533602.png'
                                    alt='Bisnode kredittverdighet – logo'
                                    className='mt-1 h-auto w-auto max-w-xs'
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className='mb-6 text-xl font-semibold text-white'>Kontakt oss</h3>
                        <div className='space-y-4'>
                            {/* Address */}
                            <div className='flex items-start gap-3'>
                                <MapPin className='mt-1 h-5 w-5 flex-shrink-0 text-[#f3661a]' />
                                <div className='text-gray-300'>
                                    <p className='font-medium'>Besøksadresse:</p>
                                    <p>Fossumveien 70</p>
                                    <p>1359 Eiksmarka</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='flex items-center gap-3'>
                                <Phone className='h-5 w-5 flex-shrink-0 text-[#f3661a]' />
                                <div className='text-gray-300'>
                                    <p className='font-medium'>Telefon:</p>
                                    <Link href='tel:+4795964035' className='transition-colors hover:text-white'>
                                        95 96 40 35
                                    </Link>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex items-start gap-3'>
                                <Mail className='mt-1 h-5 w-5 flex-shrink-0 text-[#f3661a]' />
                                <div className='text-gray-300'>
                                    <p className='mb-1 font-medium'>E-post:</p>
                                    <div className='space-y-1'>
                                        <p>
                                            <Link
                                                href='mailto:salg@steelco.no'
                                                className='transition-colors hover:text-white'>
                                                salg@steelco.no
                                            </Link>
                                        </p>
                                        <p>
                                            <Link
                                                href='mailto:tlu@steelco.no'
                                                className='transition-colors hover:text-white'>
                                                tlu@steelco.no
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div>
                        <h3 className='mb-6 text-xl font-semibold text-white'>Informasjon</h3>
                        <div className='space-y-4'>
                            {/* Postal Address */}
                            <div className='text-gray-300'>
                                <p className='mb-2 font-medium'>Postadresse:</p>
                                <p>Pb. 100</p>
                                <p>1332 Østerås</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='mt-12 border-t border-slate-700 pt-8'>
                    <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
                        <div className='text-sm text-gray-400'>
                            <p>© 2025 Steelco-Teknikk A/S. Alle rettigheter forbeholdt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
