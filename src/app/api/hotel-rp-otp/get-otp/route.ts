import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { repricing_session_id } = body;

        if (!repricing_session_id) {
            return NextResponse.json({ error: 'Missing repricing_session_id' }, { status: 400 });
        }

        // In a real implementation, you would call your backend service here
        // For now, we'll return mock data

        // Return the masked phone number
        return NextResponse.json({
            masked_phone: '+1******1234',
            success: true
        });
    } catch (error) {
        console.error('Error sending OTP:', error);

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { repricing_session_id, otp_code } = body;

        if (!repricing_session_id || !otp_code) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // In a real implementation, you would verify the OTP here
        // For now, we'll just return success for any 6-digit code

        if (otp_code.length !== 6) {
            return NextResponse.json({ error: 'Invalid OTP code' }, { status: 400 });
        }

        // Return success
        return NextResponse.json({
            success: true,
            redirect_url: '/hotel-rp-sign-up'
        });
    } catch (error) {
        console.error('Error verifying OTP:', error);

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
