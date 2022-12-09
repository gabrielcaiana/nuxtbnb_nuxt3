<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  target: {
    type: Number,
    required: true,
  },
});

const isExpanded = ref(false);
const chunks = ref([]);

const isTooLong = computed(() => chunks.value.length === 2);
const displayText = computed(() => {
  if (!isTooLong.value || isExpanded.value) return chunks.value.join(" ");
  return `${chunks.value[0]}...`;
});

const getChunks = () => {
  const position = props.text.indexOf(" ", props.target);
  if (props.text.length <= props.target || position === -1) return [props.text];
  return [props.text.substring(0, position), props.text.substring(position)];
};

chunks.value = getChunks();
</script>

<template>
  <span>
    {{ displayText }}
    <button
      v-if="isTooLong && !isExpanded"
      @click="isExpanded = true"
      class="link"
      type="button"
    >
      read more
    </button>
    <button
      v-if="isTooLong && isExpanded"
      @click="isExpanded = false"
      class="link"
      type="button"
    >
      read less
    </button>
  </span>
</template>

<style scoped>
.link {
  color: blue;
  background-color: #fff;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}
.link:focus {
  border: none;
  outline: none;
}
</style>
