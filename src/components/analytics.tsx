'use client';

import Script from 'next/script';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

function LuckyOrange() {
    return (
        <Script
            id='lucky-orange'
            strategy='afterInteractive'
            src='https://tools.luckyorange.com/core/lo.js?site-id=ddfef143'
            async
            defer
        />
    );
}

export function Analytics() {
    return (
        <>
            <VercelAnalytics />
            <LuckyOrange />
        </>
    );
}
