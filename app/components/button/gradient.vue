<template>
  <a
    class="gradient-r rounded-3xl px-5 py-2 text-white transition ease-in-out hover:scale-110"
    :href="href"
    :target="target"
    ><slot
  /></a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '#',
  },
  target: {
    type: String,
    default: '_self',
  },
});
</script>
