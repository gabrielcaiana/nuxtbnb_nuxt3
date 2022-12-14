<script setup>
const props = defineProps({
  error: Object,
});
const message = computed(() => String(props.error?.message || ""));

const is404 = computed(
  () => props.error?.statusCode === 404 || message.value?.includes("404")
);

const isDev = process.dev;

const handleError = () => clearError({ redirect: "/" });
</script>
<template>
  <NuxtLayout>
    <div class="flex flex-col items-center mt-12">
      <div class="text-2xl mb-2">
        {{ is404 ? "This page could not be found" : "An error occurred" }}
      </div>
      <div class="text-xl text-neutral-500">
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </div>
      <pre class="my-4" v-if="isDev">{{ error }}</pre>
      <button
        class="bg-neutral-400 text-white p-3 rounded-md hover:bg-neutral-600"
        @click="handleError"
      >
        Go Back
      </button>
    </div>
  </NuxtLayout>
</template>
