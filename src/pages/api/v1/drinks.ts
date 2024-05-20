import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const DRINKS_API_URL = import.meta.env.DRINKS_API_URL
  const url = request.url.split('/api')[1]

  const res = await fetch(DRINKS_API_URL + url)
  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}