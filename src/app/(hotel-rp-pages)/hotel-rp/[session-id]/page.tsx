import { Suspense } from 'react';

import { notFound } from 'next/navigation';

import HotelRpAuthOtpView from './HotelRpAuthOtpView';

interface InitialOtpData {
    masked_phone: string;
    success: boolean;
}

interface PageProps {
    params: Promise<{ [key: string]: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AuthOtpPage(props: PageProps) {
    const params = await props.params;
    const sessionId = params['session-id'];

    // For development, use mock data
    if (process.env.NODE_ENV === 'development') {
        const initialData = {
            masked_phone: '+1******1234',
            success: true
        };

        return (
            <Suspense fallback={<div className='flex h-screen items-center justify-center'>Loading...</div>}>
                <HotelRpAuthOtpView sessionId={sessionId} initialData={initialData} initialError={null} />
            </Suspense>
        );
    }

    // For production, fetch real data
    let initialData: InitialOtpData | null = null;
    let error: string | null = null;

    try {
        const response = await fetch(
            `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/hotel-rp-otp/get-otp`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ repricing_session_id: sessionId }),
                cache: 'no-store'
            }
        );

        if (!response.ok) {
            const data = await response.json();
            error = data.error || 'Failed to send OTP';
        } else {
            const data = await response.json();
            initialData = {
                masked_phone: data.masked_phone,
                success: data.success
            };
        }
    } catch (err) {
        console.error('Error fetching initial OTP data:', err);
        error = 'Failed to initialize verification process';
    }

    // If we couldn't get the initial data, show 404
    if (!initialData && !error) {
        return notFound();
    }

    return (
        <Suspense fallback={<div className='flex h-screen items-center justify-center'>Loading...</div>}>
            <HotelRpAuthOtpView sessionId={sessionId} initialData={initialData} initialError={error} />
        </Suspense>
    );
}
