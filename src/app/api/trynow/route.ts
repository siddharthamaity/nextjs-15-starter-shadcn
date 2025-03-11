import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Mock successful response
        return NextResponse.json({
            success: true,
            message: 'Form submitted successfully'
        });
    } catch (error) {
        console.error('Try now form error:', error);

        return NextResponse.json({ error: 'Please try again later' }, { status: 500 });
    }
}
