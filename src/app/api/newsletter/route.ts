import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: 'Thanks for subscribing!' });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
