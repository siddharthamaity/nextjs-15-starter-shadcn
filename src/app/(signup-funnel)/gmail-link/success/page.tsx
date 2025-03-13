import { Suspense } from 'react';

import AnimatedCloudsBackground from '../../_components/AnimatedCloudsBackground/AnimatedCloudsBackground';
import CopyrightFooter from '../../_components/CopyrightFooter';
import { SuccessView } from './_components/SuccessView';
import { SuccessViewSkeleton } from './_components/SuccessViewSkeleton';

export default function GmailLinkSuccessPage() {
    return (
        <div className='relative min-h-screen bg-neutral-900'>
            <AnimatedCloudsBackground />
            <Suspense fallback={<SuccessViewSkeleton />}>
                <SuccessView />
            </Suspense>
            <CopyrightFooter />
        </div>
    );
}
