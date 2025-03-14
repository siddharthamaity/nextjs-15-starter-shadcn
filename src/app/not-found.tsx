import Link from 'next/link';

import IconNewWhite from '@/components/Icon/IconNewWhite';

import AnimatedCloudsBackground from './(signup-funnel)/_components/AnimatedCloudsBackground/AnimatedCloudsBackground';
import CopyrightFooter from './(signup-funnel)/_components/CopyrightFooter';
import GradientShadowHeading from './(signup-funnel)/_components/GradientShadowHeading/GradientShadowHeading';

export default function NotFound() {
    return (
        <div className='relative min-h-screen bg-neutral-900'>
            <AnimatedCloudsBackground />

            <div className='flex min-h-screen flex-col items-center px-4 py-6'>
                <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />

                <div className='mt-12 flex w-full max-w-xl flex-col items-center text-center'>
                    <GradientShadowHeading>Page not found</GradientShadowHeading>
                    <p className='mt-4 text-neutral-600'>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <Link
                    href='/'
                    className='mt-8 rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800'>
                    Go to Home
                </Link>
            </div>

            <CopyrightFooter />
        </div>
    );
}
