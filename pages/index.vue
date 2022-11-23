<script setup>
import homes from "~/data/homes";

const getHomes = computed(() => homes.slice(0, 3));
</script>

<template>
  <div style="display: flex; gap: 2rem">
    <home-card v-for="home in getHomes" :home="home" :key="home.objectID" />
  </div>
</template>
