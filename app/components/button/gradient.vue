<template>
  <a
    class="gradient-r xs:inline hidden rounded-3xl px-5 py-2 text-white transition ease-in-out hover:scale-110"
    :href="href"
    ><slot
  /></a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '#',
  },
});
</script>
