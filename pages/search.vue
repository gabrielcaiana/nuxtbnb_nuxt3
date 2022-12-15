<script setup>
const route = useRoute();

const { data: homes } = await $fetch("/api/algolia/get-home-by-location", {
  params: {
    lat: route.query.lat,
    lng: route.query.lng,
  },
});
</script>

<template>
  <div>
    {{ route.query.label }}<br />
    <ul>
      <li v-for="home in homes" :key="home.id">{{ home.title }}</li>
    </ul>
  </div>
</template>
>
