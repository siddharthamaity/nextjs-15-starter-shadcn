import FadeInWrapper from '@/components/FadeInWrapper';
import SteelcoSection from '@/components/steelco-seciton';

import HeroSection from '../components/HeroSection';

export default function Page() {
    return (
        <div className=''>
            <HeroSection />
            <FadeInWrapper>
                <SteelcoSection />
            </FadeInWrapper>
        </div>
    );
}
