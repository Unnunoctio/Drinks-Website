<script lang="ts">
  import ApiPetition from "./ApiPetition.svelte";

  export let urlPath: string;
  let urlActive = "brands/corona"
  let urlPetition = `${urlPath}${urlActive}`

  function submit() {
    urlPetition = `${urlPath}${urlActive}`
  }

  function changeInput(value: string) {
    urlActive = value
    submit()
  }
</script>

<form on:submit|preventDefault={submit} class="flex flex-col sm:flex-row gap-2 sm:gap-0">
  <section class="flex flex-1 text-[12px] xs:text-base">
    <label for="url-input" class="p-2 bg-gray-300 rounded-l-lg">{urlPath}</label>
    <input
      bind:value={urlActive}
      id="url-input"
      name="url-input"
      type="text"
      autocomplete="off"
      autocorrect="off"
      spellcheck="false"
      class="flex-1 px-2 min-w-[120px] border border-l-0 sm:border-x-0 border-gray-300 rounded-r-lg sm:rounded-r-none outline-none"
    />
  </section>
  <button type="submit" class="px-8 py-2 font-medium text-secondary bg-blue-500 hover:bg-blue-600 rounded-lg sm:rounded-l-none transition-colors">Enviar</button>
</form>

<section class="flex flex-wrap mt-2">
  <p class="pr-1">Otras peticiones:</p>
  <button on:click={() => changeInput("brands/corona")} class="text-blue-500 hover:underline">
    brands/corona
  </button>
  <p class="pr-1">,</p>
  <button on:click={() => changeInput("categories/cervezas")} class="text-blue-500 hover:underline">
    categories/cervezas
  </button>
  <p class="pr-1">,</p>
  <button on:click={() => changeInput("origins/alemania")} class="text-blue-500 hover:underline">
    origins/alemania
  </button>
  <p class="pr-1">, or</p>
  <button on:click={() => changeInput("drinks?limit=5&page=1")} class="text-blue-500 hover:underline">
    drinks?limit=5&page=1
  </button>
  <p>.</p>
</section>

<section class="mt-10">
  <p class="pb-4 truncate">Link directo: <a href={urlPetition} class="text-blue-500 hover:underline">{urlPetition}</a></p>
  <div class="p-4 h-[600px] overflow-auto bg-slate-700 text-secondary rounded-lg">
    <ApiPetition url={urlPetition} />
  </div>
</section>

