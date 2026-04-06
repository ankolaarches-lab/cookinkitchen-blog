"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const PRODUCT_CONTEXT = `
You are a helpful kitchen tool expert at CookinKitchen. You have knowledge of these products:

Featured Products:
1. Victorinox Chef's Knife - $39.99, Rating: 4.8/5 - Best Seller
   Link: https://www.amazon.com/s?k=Victorinox+Fibrox+Pro+Chefs+Knife&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}

2. Lodge Dutch Oven - $59.99, Rating: 4.9/5 - Best Value
   Link: https://www.amazon.com/s?k=Lodge+5+Quart+Cast+Iron+Dutch&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}

3. KitchenAid Stand Mixer - $449.99, Rating: 4.8/5
   Link: https://www.amazon.com/s?k=KitchenAid+KSM150PSER+Artisan+Tilt+Head+5+Quart&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}

4. Shun Santoku Knife - $169.95, Rating: 4.7/5 - Japanese
   Link: https://www.amazon.com/s?k=Shun+DM0706+Classic+7+Inch+Santoku&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}

5. Ninja Blender - $99.99, Rating: 4.6/5
   Link: https://www.amazon.com/s?k=Ninja+BL610+Professional+72+Watt+Blender&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}

6. Ninja Air Fryer XXL - $149.99, Rating: 4.6/5
   Link: https://www.amazon.com/s?k=Ninja+Digital+4+Quart+Recipe+Creator&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}

Product Categories: Knives, Cookware, Appliances, Gadgets

When recommending products:
- Be conversational and helpful
- Suggest products from the list above based on user needs
- Always include affiliate links with tag ${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}
- Format like: "I'd recommend the [Product Name](amazon link with tag) - here's why..."
- Be honest about pros and cons

Available review categories:
- Best Chef's Knives for Home Cooks
- Dutch Oven Comparison (Le Creuset vs Lodge vs AmazonBasics)
- Stand Mixer Showdown (KitchenAid vs Cuisinart)
- Best Santoku Knife
- Best Blender Showdown
- Best Air Fryer Review
`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! 👋 I'm your kitchen tool expert. Need help choosing the right knife, blender, or cookware? Just ask!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatMessage = (content: string): React.ReactNode => {
    // Split by double newlines for paragraphs
    const paragraphs = content.split(/\n\n/);
    return paragraphs.map((para, pIdx) => {
      // Check if paragraph is a list
      const lines = para.split('\n');
      const listItems = lines.filter(l => l.startsWith('- '));
      if (listItems.length > 0) {
        return (
          <ul key={pIdx} className="list-disc pl-4 my-1 space-y-1">
            {lines.map((line, lIdx) => {
              if (line.startsWith('- ')) {
                return <li key={lIdx}>{formatInline(line.slice(2))}</li>;
              }
              return <span key={lIdx}>{formatInline(line)}</span>;
            })}
          </ul>
        );
      }
      return (
        <p key={pIdx} className={pIdx > 0 ? "mt-2" : ""}>
          {formatInline(para.replace(/\n/g, ' '))}
        </p>
      );
    });
  };

  const formatInline = (text: string): React.ReactNode => {
    // Bold, italic, and link formatting using regex split
    const parts: React.ReactNode[] = [];
    // Match **bold**, *italic*, and [text](url)
    const regex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      const segment = match[0];
      if (segment.startsWith('**') && segment.endsWith('**')) {
        parts.push(<strong key={key++}>{segment.slice(2, -2)}</strong>);
      } else if (segment.startsWith('*') && segment.endsWith('*')) {
        parts.push(<em key={key++}>{segment.slice(1, -1)}</em>);
      } else if (segment.startsWith('[')) {
        const linkMatch = segment.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          parts.push(
            <a key={key++} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-teal-600 underline hover:text-teal-700">
              {linkMatch[1]}
            </a>
          );
        }
      }
      lastIndex = match.index + segment.length;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts.length > 0 ? parts : text;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          context: PRODUCT_CONTEXT,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, I encountered an error. Please try again!" },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🍳</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Kitchen Expert</h3>
                <p className="text-xs text-white/70">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {msg.role === "assistant" ? formatMessage(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about kitchen tools..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all transform hover:scale-110 ${
          isOpen ? "rotate-0" : "rotate-0"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
