<template>
  <a :href="link" target="_blank">
    <img
      :src="`/svg/sponsors/${name}.svg`"
      :alt="`${name} logo`"
      width="512"
      height="512"
      :class="{ 'dark:hidden': has_dark }"
    />
    <img
      v-if="has_dark"
      :src="`/svg/sponsors/${name}-dark.svg`"
      :alt="`${name} logo`"
      width="512"
      height="512"
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
