import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const res = await request.json();
  const prompt = res.prompt;
  try {
    if (!process.env.GENERATEIMAGE_LINK)
      throw new Error("No link to generate image function");
    const link = process.env.GENERATEIMAGE_LINK;
    const response = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.text();
    return NextResponse.json(data);
  } catch (e) {
    return new Response("internal server error");
  }
}
