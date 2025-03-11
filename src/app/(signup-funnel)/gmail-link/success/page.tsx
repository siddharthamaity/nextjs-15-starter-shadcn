import AnimatedCloudsBackground from '../../_components/AnimatedCloudsBackground/AnimatedCloudsBackground';
import CopyrightFooter from '../../_components/CopyrightFooter';
import { SuccessView } from './_components/SuccessView';

export default function GmailLinkSuccessPage() {
    return (
        <div className='relative min-h-screen bg-neutral-900'>
            <AnimatedCloudsBackground />
            <SuccessView />
            <CopyrightFooter />
        </div>
    );
}
