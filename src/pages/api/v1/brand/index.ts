import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
  let url = request.url;
  if (url.endsWith("/")) url = url.slice(0, -1)

  const json = {
    data: "Todas las marcas",
    results: [
      {
        name: "corona",
        url: url + "/corona"
      }
    ]
  }

  return new Response(JSON.stringify(json), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}