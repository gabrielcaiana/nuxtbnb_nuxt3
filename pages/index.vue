<script setup>
import homes from "~/data/homes";

useHead({
  title: 'Homepage',
  meta: [{
    name: 'description',
    content: 'This is homepage'
  }]
})

const getHomes = computed(() => homes.slice(0, 3));
</script>

<template>
  <div style="display: flex; gap: 2rem" class="bg-red-400 p-10">
    <home-card v-for="home in getHomes" :home="home" :key="home.objectID" />
  </div>
</template>
