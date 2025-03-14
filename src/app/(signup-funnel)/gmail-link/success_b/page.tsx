import { Suspense } from 'react';

import AnimatedCloudsBackground from '../../_components/AnimatedCloudsBackground/AnimatedCloudsBackground';
import CopyrightFooter from '../../_components/CopyrightFooter';
import { SuccessViewB } from './_components/SuccessViewB';
import { SuccessViewSkeletonB } from './_components/SuccessViewSkeletonB';

export default function GmailLinkSuccessPage() {
    return (
        <div className='relative min-h-screen bg-neutral-900'>
            <AnimatedCloudsBackground />
            <Suspense fallback={<SuccessViewSkeletonB />}>
                <SuccessViewB />
            </Suspense>
            <CopyrightFooter />
        </div>
    );
}
