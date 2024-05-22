import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const DRINKS_API_URL = import.meta.env.DRINKS_API_URL
  const fetchUrl = request.url.split('/api')[1]

  const res = await fetch(DRINKS_API_URL + fetchUrl)
  const data = await res.json()

  let url = request.url.split('?')[0];
  if (url.endsWith("/")) url = url.slice(0, -1)

  data.countries = data.countries.map((item: any) => {
    return {
      country: item.country,
      count: item.count,
      url: url + item.path
    }
  })

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}