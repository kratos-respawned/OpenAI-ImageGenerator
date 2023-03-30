export async function GET(request: Request) {
  if (!process.env.GETIMAGES_LINK) throw new Error("GETIMAGES_LINK not set");
  const link = process.env.GETIMAGES_LINK;
  const response = await fetch(link, {
    cache: "no-store",
  });

  const blob = await response.blob();
  const textData = await blob.text();

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
