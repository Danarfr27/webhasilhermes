import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    data: query
      ? { results: [`Result for "${query}"`] }
      : { message: "Hermes Protocol API is live" },
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    status: "success",
    message: "Data received by Hermes Protocol",
    received: body,
    processedAt: new Date().toISOString(),
  });
}
