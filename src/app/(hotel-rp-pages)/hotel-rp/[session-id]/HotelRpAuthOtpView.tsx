'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import IconNewWhite from '@/components/Icon/IconNewWhite';
import { YcombBanner } from '@/components/YcombBanner/YcombBanner';
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

    // Cooldown timer state
    const [cooldownTime, setCooldownTime] = useState(0);
    const [cooldownActive, setCooldownActive] = useState(false);

    // Auto-submit when all 6 digits are entered
    useEffect(() => {
        if (otpValue.length === 6 && !isVerifying) {
            handleVerifyOtp();
        }
    }, [otpValue]);

    // Cooldown timer effect
    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (cooldownActive && cooldownTime > 0) {
            timer = setTimeout(() => {
                setCooldownTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (cooldownTime === 0 && cooldownActive) {
            setCooldownActive(false);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [cooldownTime, cooldownActive]);

    const handleResendOtp = async () => {
        if (cooldownActive) return;

        setIsSending(true);
        try {
            const response = await fetch('/api/hotel-rp-otp/get-otp', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    repricing_session_id: sessionId
                })
            });

            if (!response.ok) {
                throw new Error('Failed to resend OTP');
            }

            // Start cooldown
            setCooldownTime(60);
            setCooldownActive(true);

            toast.success('OTP resent successfully');
        } catch (error) {
            console.error('Error resending OTP:', error);
            toast.error('Failed to resend OTP');
        } finally {
            setIsSending(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (otpValue.length !== 6) {
            toast.error('Please enter a valid 6-digit code');

            return;
        }

        setIsVerifying(true);
        try {
            const response = await fetch('/api/hotel-rp-otp/validate-otp', {
                method: 'POST',
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

            // Redirect to the complete profile page
            router.push('/hotel-rp/complete-profile');
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError(error instanceof Error ? error.message : 'Failed to verify OTP');
            toast.error('Invalid verification code');
        } finally {
            setIsVerifying(false);
        }
    };

    // Format the cooldown time as MM:SS
    const formatCooldownTime = () => {
        const minutes = Math.floor(cooldownTime / 60);
        const seconds = cooldownTime % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='flex min-h-screen flex-col items-center justify-start'>
            {/* Ycomb Banner */}
            <div className='flex w-full flex-row items-center justify-center gap-2 bg-[#00345A]'>
                <YcombBanner />
            </div>

            {/* Logo */}
            <div className='flex flex-row items-center justify-center gap-2 py-6'>
                <IconNewWhite className='h-12 w-auto' />
            </div>

            {/* Header */}
            <div className='flex w-full flex-col items-center justify-center'>
                <h1 className='text-figtree text-3xl font-bold text-neutral-50'>You are almost there!</h1>
                <p className='text-figtree text-2xl font-bold text-neutral-50'>Confirm your phone number</p>
            </div>

            <div className='mt-8 w-full max-w-[323px] rounded-xl bg-white p-8 shadow-lg'>
                <h1 className='mb-3 text-2xl font-bold text-neutral-900'>Verify Your Number</h1>

                {error ? (
                    <div className='rounded-md bg-red-50 p-4 text-center'>
                        <p className='text-red-800'>{error}</p>
                        <Button onClick={() => window.location.reload()} variant='outline' className='mt-4'>
                            Try Again
                        </Button>
                    </div>
                ) : (
                    <>
                        <span className='mb-6 items-center justify-center'>
                            We've sent you a verification code to your number:
                            <span className='text-md ml-4 text-neutral-600'>{maskedPhone}</span>
                        </span>
                        <p className='mt-6 w-full font-semibold text-neutral-900'>Verification code:</p>

                        <div className='mt-2 mb-8'>
                            <InputOTP
                                maxLength={6}
                                value={otpValue}
                                onChange={setOtpValue}
                                containerClassName='justify-center gap-4'>
                                <InputOTPGroup>
                                    {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <InputOTPSlot
                                            key={`otp-${i}`}
                                            index={i}
                                            className='size-11 text-xl font-bold'
                                        />
                                    ))}
                                </InputOTPGroup>
                            </InputOTP>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <Button
                                onClick={handleVerifyOtp}
                                disabled={otpValue.length !== 6 || isVerifying}
                                className='w-full rounded-full bg-[#1DC167] hover:bg-[#1DC167]/90'>
                                {isVerifying ? 'Verifying...' : 'Continue'}
                            </Button>
                        </div>

                        <span className='mt-2 flex flex-col items-center justify-center'>
                            <p className='text-sm text-neutral-600'>Didn't receive a code?</p>
                            {cooldownActive ? (
                                <p className='text-xs text-neutral-500'>Resend available in {formatCooldownTime()}</p>
                            ) : (
                                <Button
                                    variant='link'
                                    onClick={handleResendOtp}
                                    disabled={isSending || cooldownActive}
                                    className='-mt-2 text-xs text-neutral-600 underline'>
                                    {isSending ? 'Sending...' : 'Click to resend'}
                                </Button>
                            )}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}
