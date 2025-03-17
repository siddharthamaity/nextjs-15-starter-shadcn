import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Create a New Gmail Account | Ascend Travel',
    description: 'Step by step guide to create a new Gmail account for your travel bookings'
};

const steps = [
    {
        title: 'Visit Gmail Website',
        description: 'Open your browser and go to www.gmail.com',
        tip: "Make sure you're using a modern browser like Chrome, Firefox, or Safari for the best experience",
        details: [
            <span key='1'>Open your preferred internet browser</span>,
            <span key='2'>
                Visit{' '}
                <a
                    href='https://www.gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#1DC167] hover:underline'>
                    www.gmail.com
                </a>
            </span>,
            'Look for the "Create account" button'
        ],
        image: '/images/new-gmail/gmail-sign-in.webp'
    },
    {
        title: 'Choose Account Type',
        description: 'Select "For my personal use" option',
        tip: 'Personal accounts are free and perfect for managing your travel emails',
        details: [
            'Click "Create account"',
            'Select "For my personal use"',
            'This will take you to the account setup form'
        ],
        image: '/images/new-gmail/gmail-signin-2.webp'
    },
    {
        title: 'Enter Your Information',
        description: 'Fill in your personal details',
        tip: 'Use your real name to ensure you can receive travel confirmations properly',
        details: [
            'Enter your first and last name',
            'Choose a unique username for your email (e.g., your.name.travel@gmail.com)',
            'Add your date of birth and gender (required for account security)',
            'Create a strong password (mix of letters, numbers, and symbols)'
        ],
        image: '/images/new-gmail/gmail-create-account.webp'
    },
    {
        title: 'Add Recovery Options',
        description: 'Set up account recovery methods',
        tip: 'This is crucial for regaining access if you ever get locked out',
        details: [
            'Add a recovery phone number',
            'Add a recovery email (optional)',
            'These will help you reset your password if needed',
            'They also add an extra layer of security to your account'
        ],
        image: '/images/new-gmail/gmail-recovery-email.webp'
    },
    {
        title: 'Review and Finish',
        description: 'Verify your information and accept terms',
        tip: 'Take a moment to review all details before finalizing',
        details: [
            'Double-check your email address and personal information',
            <span key='1'>
                Review{' '}
                <a
                    href='https://policies.google.com/privacy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#1DC167] hover:underline'>
                    Google's Privacy Policy
                </a>{' '}
                and{' '}
                <a
                    href='https://policies.google.com/terms'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#1DC167] hover:underline'>
                    Terms of Service
                </a>
            </span>,
            'Click "I agree" to complete the setup',
            'Your new Gmail account is ready to use!'
        ]
    }
];

export default function NewGmailTipsPage() {
    return (
        <div className='min-h-screen bg-neutral-50 pb-12'>
            <div className='mx-auto max-w-4xl px-4 py-12'>
                {/* Header */}
                <div className='mb-8 text-center'>
                    <h1 className='font-figtree text-3xl font-bold text-neutral-900 md:text-4xl'>
                        Create Your Travel Gmail Account
                    </h1>
                    <p className='mt-4 text-neutral-600'>
                        Follow this guide to create a dedicated Gmail account for your travel bookings. Having a
                        separate account helps keep your travel plans organized and secure.
                    </p>
                </div>

                {/* Steps */}
                <div className='space-y-6'>
                    {steps.map((step, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className='flex items-center gap-3'>
                                    <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#1DC167] text-sm font-semibold text-white'>
                                        {index + 1}
                                    </span>
                                    {step.title}
                                </CardTitle>
                                <CardDescription>{step.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {step.image && (
                                    <div className='overflow-hidden rounded-lg border bg-neutral-50'>
                                        <div className='relative aspect-[16/9] w-full md:aspect-[16/7]'>
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                sizes='(max-width: 768px) 100vw, 80vw'
                                                className='object-contain'
                                                priority={index === 0}
                                                quality={85}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className='mt-4 space-y-4'>
                                    <ul className='list-inside list-disc space-y-2 text-sm text-neutral-700'>
                                        {step.details.map((detail, i) => (
                                            <li key={i} className='[&>a]:text-[#1DC167] [&>a]:hover:underline'>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='flex items-start gap-2 rounded-lg bg-blue-50 p-4 text-sm text-blue-900'>
                                        <div className='mt-1 text-blue-500'>💡</div>
                                        <p>{step.tip}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Final Card */}
                <Card className='mt-8 bg-[#1DC167]/5'>
                    <CardHeader>
                        <CardTitle>Ready to Start Saving on Travel?</CardTitle>
                        <CardDescription>
                            Now that you have your new Gmail account, connect it with Ascend to automatically find
                            savings on your travel bookings
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Link href='/gmail-link' className='w-full'>
                            <Button className='w-full bg-[#1DC167] font-semibold hover:bg-[#1DC167]/90'>
                                Connect Your New Gmail
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                {/* Help Text */}
                <p className='mt-8 text-center text-sm text-neutral-600'>
                    Having trouble?{' '}
                    <a href='mailto:help@ascend.travel' className='text-[#1DC167] hover:underline'>
                        Our support team is here to help
                    </a>
                </p>
            </div>
        </div>
    );
}
