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

    const { pathname } = request.nextUrl;

    // Redirect old picks paths to app.ascend.travel
    if (pathname.startsWith('/picksV2') || pathname.startsWith('/pick')) {
        return NextResponse.redirect(`https://app.ascend.travel${pathname}`);
    }

    // Redirect root path to heyascend.com
    if (pathname === '/') {
        return NextResponse.redirect('https://heyascend.com');
    }

    return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
    matcher: ['/', '/pick/:path*', '/picksV2/:path*']
};
