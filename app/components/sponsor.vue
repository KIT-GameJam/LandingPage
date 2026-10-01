<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    :title="title"
    class="group border-second-200 hover:border-prime-300 hover:shadow-prime-500/5 dark:border-second-700 dark:bg-second-900 dark:hover:border-prime-600 flex h-36 w-full max-w-xs items-center justify-center rounded-xl border bg-white px-10 transition duration-300 hover:shadow-xl"
  >
    <img
      :src="`/svg/sponsors/${name}.svg`"
      :alt="`${title} logo`"
      width="256"
      height="256"
      class="max-h-16 w-full object-contain transition duration-300 group-hover:scale-105"
      :class="{ 'dark:hidden': has_dark }"
    />
    <img
      v-if="has_dark"
      :src="`/svg/sponsors/${name}-dark.svg`"
      :alt="`${title} logo`"
      width="256"
      height="256"
      class="hidden max-h-16 w-full object-contain transition duration-300 group-hover:scale-105 dark:block"
    />
  </a>
</template>
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: undefined,
  },
  has_dark: {
    type: Boolean,
    default: false,
  },
});

const title = computed(() => props.title ?? props.name);
</script>
