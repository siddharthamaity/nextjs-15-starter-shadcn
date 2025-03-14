import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

interface CustomerInfo {
    email: string;
    whatsapp: string;
    citizenship: string;
    pixel_id: string;
    user_agent: string;
    utm_params: string;
    ip_address: string;
    state_id?: string;
    test_mode?: boolean;
}

const API_URL = 'https://decision-engine.onrender.com/gmail-direct-connect/web_signup';

function getClientIp(headersList: Headers): string {
    const forwardedFor = headersList.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }

    return headersList.get('x-real-ip') || '127.0.0.1';
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
            utm_params: body.utm_params || '',
            ip_address: ipAddress,
            state_id: body.state_id,
            ...(body.testMode ? { test_mode: true } : {})
        };

        const payload = {
            customer_info: customerInfo
        };

        console.log('Sending payload:', payload);

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'X-API-KEY': '2835f35c8f0ea281lbaaebac8b5385d0358b58096a82bc05b0188eac7333e9ce',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const responseText = await response.text();
        console.log('Response status:', response.status);
        console.log('Response text:', responseText);

        // Handle non-JSON responses
        if (response.status === 200) {
            if (responseText === 'Customer already onboarded') {
                return NextResponse.json({
                    success: true,
                    message: responseText
                });
            }

            // Try to parse JSON if it's not the known text response
            try {
                const responseData = JSON.parse(responseText);

                return NextResponse.json(responseData);
            } catch {
                // If it's a 200 but not JSON, assume it's a success message
                return NextResponse.json({
                    success: true,
                    message: responseText
                });
            }
        }

        // Handle error responses
        return NextResponse.json(
            {
                success: false,
                error: 'Registration failed',
                message: responseText
            },
            { status: response.status }
        );
    } catch (error) {
        console.error('Error submitting registration:', error);

        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Registration failed'
            },
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
