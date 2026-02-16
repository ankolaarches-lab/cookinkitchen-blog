import { NextRequest, NextResponse } from "next/server";

const MINIMAX_API_KEY = "sk-cp-L80K1-otHa7voWDaiDnkeAsEo3ZVIhlfzQuRMkLUv07WgE_QRrjad6cfXx3od-eLzrCfst0e4RYTUuFaStfGSjhyhSb9FDrusFrFEeoD_RldjFY3do2QDk8";
const MINIMAX_ENDPOINT = "https://api.minimax.chat/v1/text/chatcompletion_pro";
const MODEL = "MiniMax-M2.1";

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const systemPrompt = `You are a helpful kitchen tool expert at CookinKitchen. ${context || ""}

Guidelines:
- Be conversational and friendly
- Help users find the right kitchen tools based on their needs
- When recommending products, always include affiliate links with the tag "cookinkitchen-20"
- Format recommendations like: "I'd recommend the [Product Name](amazon link with tag) - here's why..."
- Be honest about pros and cons of products
- If you don't have specific information, say so honestly
- Keep responses concise but helpful
- Always prioritize helping the user make an informed decision`;

    const response = await fetch(MINIMAX_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MINIMAX_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("MiniMax API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      const assistantMessage = data.choices[0].message?.content || "I apologize, but I couldn't generate a response. Please try again.";
      return NextResponse.json({ response: assistantMessage });
    } else {
      return NextResponse.json(
        { error: "Invalid response from AI" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
