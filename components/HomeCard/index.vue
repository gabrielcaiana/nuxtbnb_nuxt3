<script setup>
defineProps({
  home: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div datatest-id="home-card">
    <img :src="home.images[0]" style="width: 200px" :alt="home.title" /> <br />
    {{ home.title }} <br />
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state
    }}<br />
    {{ home.guests }} guests <br />
    {{ home.pricePerNight }} / night <br />
  </div>
</template>
