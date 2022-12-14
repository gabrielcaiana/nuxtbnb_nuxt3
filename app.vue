<script setup>
useHead({
  titleTemplate: (title) =>
    title !== "NuxtBnB" ? `${title} · NuxtBnB` : title,
  htmlAttrs: {
    lang: "en",
  },
  bodyAttrs: {},
  meta: [
    {
      charset: "utf-8",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
