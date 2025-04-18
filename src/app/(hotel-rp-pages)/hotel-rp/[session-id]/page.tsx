import { Suspense } from 'react';

import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

import HotelRpAuthOtpView from './HotelRpAuthOtpView';

interface InitialOtpData {
    masked_phone: string;
    success: boolean;
    message?: string;
}

interface PageProps {
    params: Promise<{ [key: string]: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AuthOtpPage(props: PageProps) {
    const params = await props.params;
    const sessionId = params['session-id'];

    // For production, fetch real data
    let initialData: InitialOtpData | null = null;
    let error: string | null = null;

    try {
        const headersList = await headers();
        const host = headersList.get('host') || 'localhost:3003';
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
        const baseUrl = `${protocol}://${host}`;
        const response = await fetch(`${baseUrl}/api/hotel-rp-otp/get-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ repricing_session_id: sessionId }),
            cache: 'no-store'
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            error = data.error || data.message || 'Failed to send OTP';
            console.error('Error sending OTP:', error);
        } else {
            initialData = {
                masked_phone: data.masked_phone,
                success: data.success,
                message: data.message
            };
            console.log('OTP sent successfully:', initialData);
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
