import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params }) => {
  const country = params.country

  const json = {
    "country": country,
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