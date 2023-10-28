import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { gameID: string; additionID: string } }
) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/games/${params.gameID}/additions?key=${process.env.API_KEY}`
    );
    const data = await res.json();

    const addition = data.results.find(
      (addition: { id: string }) => addition.id == params.additionID
    );

    if (!addition) {
      return NextResponse.json({ error: { cause: "Addition not found" } });
    }

    return NextResponse.json(addition);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
