import { type EmailVerificationResponse } from './types';

export async function verifyEmail(token: string): Promise<EmailVerificationResponse> {
    const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    });

    if (!response.ok) {
        throw new Error('Failed to verify email');
    }

    return response.json();
}
