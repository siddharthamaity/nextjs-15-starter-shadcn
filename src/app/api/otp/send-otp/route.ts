import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { phone_number } = body;

        if (!phone_number) {
            return NextResponse.json({ error: 'Missing phone_number' }, { status: 400 });
        }

        console.log('Making request to send OTP for phone number:', phone_number);

        const baseUrl = process.env.DECISION_ENGINE_BASE_URL || 'https://decision-engine.onrender.com';
        const response = await fetch(`${baseUrl}/send-otp`, {
            method: 'POST',
            headers: {
                'X-API-KEY': process.env.PICKS_BACKEND_API_KEY!,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Error from OTP service:', errorData);
            throw new Error(errorData.message || 'Failed to send OTP');
        }

        const data = await response.json();
        console.log('OTP sent successfully, response:', JSON.stringify(data, null, 2));

        // Check if the response indicates success
        if (!data.success) {
            throw new Error(data.message || 'Failed to send OTP');
        }

        return NextResponse.json({
            success: true,
            message: data.message || 'OTP sent successfully'
        });
    } catch (error: any) {
        console.error('Error sending OTP:', error);

        return NextResponse.json(
            {
                error: error.message || 'Internal server error',
                success: false
            },
            { status: 500 }
        );
    }
}

// Also handle PUT for resending OTP
export async function PUT(request: NextRequest) {
    return POST(request);
}
