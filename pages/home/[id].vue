<script setup>
const route = useRoute();
const nuxtApp = useNuxtApp();

const map = ref(null);

const { data: home } = await $fetch(`/api/home`, {
  params: {
    id: route.params.id,
  },
});

const { data: reviews } = await $fetch(`/api/reviews`, {
  params: {
    homeId: home.id,
  },
});

onMounted(() => {
  setTimeout(
    () => nuxtApp.$showMap(map.value, home._geoloc.lat, home._geoloc.lng),
    250
  );
});
</script>

<template>
  <div v-if="home">
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
    {{ home.reviewValue }} {{ home.guests }} guests, {{ home.bedrooms }} rooms,
    {{ home.beds }}, {{ home.bathrooms }} bath
    <br />

    <div class="w-[800px] h-[800px]" ref="map"></div>

    <div v-for="review in reviews" :key="review.id">
      <img :src="review.reviewer.image" :alt="review.reviewer.name" />
      {{ review.reviewer.name }} <br />
      {{ formatDate(review.date) }} <br />
      <ShortText :text="review.comment" :target="150" /><br />
    </div>
    <img :src="home.user.image" :alt="home.user.name" /><br />
    {{ home.user.name }} <br />
    {{ formatDate(home.user.joined) }} <br />
    {{ home.user.reviewCount }} <br />
    {{ home.user.description }} <br />
  </div>
  <div v-else>Carregando...</div>
</template>
