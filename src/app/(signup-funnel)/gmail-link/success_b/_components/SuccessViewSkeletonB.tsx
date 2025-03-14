import IconNewWhite from '@/components/Icon/IconNewWhite';
import { Skeleton } from '@/components/ui/skeleton';

export function SuccessViewSkeletonB() {
    return (
        <div className='flex min-h-screen flex-col items-center px-4 py-6'>
            <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />

            <div className='mt-12 flex w-full max-w-xl flex-col items-center text-center'>
                <Skeleton className='h-8 w-3/4 max-w-lg' />
                <Skeleton className='mt-4 h-4 w-1/2 max-w-md' />
            </div>

            <div className='mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:px-0'>
                {/* Premium card */}
                <div className='h-[520px] w-full rounded-xl border border-neutral-200 bg-white p-8'>
                    <Skeleton className='h-6 w-24' />
                    <Skeleton className='mt-4 h-4 w-48' />
                    <Skeleton className='mt-8 h-12 w-full' />
                    <div className='mt-8 space-y-4'>
                        {[...Array(7)].map((_, i) => (
                            <Skeleton key={i} className='h-4 w-full' />
                        ))}
                    </div>
                </div>

                {/* Free card */}
                <div className='h-[520px] w-full rounded-xl border border-neutral-200 bg-white p-8'>
                    <Skeleton className='h-6 w-24' />
                    <Skeleton className='mt-4 h-4 w-48' />
                    <Skeleton className='mt-8 h-12 w-full' />
                    <div className='mt-8 space-y-4'>
                        {[...Array(7)].map((_, i) => (
                            <Skeleton key={i} className='h-4 w-full' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
