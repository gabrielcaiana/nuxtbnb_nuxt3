<script setup>
import homes from "~/data/homes.json";
const route = useRoute();

useHead({
  title: "My home",
});

const home = computed(() =>
  homes.find((home) => route.params.id === home.objectID)
);
</script>

<template>
  <div>
    <div class="flex">
      <img
        v-for="(image, index) in home.images"
        :key="index"
        :src="image"
        :alt="home.title"
      />
    </div>
  </div>
</template>
