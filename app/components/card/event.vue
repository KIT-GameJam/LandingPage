<template>
  <div
    class="transform rounded-3xl bg-second-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:bg-second-950"
  >
    <h3 class="mb-3 text-2xl font-bold">
      {{ title }}
    </h3>
    <p class="mb-2 text-black/90 dark:text-white/90">
      {{ desc }}
    </p>
    <p class="text-sm text-black/80 dark:text-white/80">
      {{ date }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>
