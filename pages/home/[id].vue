<script setup>
const route = useRoute();
const nuxtApp = useNuxtApp();

const { data: home, pending } = await useLazyAsyncData("homes", async () => {
  const data = await $fetch("/api/homes");
  return data.homes.find((home) => route.params.id === home.objectID);
});

const mapElement = ref(null);

onUpdated(() => {
  nuxtApp.$showMap(
    mapElement.value,
    home.value._geoloc.lat,
    home.value._geoloc.lng
  );
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
      <div class="w-[800px] h-[800px]" ref="mapElement"></div>
    </div>
    <div v-else>Carregando...</div>
  </div>
</template>
