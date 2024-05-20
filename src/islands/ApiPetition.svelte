<script>
  export let url;

  const get = async (url) => {
    const res = await fetch(url)
    if (!res.ok) return null

    const data = await res.json()
    return data
  }
</script>

{#await get(url)}
  <span>Loading ...</span>
{:then json}
  <pre class="text-sm">
<code>{JSON.stringify(json, null, 2)}</code>
  </pre>
{/await}
