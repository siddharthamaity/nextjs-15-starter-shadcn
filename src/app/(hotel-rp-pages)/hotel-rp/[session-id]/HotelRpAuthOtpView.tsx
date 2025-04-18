'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

import { toast } from 'sonner';

interface InitialOtpData {
    masked_phone: string;
    success: boolean;
}

interface HotelRpAuthOtpViewProps {
    sessionId: string;
    initialData: InitialOtpData | null;
    initialError: string | null;
}

export default function HotelRpAuthOtpView({ sessionId, initialData, initialError }: HotelRpAuthOtpViewProps) {
    const router = useRouter();

    const [isSending, setIsSending] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [maskedPhone, setMaskedPhone] = useState(initialData?.masked_phone || '');
    const [otpValue, setOtpValue] = useState('');
    const [error, setError] = useState(initialError || '');

    // Auto-submit when all 6 digits are entered
    useEffect(() => {
        if (otpValue.length === 6 && !isVerifying) {
            handleVerifyOtp();
        }
    }, [otpValue]);

    const handleVerifyOtp = async () => {
        if (otpValue.length !== 6) {
            toast.error('Please enter a valid 6-digit code');

            return;
        }

        setIsVerifying(true);
        try {
            const response = await fetch('/api/hotel-rp-otp/get-otp', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    repricing_session_id: sessionId,
                    otp_code: otpValue
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to verify OTP');
            }

            toast.success('Verification successful');

            // Redirect to the sign-up page
            router.push('/hotel-rp/complete-profile');
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError(error instanceof Error ? error.message : 'Failed to verify OTP');
            toast.error('Invalid verification code');
        } finally {
            setIsVerifying(false);
        }
    };

    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-[#5AA6DA] from-0% via-[#006DBC] via-[22.5%] to-[#006DBC]'>
            <div className='w-full max-w-md rounded-xl bg-white p-8 shadow-lg'>
                <h1 className='mb-6 text-center text-2xl font-bold text-neutral-900'>Verify Your Identity</h1>

                {error ? (
                    <div className='rounded-md bg-red-50 p-4 text-center'>
                        <p className='text-red-800'>{error}</p>
                        <Button onClick={() => window.location.reload()} variant='outline' className='mt-4'>
                            Try Again
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className='mb-6 flex flex-col items-center justify-center'>
                            <p className='max-w-xs text-center text-neutral-600'>
                                Enter the last 6 digits of the phone number you used to sign up
                            </p>
                        </div>

                        {/* Test Code 543210 */}
                        <p className='mb-6 text-center text-neutral-600'>Test Code: 543210</p>

                        <div className='mb-8'>
                            <InputOTP
                                maxLength={6}
                                value={otpValue}
                                onChange={setOtpValue}
                                containerClassName='justify-center gap-2'>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <Button
                                onClick={handleVerifyOtp}
                                disabled={otpValue.length !== 6 || isVerifying}
                                className='w-full bg-[#1DC167] hover:bg-[#1DC167]/90'>
                                {isVerifying ? 'Verifying...' : 'Verify Code'}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
