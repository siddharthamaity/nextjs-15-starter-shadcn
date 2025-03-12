import { headers } from 'next/headers';

import AnimatedCloudsBackground from '../_components/AnimatedCloudsBackground/AnimatedCloudsBackground';
import CopyrightFooter from '../_components/CopyrightFooter';
import { GmailLinkView } from './_components/GmailLinkView';

async function getStateId() {
    try {
        const headersList = await headers();
        const userAgent = headersList.get('user-agent') || '';

        const response = await fetch('https://email.ascend.travel/gmail/import/create_state', {
            method: 'POST',
            headers: {
                'X-API-KEY': process.env.PICKS_BACKEND_API_KEY!,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pixel_id: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
                user_agent: userAgent
                // fbp and fbc will be handled client-side if needed
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get state ID');
        }

        const data = await response.json();

        return data.state_id;
    } catch (error) {
        console.error('Error getting state ID:', error);

        return null;
    }
}

export default async function GmailLinkPage() {
    const stateId = await getStateId();

    return (
        <div className='relative min-h-screen bg-neutral-900'>
            <AnimatedCloudsBackground />
            <GmailLinkView initialStateId={stateId} />
            <CopyrightFooter />
        </div>
    );
}

// href="https://email.ascend.travel/gmail/import/start/63c522fa-7152-4a1f-a351-71c7446be227"
