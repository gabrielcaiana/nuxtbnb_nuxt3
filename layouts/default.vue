<script setup>
const nuxtApp = useNuxtApp();
const router = useRouter();

const citySearch = ref(null);

onMounted(() => {
  nuxtApp.$makeAutoComplete(citySearch.value);
});

const changed = (event) => {
  const place = event?.detail;
  if (!place.geometry) return;

  router.push({
    name: "search",
    query: {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      label: place.formatted_address,
    },
  });
};
</script>

<template>
  <header class="p-4 mb-4 bg-neutral-100">
    <nuxt-link to="/">Home</nuxt-link>
    <input class="ml-4" type="text" ref="citySearch" @changed="changed" />
  </header>
  <div>
    <slot />
  </div>
</template>
