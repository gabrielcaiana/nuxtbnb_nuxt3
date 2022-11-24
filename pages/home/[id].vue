<script setup>
const route = useRoute();

const { data: home, pending } = await useLazyAsyncData("homes", async () => {
  const data = await $fetch("/api/homes");
  return data.homes.find((home) => route.params.id === home.objectID);
});

useHead({
  title: home.title || "Home",
});
</script>

<template>
  <div>
    <div v-if="!pending">
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
    </div>
    <div v-else>Carregando...</div>
  </div>
</template>
