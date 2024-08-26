import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const path = request.url.split('/api')[1]

  const DRINKS_API_URL = import.meta.env.DRINKS_API_URL

  const res = await fetch(DRINKS_API_URL + path)
  const data = await res.json()

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}