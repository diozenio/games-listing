import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { gameID: string } }
) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/games/${params.gameID}/screenshots?key=${process.env.API_KEY}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
