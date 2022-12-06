<script setup>
const route = useRoute();
const nuxtApp = useNuxtApp();
const algolia = useAlgolia();

const map = ref(null);
const { home, pending, error } = await algolia.getHomes(route.params.id);

if (error.value) {
  throw new Error(error.value);
}

onMounted(() => {
  setTimeout(() => {
    nuxtApp.$showMap(map.value, home.value._geoloc.lat, home.value._geoloc.lng);
  }, 250);
});
</script>

<template>
  <div>
    <div v-if="!pending">
      <Head>
        <Title>{{ home.title }}</Title>
      </Head>

      <div class="flex">
        <img
          v-for="(image, index) in home.images"
          :key="index"
          :src="image"
          :alt="home.title"
          width="200"
          height="150"
        />
      </div>
      {{ home.title }} <br />
      {{ home.pricePerNight }} <br />
      <img src="/marker.svg" width="20" height="20" alt="marker" />
      {{ home.location.address }}
      {{ home.location.state }} {{ home.location.country }} <br />
      <img src="/star.svg" width="20" height="20" alt="star" />
      {{ home.reviewValue }} {{ home.guests }} guests,
      {{ home.bedrooms }} rooms, {{ home.beds }}, {{ home.bathrooms }} bath
      <br />

      <!-- init map -->
      <div class="w-[800px] h-[800px]" ref="map"></div>
    </div>
    <div v-else>Carregando...</div>
  </div>
</template>
