import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params }) => {
  const category = params.category
  const subCategory = params['sub']

  const json = {
    "category": category,
    "sub-category": subCategory, 
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