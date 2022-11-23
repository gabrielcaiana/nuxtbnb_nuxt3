<script setup>
import homes from '~/data/homes.json'
const route = useRoute()

useHead({
  title: "My home",
});

const home = computed(() => homes.find((home) => route.params.id === home.objectID))

</script>

<template>
  <div>
    {{ home.title }}
  </div>
</template>
