import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { state_id } = await request.json();

        if (!state_id) {
            console.error('Missing state_id in request body');

            return NextResponse.json({ error: 'Missing state_id parameter' }, { status: 400 });
        }

        console.log('Making request to Stripe signup with state_id:', state_id);

        const response = await fetch('https://email.ascend.travel/gmail/import/stripe_signup', {
            method: 'POST',
            headers: {
                'X-API-KEY': process.env.PICKS_BACKEND_API_KEY!,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                state_id,
                live_mode: true
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get response from Stripe signup service');
        }

        const data = await response.json();
        console.log('Raw Stripe signup response:', JSON.stringify(data, null, 2));

        if (!data) {
            console.error('Empty response from Stripe signup service');

            return NextResponse.json({ error: 'Empty response from service' }, { status: 500 });
        }

        if (!data.signup_link_code) {
            console.error('Missing signup_link_code in response:', data);

            return NextResponse.json(
                {
                    error: 'Invalid response from Stripe signup service',
                    data
                },
                { status: 500 }
            );
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Stripe signup detailed error:', {
            message: error.message,
            status: error.status,
            data: error.data,
            stack: error.stack,
            response: error.response,
            request: {
                state_id: 'REDACTED',
                headers: {
                    'X-API-KEY': 'REDACTED'
                }
            }
        });

        return NextResponse.json(
            {
                error: error.message || 'Failed to generate Stripe signup link',
                data: error.data
            },
            { status: error.status || 500 }
        );
    }
}
