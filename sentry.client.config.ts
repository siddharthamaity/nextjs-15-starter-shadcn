// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from '@sentry/nextjs';

Sentry.init({
    dsn: 'https://16a3f5c2356694923a99b2bce5c6049d@o4507097646956544.ingest.us.sentry.io/4508967395131392',
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,

    // Performance and error tracking
    tracesSampleRate: 1,

    // Session replay for better debugging
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: process.env.NODE_ENV === 'development'
});
