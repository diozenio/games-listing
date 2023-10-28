import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const pageSize = searchParams.get("pageSize");

  try {
    const res = await fetch(
      `${process.env.API_URL}/games?` +
        new URLSearchParams({
          ...(page && { page }),
          ...(pageSize && { page_size: pageSize }),
          dates: "2023-01-01,2023-12-31",
          key: process.env.API_KEY!,
        })
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({
      error: e,
      url:
        `${process.env.API_URL}/games` +
        new URLSearchParams({
          ...(page && { page }),
          ...(pageSize && { page_size: pageSize }),
          dates: "2023-01-01,2023-12-31",
          key: process.env.API_KEY!,
        }),
    });
  }
}
