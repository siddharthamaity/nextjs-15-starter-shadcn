import AnimatedCloudsBackground from '../../_components/AnimatedCloudsBackground/AnimatedCloudsBackground';
import CopyrightFooter from '../../_components/CopyrightFooter';
import { FailureView } from './_components/FailureView';

export default function GmailLinkFailurePage() {
    return (
        <div className='relative min-h-screen bg-neutral-900'>
            <AnimatedCloudsBackground />
            <FailureView />
            <CopyrightFooter />
        </div>
    );
}
