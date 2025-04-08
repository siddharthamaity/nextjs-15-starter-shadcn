import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { fbp, fbc, utm_params } = await request.json();
        const headersList = await headers();
        const userAgent = headersList.get('user-agent') || '';

        const response = await fetch('https://email.ascend.travel/gmail/import/create_state', {
            method: 'POST',
            headers: {
                'X-API-KEY': process.env.PICKS_BACKEND_API_KEY!,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pixel_id: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
                user_agent: userAgent,
                ...(fbp ? { fbp } : {}),
                ...(fbc ? { fbc } : {}),
                ...(utm_params ? { utm_params } : {})
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get state ID');
        }

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create state' }, { status: 500 });
    }
}
