import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { template_id, boxes } = await request.json();

        const params = new URLSearchParams();
        params.append('template_id', template_id || '');
        params.append('username', process.env.IMGFLIP_USERNAME || '');
        params.append('password', process.env.IMGFLIP_PASSWORD || '');

        boxes.forEach((text: string, index: number) => {
            params.append(`boxes[${index}][text]`, text || '');
        });

        const res = await fetch(`https://api.imgflip.com/caption_image?${params.toString()}`, {
            method: 'POST',
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to generate meme' }, { status: 500 });
    }
}