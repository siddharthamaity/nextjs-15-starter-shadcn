// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['email.ascend.travel']
    }
};

const requiredEnvs = ['NEXT_PUBLIC_FB_PIXEL_ID', 'PICKS_BACKEND_API_KEY'];

// Validate environment variables
requiredEnvs.forEach((env) => {
    if (!process.env[env]) {
        throw new Error(`Environment variable ${env} is missing`);
    }
});

module.exports = withSentryConfig(nextConfig, {
    org: 'ascend-rq',
    project: 'ascend-nextjs',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
        enabled: true
    },
    disableLogger: true,
    automaticVercelMonitors: true
});
