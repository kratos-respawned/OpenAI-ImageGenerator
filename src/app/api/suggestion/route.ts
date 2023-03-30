export async function GET(request: Request) {
  try {
    if (!process.env.GETSUGGESTION_LINK)
      throw new Error("No link to getSuggestion function");
    const link = process.env.GETSUGGESTION_LINK;
    const response = await fetch(link, {
      cache: "no-store",
    });
    const data = await response.text();
    console.log(data);
    return new Response(JSON.stringify(data.trim()), {
      status: 200,
    });
  } catch (e) {
    return new Response("internal server error");
  }
}
