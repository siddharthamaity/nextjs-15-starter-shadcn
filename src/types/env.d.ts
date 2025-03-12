declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_FB_PIXEL_ID: string;
        PICKS_BACKEND_API_KEY: string;
        SUPABASE_KEY: string;
        NEXT_PUBLIC_APP_NAME: string;
        NEXT_PUBLIC_API_HOST: string;
        NEXT_PUBLIC_MAPBOX_TOKEN: string;
        NEXT_PUBLIC_CONTACT_EMAIL: string;
        NEXT_PUBLIC_SITE_URL: string;
        NEXT_PUBLIC_SENTRY_DSN: string;
        NEXT_PUBLIC_SENTRY_ENVIRONMENT: string;
        NEXT_PUBLIC_AMPLITUDE_KEY: string;
        SENTRY_AUTH_TOKEN: string;
        SENTRY_ORG: string;
        SENTRY_PROJECT: string;
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
        NEXT_PUBLIC_BUSINESS_EMAIL: string;
        NEXT_PUBLIC_WEB_FORMS_KEY: string;
    }
}
