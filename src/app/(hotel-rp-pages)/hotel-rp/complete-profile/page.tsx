'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CitizenshipSelector } from '@/components/ui/updated-citizenship-selector';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const profileSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Please enter a valid email'),
    citizenship: z.string().min(1, 'Citizenship is required')
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function CompleteProfilePage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            citizenship: 'US'
        }
    });

    async function onSubmit(data: ProfileFormValues) {
        setIsSubmitting(true);
        try {
            // Replace with your actual API endpoint
            const response = await fetch('/api/hotel-rp/complete-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to save profile');
            }

            toast.success('Profile completed successfully');
            // Redirect to next page
            window.location.href = '/hotel-rp/confirmation';
        } catch (error) {
            console.error('Error saving profile:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to save profile');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-[#5AA6DA] from-0% via-[#006DBC] via-[22.5%] to-[#006DBC]'>
            <div className='w-full max-w-md rounded-xl bg-white p-8 shadow-lg'>
                <h1 className='mb-6 text-center text-2xl font-bold text-neutral-900'>Complete Your Profile</h1>
                <p className='mb-6 text-center text-neutral-600'>
                    Please provide your information to complete your registration.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='grid grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name='firstName'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='First Name' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='lastName'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Last Name' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder='Email' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <CitizenshipSelector
                            control={form.control}
                            name='citizenship'
                            label='Citizenship'
                            defaultCountry='US'
                        />

                        <Button
                            type='submit'
                            disabled={isSubmitting}
                            className='w-full bg-[#1DC167] hover:bg-[#1DC167]/90'>
                            {isSubmitting ? 'Saving...' : 'Complete Registration'}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
