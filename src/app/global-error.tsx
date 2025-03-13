'use client';

import { useEffect } from 'react';

import * as Sentry from '@sentry/nextjs';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        Sentry.captureException(error);
    }, [error]);

    return (
        <html>
            <body>
                <div className='flex min-h-screen flex-col items-center justify-center'>
                    <h2 className='text-xl font-bold'>Something went wrong!</h2>
                    <button
                        onClick={reset}
                        className='mt-4 rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800'>
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
