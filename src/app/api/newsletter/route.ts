import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  // Debug: return what's loaded (without exposing full key)
  if (!API_KEY || !LIST_ID) {
    return NextResponse.json({ 
      error: 'Config missing',
      hasKey: !!API_KEY,
      hasList: !!LIST_ID,
      keyPrefix: API_KEY ? API_KEY.substring(0, 8) + '...' : null
    });
  }

  const dc = API_KEY.split('-')[1] || 'us6';
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
  const auth = Buffer.from('anystring:' + API_KEY).toString('base64');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json({ 
        error: data.detail || data.title || 'Failed',
        mailchimpError: data,
        status: response.status 
      });
    }

    return NextResponse.json({ success: true, message: 'Subscribed!' });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
