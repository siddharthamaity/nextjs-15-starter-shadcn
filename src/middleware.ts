import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import * as Sentry from '@sentry/nextjs';

export function middleware(request: NextRequest) {
    // Initialize Sentry
    Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
        tracesSampleRate: 1.0,
        debug: process.env.NODE_ENV === 'development'
    });

    // Redirect root path to heyascend.com
    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect('https://heyascend.com');
    }

    return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
    matcher: '/'
};
