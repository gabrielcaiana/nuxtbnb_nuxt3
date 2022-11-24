<script setup>
useHead({
  title: "Homepage",
  meta: [
    {
      name: "description",
      content: "This is homepage",
    },
  ],
});

const { data, pending } = await useLazyAsyncData("homes", async () => {
  const data = await $fetch("/api/homes");
  return data.homes.slice(0, 3);
});
</script>

<template>
  <div class="flex gap-2">
    <template v-if="!pending" v-for="home in data" :key="home.objectID">
      <nuxt-link :to="`/home/${home.objectID}`">
        <home-card :home="home" />
      </nuxt-link>
    </template>
    <div v-else>Carregando...</div>
  </div>
</template>
