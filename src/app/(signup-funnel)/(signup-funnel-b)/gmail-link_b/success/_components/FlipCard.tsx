'use client';

import { useEffect, useRef, useState } from 'react';

import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import { CitizenshipSelector } from './citizenship-selector-b';
import { PhoneInput } from './phone-input-b';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
    phone: z.string().min(8, 'Please enter a valid phone number'),
    citizenship: z.string().min(1, 'Please select your citizenship')
});

type FormData = z.infer<typeof formSchema>;

const cardVariants = {
    front: {
        rotateY: 0,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' }
    },
    back: {
        rotateY: 180,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' }
    },
    hidden: {
        rotateY: -180,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' }
    }
};

interface FlipCardProps {
    onSubmit: (data: FormData) => void;
    frontContent: React.ReactNode;
}

export function FlipCard({ onSubmit, frontContent }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [selectedCountry, setSelectedCountry] = useState('US');

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: '',
            citizenship: selectedCountry
        }
    });

    useEffect(() => {
        if (isFlipped && cardRef.current) {
            cardRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [isFlipped]);

    const handleCountryChange = (countryCode: string) => {
        setSelectedCountry(countryCode);
        form.setValue('citizenship', countryCode);
    };

    return (
        <div ref={cardRef} className={cn('perspective-1000 relative w-full', isFlipped ? 'h-[460px]' : 'h-[290px]')}>
            <AnimatePresence>
                {!isFlipped ? (
                    <motion.div
                        key='front'
                        className='absolute h-full w-full rounded-2xl bg-white px-6 pt-9 drop-shadow-md'
                        variants={cardVariants}
                        initial='front'
                        animate='front'
                        exit='hidden'
                        style={{
                            backfaceVisibility: 'hidden',
                            transformStyle: 'preserve-3d'
                        }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setIsFlipped(true)}>
                        {frontContent}
                    </motion.div>
                ) : (
                    <motion.div
                        key='back'
                        className='absolute h-full w-full rounded-2xl bg-white p-8 drop-shadow-md'
                        variants={cardVariants}
                        initial='hidden'
                        animate='front'
                        exit='back'
                        style={{
                            backfaceVisibility: 'hidden',
                            transformStyle: 'preserve-3d'
                        }}>
                        <div className='flex h-full w-full flex-col gap-4'>
                            <h2 className='font-figtree text-2xl font-bold'>One last step</h2>
                            <p className='text-sm text-neutral-700'>
                                We use WhatsApp for messaging you about price drops and refund alerts.
                            </p>
                            <Form {...form}>
                                <form className='flex flex-1 flex-col gap-4' onSubmit={form.handleSubmit(onSubmit)}>
                                    <PhoneInput
                                        control={form.control}
                                        name='phone'
                                        label={
                                            <p className='text-sm font-semibold text-neutral-900'>WhatsApp Number *</p>
                                        }
                                        showWhatsAppIcon
                                        onCountryChange={handleCountryChange}
                                    />
                                    <CitizenshipSelector
                                        label={<p className='text-sm font-semibold text-neutral-900'>Citizenship *</p>}
                                        control={form.control}
                                        name='citizenship'
                                        defaultCountry={selectedCountry}
                                    />
                                    <button
                                        type='submit'
                                        className='w-full rounded-full bg-[#1DC167] py-3 font-semibold text-white transition-all hover:bg-[#1DC167]/90'>
                                        Create Account
                                    </button>
                                    <p className='text-center text-xs text-neutral-700'>
                                        By clicking on continue, you agree that you are at least 18 years of age and
                                        agree to our Privacy Policy and Terms of Use
                                    </p>
                                </form>
                            </Form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
