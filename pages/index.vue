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

const { data } = await $fetch("/api/homes");
</script>

<template>
  <div class="flex gap-2">
    <template v-if="data.length" v-for="home in data" :key="home.id">
      <nuxt-link :to="`/home/${home.id}`">
        <home-card :home="home" />
      </nuxt-link>
    </template>
    <div v-else>Carregando...</div>
  </div>
</template>
