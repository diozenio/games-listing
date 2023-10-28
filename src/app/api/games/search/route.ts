import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  try {
    const res = await fetch(
      `${process.env.API_URL}/games?` +
        new URLSearchParams({
          ...(query && { search: query }),
          page_size: "5",
          dates: "2023-01-01,2023-12-31",
          key: process.env.API_KEY!,
        })
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
