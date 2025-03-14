import { Metadata } from 'next';
import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Cookie Policy | Ascend',
    description: 'Learn about how Ascend uses cookies to improve your experience'
};

export default function CookiesInfoPage() {
    return (
        <div className='min-h-screen bg-neutral-50'>
            <div className='mx-auto max-w-4xl px-4 py-12 md:py-16'>
                {/* Header */}
                <div className='mb-12 text-center'>
                    <h1 className='font-figtree text-4xl font-bold text-neutral-900'>Cookie Policy</h1>
                    <p className='mt-4 text-neutral-600'>Learn about how we use cookies to improve your experience</p>
                </div>

                {/* Main content */}
                <div className='space-y-8 rounded-lg bg-white p-6 shadow-sm md:p-8'>
                    {/* Why we use cookies */}
                    <section>
                        <h2 className='font-figtree text-2xl font-bold text-neutral-900'>Why We Use Cookies</h2>
                        <p className='mt-4 text-neutral-600'>
                            We use cookies to make Ascend work better for you. They help us:
                        </p>
                        <ul className='mt-4 list-inside list-disc space-y-2 text-neutral-600'>
                            <li>Remember your preferences and settings</li>
                            <li>Understand how you use our website</li>
                            <li>Make our website more secure</li>
                            <li>Provide you with a better, personalized experience</li>
                            <li>Analyze our website performance</li>
                        </ul>
                    </section>

                    {/* FAQ Section */}
                    <section className='mt-8'>
                        <h2 className='font-figtree mb-4 text-2xl font-bold text-neutral-900'>Common Questions</h2>
                        <Accordion type='single' collapsible className='w-full'>
                            <AccordionItem value='what-are-cookies'>
                                <AccordionTrigger>What are cookies?</AccordionTrigger>
                                <AccordionContent>
                                    Cookies are small text files stored on your device when you visit websites. They're
                                    used to remember your preferences and make websites work more efficiently.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='types-of-cookies'>
                                <AccordionTrigger>What types of cookies do we use?</AccordionTrigger>
                                <AccordionContent>
                                    <ul className='list-inside list-disc space-y-2'>
                                        <li>Essential cookies: Required for basic website functionality</li>
                                        <li>Analytics cookies: Help us understand how visitors use our site</li>
                                        <li>Preference cookies: Remember your settings and choices</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='data-collection'>
                                <AccordionTrigger>What information do we collect?</AccordionTrigger>
                                <AccordionContent>
                                    We collect information about how you use our website, your preferences, and basic
                                    device information to improve our services and your experience.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Managing Cookies Section */}
                    <section className='mt-8 rounded-lg bg-neutral-50 p-6'>
                        <h2 className='font-figtree text-2xl font-bold text-neutral-900'>Managing Your Cookies</h2>
                        <p className='mt-4 text-neutral-600'>
                            You can control or delete cookies based on your preferences. Here's how to manage them in
                            different browsers:
                        </p>
                        <div className='mt-4 grid gap-4 md:grid-cols-2'>
                            <div className='rounded-lg bg-white p-4 shadow-sm'>
                                <h3 className='font-semibold'>Chrome</h3>
                                <p className='mt-2 text-sm text-neutral-600'>
                                    Settings → Privacy and Security → Cookies and other site data
                                </p>
                            </div>
                            <div className='rounded-lg bg-white p-4 shadow-sm'>
                                <h3 className='font-semibold'>Firefox</h3>
                                <p className='mt-2 text-sm text-neutral-600'>
                                    Menu → Options → Privacy & Security → Cookies and Site Data
                                </p>
                            </div>
                            <div className='rounded-lg bg-white p-4 shadow-sm'>
                                <h3 className='font-semibold'>Safari</h3>
                                <p className='mt-2 text-sm text-neutral-600'>
                                    Preferences → Privacy → Manage Website Data
                                </p>
                            </div>
                            <div className='rounded-lg bg-white p-4 shadow-sm'>
                                <h3 className='font-semibold'>Edge</h3>
                                <p className='mt-2 text-sm text-neutral-600'>
                                    Settings → Cookies and site permissions → Manage and delete cookies
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Not Convinced Section */}
                    <section className='mt-8 rounded-lg bg-neutral-100 p-6 text-center'>
                        <h2 className='font-figtree text-xl font-bold text-neutral-900'>Still Not Convinced?</h2>
                        <p className='mt-2 text-neutral-600'>
                            You can always clear your cookies or adjust your browser settings to block them. However,
                            this might affect how our website works for you.
                        </p>
                        <div className='mt-6 flex justify-center gap-4'>
                            <Link href='/'>
                                <Button variant='outline'>Return to Home</Button>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
