'use client';

import { Suspense } from 'react';

import { FailureViewB } from './_components/FailureViewB';

export default function GmailLinkFailurePageB() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FailureViewB />
        </Suspense>
    );
}
