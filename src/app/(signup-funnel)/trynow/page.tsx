import { Metadata } from 'next';

import AnimatedCloudsBackground from '../_components/AnimatedCloudsBackground/AnimatedCloudsBackground';
import CopyrightFooter from '../_components/CopyrightFooter';
import { TryNowView } from './_components/TryNowView';

export const metadata: Metadata = {
    title: 'Try Ascend Now | Save Money on Trips'
};

export default function TryNowPage() {
    return (
        <div className='relative min-h-screen bg-neutral-900'>
            <AnimatedCloudsBackground />
            <TryNowView />
            <CopyrightFooter />
        </div>
    );
}
