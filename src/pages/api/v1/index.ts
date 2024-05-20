import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
  let url = request.url
  if (url.endsWith('/')) url = url.slice(0, -1)

  const endpoints = {
    brand: url + '/brand/',
    category: url + '/category/',
    drinks: url + '/drinks?{page, limit, name, brand, alcoholic_grade, content, package, category, sub_category} (all drinks: limit=0)',
    'made-in': url + '/made-in/'
  }

  return new Response(JSON.stringify(endpoints), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })
}