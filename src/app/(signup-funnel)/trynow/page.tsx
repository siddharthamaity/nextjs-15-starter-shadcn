import { Suspense } from 'react';

import { Metadata } from 'next';

import { LoadingSkeleton } from '@/components/LoadingSkeleton';

import AnimatedCloudsBackground from '../_components/AnimatedCloudsBackground/AnimatedCloudsBackground';
import CopyrightFooter from '../_components/CopyrightFooter';
import { TryNowView } from './_components/TryNowView';

interface PageProps {
    params: Promise<{ [key: string]: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata: Metadata = {
    title: 'Try Ascend Now | Save Money on Trips'
};

async function getCustomerInfo(stateId: string | null) {
    if (!stateId) return null;

    try {
        const response = await fetch(`https://email.ascend.travel/gmail/import/lookup/${stateId}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': process.env.PICKS_BACKEND_API_KEY!
            }
        });

        if (!response.ok) return null;

        return response.json();
    } catch (error) {
        console.error('Error fetching customer info:', error);

        return null;
    }
}

export default async function TryNowPage(props: PageProps) {
    const searchParams = await props.searchParams;
    const customerInfo = await getCustomerInfo((searchParams.state_id as string) ?? null);

    return (
        <div className='relative min-h-screen bg-neutral-900'>
            <AnimatedCloudsBackground />
            <Suspense fallback={<LoadingSkeleton />}>
                <TryNowView initialData={customerInfo} />
            </Suspense>
            <CopyrightFooter />
        </div>
    );
}
