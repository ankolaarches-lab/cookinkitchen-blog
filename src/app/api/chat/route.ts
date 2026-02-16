import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_KEY = "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";
const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "meta-llama/llama-3.2-1b-instruct";

const productsContext = `
PRODUCT CATALOG (use this info to answer questions):
- Victorinox Chef's Knife: $39.99, 4.8★ - https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=cookinkitchen-20
- Lodge Dutch Oven: $59.99, 4.9★ - https://www.amazon.com/Lodge-Cast-Iron-Dutch-Oven-5-Quart/dp/B000N6ZTBW?tag=cookinkitchen-20
- KitchenAid Stand Mixer: $449.99, 4.8★ - https://www.amazon.com/KitchenAid-KSM150PSER-Artisan-Tilt-Head-5-Quart/dp/B00005UP77?tag=cookinkitchen-20
- Shun Santoku Knife: $169.95, 4.7★ - https://www.amazon.com/Shun-DM0706-Classic-7-Inch-Santoku/dp/B0000Y7LYM?tag=cookinkitchen-20
- Ninja Blender: $99.99, 4.6★ - https://www.amazon.com/Ninja-BL610-Professional-72-Watt-Blender/dp/B00NG5H436?tag=cookinkitchen-20
- Ninja Air Fryer: $149.99, 4.6★ - https://www.amazon.com/Ninja-AF101-Fryer-Black-gray/dp/B07FDJMC9Q?tag=cookinkitchen-20
- OXO Kitchen Scale: $29.99, 4.4★ - https://www.amazon.com/OXO-Stainless-Compact-Grip-11-Pound/dp/B079D9F86W?tag=cookinkitchen-20
- OXO Cutting Board: $24.99, 4.5★ - https://www.amazon.com/OXO-GOOD-Grips-Cutting-17-Inch/dp/B00E6GUF5W?tag=cookinkitchen-20
- T-fal Non-Stick Pan: $29.99, 4.6★ - https://www.amazon.com/T-fal-E93808-Professional-Nonstick-Dishwasher/dp/B000W5XHQW?tag=cookinkitchen-20
- Instant Pot Duo: $89.99, 4.3★ - https://www.amazon.com/Instant-Pot-Duo-Electric-Pressure/dp/B00FLBUERN?tag=cookinkitchen-20
- StarPack Utensil Set: $24.99, 4.6★ - https://www.amazon.com/Stainless-Steel-Cooking-Utensil-Set/dp/B0BY8X3G8K?tag=cookinkitchen-20
`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://cookinkitchen.online",
        "X-Title": "CookinKitchen",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { 
            role: "system", 
            content: `You are a helpful kitchen tool expert at CookinKitchen. ${productsContext}

Guidelines:
- Be conversational and friendly
- Help users find the right kitchen tools based on their needs and budget
- When recommending products, always include affiliate links with the tag "cookinkitchen-20"
- Format recommendations like: "I'd recommend the [Product Name](amazon link) - here's why..."
- Be honest about pros and cons
- If you don't have specific information, say so honestly
- Keep responses concise but helpful`
          },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenRouter API error:", response.status, errorData);
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
        { error: "Invalid response from AI", debug: data },
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
