'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import IconNewWhite from '@/components/Icon/IconNewWhite';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CitizenshipSelector } from '@/components/ui/citizenship-selector';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PhoneInput } from '@/components/ui/phone-input';
import { FRAMER_LINKS } from '@/config/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(8, 'Please enter a valid phone number'),
    citizenship: z.string().min(1, 'Please select your citizenship'),
    terms: z.boolean({
        errorMap: () => ({ message: 'You must accept the terms and conditions' })
    })
});

interface FormValues {
    email: string;
    phone: string;
    citizenship: string;
    terms: boolean;
}

export function TryNowView() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState<string | null>(null);

    // Get UTM parameters
    const getUtmParams = () => {
        const utmParams = new URLSearchParams();
        searchParams.forEach((value, key) => {
            if (key.startsWith('utm_')) {
                utmParams.append(key, value);
            }
        });

        return utmParams.toString();
    };

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            phone: '',
            citizenship: '',
            terms: false
        },
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });

    const { email, phone, citizenship, terms } = form.watch();

    const validateForm = async () => {
        const isValid = await form.trigger();

        return isValid;
    };

    const handlePhoneCountryChange = (countryCode: string) => {
        setSelectedPhoneCountry(countryCode);
        if (!form.getValues('citizenship')) {
            form.setValue('citizenship', countryCode, {
                shouldValidate: true,
                shouldDirty: true
            });
        }
    };

    async function onSubmit(data: FormValues) {
        const isValid = await validateForm();
        if (!isValid) {
            toast.error('Please fill in all required fields correctly');

            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/trynow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    utm_params: getUtmParams(),
                    state_id: searchParams.get('state_id') || undefined
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error('Registration failed Please try again later');
            }

            toast.success('Registration successful!', {
                duration: 3000,
                position: 'bottom-center'
            });

            if (result.redirect_url) {
                setTimeout(() => {
                    window.location.href = result.redirect_url;
                }, 1000);
            } else {
                router.push('/gmail-link');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            toast.error(error instanceof Error ? error.message : 'Something went wrong. Please try again.', {
                duration: 5000,
                position: 'bottom-center'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='relative z-10 flex min-h-screen w-full flex-col items-center justify-center'>
            <div className='flex w-full flex-1 flex-col items-center justify-center px-4 py-6'>
                {/* Logo container */}
                <div className='flex w-full items-center justify-center'>
                    <div className='w-full max-w-md'>
                        <IconNewWhite className='h-12 w-auto max-w-md' />
                    </div>
                </div>

                {/* Form Container */}
                <div className='font-figtree mt-6 w-full max-w-md rounded-2xl bg-neutral-50 px-5 py-6 drop-shadow-md'>
                    {/* Header */}
                    <div className='flex w-full flex-row items-center justify-start gap-2 pt-3 text-sm font-extrabold tracking-wide text-[#2DBF64] uppercase'>
                        <span>Price drop protection</span>
                        <ShieldCheck className='mb-0.5 size-5' />
                    </div>

                    <div className='font-figtree mt-2 w-full text-2xl font-bold text-neutral-900'>
                        Try Ascend for free!
                    </div>

                    <div className='font-figtree text-md mb-2 text-neutral-900/70'>
                        With ascend, as soon as prices drop on your hotel and flight reservations, we step in to help
                        you save money
                    </div>

                    {/* Form */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem className='py-2'>
                                        <FormLabel>Email *</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter your email' {...field} className='h-12' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <PhoneInput
                                control={form.control}
                                name='phone'
                                label='WhatsApp number *'
                                placeholder='Number'
                                className='h-12 rounded-l-none'
                                onCountryChange={handlePhoneCountryChange}
                                showWhatsAppIcon
                            />

                            <CitizenshipSelector<FormValues>
                                control={form.control}
                                name='citizenship'
                                label='Citizenship *'
                                className='h-16 py-2'
                            />

                            <div className='mt-2 text-xs text-neutral-900'>
                                Citizenship is required by hotels & airlines due to international travel restrictions. *
                            </div>

                            <FormField
                                control={form.control}
                                name='terms'
                                render={({ field }) => (
                                    <FormItem className='mt-2 flex flex-row items-start gap-2 space-y-0 rounded-md bg-neutral-50 px-4 text-neutral-900'>
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className='size-6 cursor-pointer rounded-lg border border-neutral-300 hover:border-neutral-500 hover:bg-neutral-100 data-[state=checked]:border-neutral-500 data-[state=checked]:bg-neutral-100'
                                            />
                                        </FormControl>
                                        <div className='font-figtree text-sm leading-4 text-neutral-900'>
                                            By checking this box you agree that you are at least 18 years of age and
                                            agree to our{' '}
                                            <Link
                                                href={FRAMER_LINKS.privacy}
                                                target='_blank'
                                                className='underline hover:text-neutral-700'>
                                                Privacy Policy
                                            </Link>{' '}
                                            and{' '}
                                            <Link
                                                href={FRAMER_LINKS.terms}
                                                target='_blank'
                                                className='underline hover:text-neutral-700'>
                                                Terms and Conditions
                                            </Link>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type='submit'
                                className='mt-4 w-full bg-[#2DBF64] font-semibold hover:bg-[#2DBF64]/90'
                                disabled={isLoading}>
                                {isLoading ? 'Submitting...' : 'Get started for free!'}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
