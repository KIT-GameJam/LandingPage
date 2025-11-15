<template>
  <div class="group relative">
    <div
      class="bg-second-50 dark:bg-second-950 flex transform flex-col items-start gap-y-2 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <h3 class="text-2xl font-bold">
        {{ title }}
      </h3>
      <p class="text-prime-600 text-sm font-medium dark:text-white/80">
        {{ date }}
      </p>
      <LayoutDividerLine />
      <p class="text-black/90 dark:text-white/90">
        {{ desc }}
      </p>
      <ButtonGradient v-if="link" :href="link"
        >Jetzt anmelden ➡</ButtonGradient
      >
      <ButtonGradientDisabled v-else>Anmeldung in Kürze</ButtonGradientDisabled>
    </div>
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
  link: {
    type: String,
    default: '',
  },
});
</script>
