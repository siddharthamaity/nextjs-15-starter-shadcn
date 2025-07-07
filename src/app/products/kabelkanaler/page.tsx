// pages/kabelkanaler.jsx  (or wherever your page lives)
import HeatpointSection from '@/components/HeatpointSection';
import Navigation from '@/components/ProductNavigation';
import WirthweinSection from '@/components/WirthweinSection';

export default function KabelkanalerPage() {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navigation />
            <main className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='space-y-12'>
                    <HeatpointSection />
                    <WirthweinSection />
                </div>
            </main>
        </div>
    );
}
