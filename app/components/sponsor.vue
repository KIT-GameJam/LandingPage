<template>
  <a
    :href="link"
    target="_blank"
    class="dark:shadow-second-700 shadow-second-300 flex h-[150px] w-[300px] items-center justify-center rounded-3xl transition hover:shadow-2xl"
  >
    <img
      :src="`/svg/sponsors/${name}.svg`"
      :alt="`${name} logo`"
      width="256"
      height="256"
      :class="{ 'dark:hidden': has_dark }"
    />
    <img
      v-if="has_dark"
      :src="`/svg/sponsors/${name}-dark.svg`"
      :alt="`${name} logo`"
      width="256"
      height="256"
      class="hidden dark:block"
    />
  </a>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  has_dark: {
    type: Boolean,
    default: false,
  },
});
</script>
