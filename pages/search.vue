<script setup>
const route = useRoute();

const { data: homes, refresh } = await useFetch(
  "/api/algolia/get-home-by-location",
  {
    query: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  }
);

watch(
  () => route.query,
  () => {
    debugger;
    refresh();
  }
);
</script>

<template>
  <div>
    {{ route.query.label }}<br />
    <ul>
      <li v-for="home in homes.data" :key="home.id">{{ home.title }}</li>
    </ul>
  </div>
</template>
>
