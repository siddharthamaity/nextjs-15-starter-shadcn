import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { state_id } = await request.json();

        if (!state_id) {
            return NextResponse.json({ error: 'Missing state_id' }, { status: 400 });
        }

        // Mock response for now
        return NextResponse.json({
            signup_link_code: `mock-stripe-code-${state_id}`
        });
    } catch (error) {
        console.error('Stripe signup error:', error);

        return NextResponse.json({ error: 'Please contact hey@ascend.travel for assistance' }, { status: 500 });
    }
}
