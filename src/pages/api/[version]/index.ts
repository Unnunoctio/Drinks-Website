import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  let url = request.url
  if (url.endsWith('/')) url = url.slice(0, -1)

  const path = url.split('/api')[1]
  if (path === '/v2') {
    const endpoints = {
      brands: url + '/brands',
      categories: url + '/categories',
      drinks: url + '/drinks?{page, limit} (all drinks: limit=0)',
      origins: url + '/origins'
    }

    return new Response(JSON.stringify(endpoints), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
    
  const DRINKS_API_URL = import.meta.env.DRINKS_API_URL
  
  const res = await fetch(DRINKS_API_URL + path)
  const data = await res.json()

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}