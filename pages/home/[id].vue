<script setup>
const route = useRoute();
const { googleApiKey } = useRuntimeConfig();

useHead({
  script: [
    {
      src: `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places&callback=initMap&v=weekly`,
      async: true,
    },
    {
      innerHTML: `window.initMap = function(){ window.mapLoaded = true}`,
      hid: "init-map",
    },
  ],
});

const { data: home, pending } = await useLazyAsyncData("homes", async () => {
  const data = await $fetch("/api/homes");
  return data.homes.find((home) => route.params.id === home.objectID);
});

const mapElement = ref(null);

const showMap = () => {
  const mapOptions = {
    zoom: 18,
    center: new window.google.maps.LatLng(
      home.value._geoloc.lat,
      home.value._geoloc.lng
    ),
    disableDefaultUI: true,
    zoomControl: true,
  };

  const map = new window.google.maps.Map(mapElement.value, mapOptions);
  const position = new window.google.maps.LatLng(
    home.value._geoloc.lat,
    home.value._geoloc.lng
  );
  const marker = new window.google.maps.Marker({ position });
  marker.setMap(map);
};

onMounted(() => {
  const timer = setInterval(() => {
    if (window.mapLoaded) {
      clearInterval(timer);
      showMap();
    }
  }, 200);
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
