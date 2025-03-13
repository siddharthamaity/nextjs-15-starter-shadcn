import IconNewWhite from '@/components/Icon/IconNewWhite';
import { Skeleton } from '@/components/ui/skeleton';

export function LoadingSkeleton() {
    return (
        <div className='flex min-h-screen flex-col items-center px-4 py-6'>
            <IconNewWhite className='mt-6 h-9 w-auto max-w-md md:mt-0' />

            <div className='mt-12 w-full max-w-lg'>
                <Skeleton className='h-8 w-3/4' />
                <Skeleton className='mt-4 h-4 w-1/2' />
            </div>

            <div className='mt-8 w-full max-w-md space-y-4'>
                <Skeleton className='h-12 w-full rounded-lg' />
                <Skeleton className='h-12 w-full rounded-lg' />
            </div>
        </div>
    );
}
