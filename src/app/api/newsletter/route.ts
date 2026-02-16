import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  // Simple demo mode - log the email for now
  console.log('Newsletter signup:', email);
  
  return NextResponse.json({ 
    success: true, 
    message: 'Thanks for subscribing! Check your inbox for confirmation.'
  });
}
