import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

interface CustomerInfo {
    email?: string;
    whatsapp: string;
    citizenship: string;
    pixel_id: string;
    user_agent: string;
    utm_params: string;
    state_id?: string;
    test_mode?: boolean;
    ip_address?: string;
}

interface TryNowSubmitResponse {
    redirect_url?: string;
}

const API_URL = 'https://decision-engine.onrender.com/gmail-direct-connect/web_signup';

function getClientIp(headersList: Headers): string {
    // Try x-forwarded-for first
    const forwardedFor = headersList.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }

    // Try x-real-ip
    const realIp = headersList.get('x-real-ip');
    if (realIp) {
        return realIp.trim();
    }

    // Try other common headers
    const cfConnectingIp = headersList.get('cf-connecting-ip');
    if (cfConnectingIp) {
        return cfConnectingIp.trim();
    }

    // Fallback to localhost
    return '127.0.0.1';
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const headersList = await headers();
        const userAgent = headersList.get('user-agent') || '';
        const ipAddress = getClientIp(headersList);

        const customerInfo: CustomerInfo = {
            email: body.email,
            whatsapp: body.phone,
            citizenship: body.citizenship,
            pixel_id: process.env.NEXT_PUBLIC_FB_PIXEL_ID!,
            user_agent: userAgent,
            utm_params: body.utm_params,
            ip_address: ipAddress,
            ...(body.testMode ? { test_mode: true } : {})
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'X-API-KEY': process.env.PICKS_BACKEND_API_KEY!,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer_info: customerInfo,
                ...(body.testMode ? { test_mode: true } : {})
            })
        });

        const rawResponse = await response.text();
        console.log('Raw Response:', rawResponse);

        let responseData;
        try {
            responseData = JSON.parse(rawResponse);
        } catch (parseError) {
            return NextResponse.json({ error: 'Invalid response from server: ' + rawResponse }, { status: 500 });
        }

        if (!response.ok) {
            return NextResponse.json(
                { error: responseData.error || 'Registration failed' },
                { status: response.status }
            );
        }

        return NextResponse.json(responseData);
    } catch (error) {
        console.error('Error submitting registration:', error);

        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Registration failed' },
            { status: 500 }
        );
    }
}

// Optional: Add GET endpoint for customer lookup
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const stateId = searchParams.get('state_id');

        if (!stateId) {
            return NextResponse.json({ error: 'State ID is required' }, { status: 400 });
        }

        const response = await fetch(`https://email.ascend.travel/gmail/import/lookup/${stateId}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': process.env.PICKS_BACKEND_API_KEY!
            }
        });

        if (!response.ok) {
            throw new Error('Failed to lookup customer info');
        }

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error looking up customer info:', error);

        return NextResponse.json({ error: 'Failed to lookup customer info' }, { status: 500 });
    }
}
