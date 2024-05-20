import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  let url = request.url
  if (url.endsWith("/")) url = url.slice(0, -1)
  const category = params.category

  const json = {
    "category": category,
    "sub-categories": [
      {
        name: "artesanales",
        url: url + "/artesanales"
      }
    ],
    count: 15,
    drinks: []
  }

  return new Response(JSON.stringify(json), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })
}