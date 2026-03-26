import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "subscribers.json");

async function readSubscribers(): Promise<string[]> {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: string[]): Promise<void> {
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const subscribers = await readSubscribers();

    if (subscribers.includes(email)) {
      return NextResponse.json({ ok: true, message: "Already subscribed!" });
    }

    subscribers.push(email);
    await writeSubscribers(subscribers);

    return NextResponse.json({ ok: true, message: "Subscribed successfully!" });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
