<template>
  <div
    class="bg-second-50 dark:bg-second-950 flex h-full transform flex-col items-start gap-y-2 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
  >
    <div class="flex w-full flex-row items-center justify-between gap-x-2">
      <h3 class="text-2xl font-bold">
        {{ title }}
      </h3>
      <Badge v-if="past">{{ $t('home.schedule.past') }}</Badge>
    </div>
    <p class="text-prime-600 dark:text-prime-400 text-sm font-medium">
      {{ date }}
    </p>
    <LayoutDividerLine />
    <p class="dark:text-second-100 text-second-900 mb-1 flex-1">
      {{ desc }}
    </p>
    <ButtonGradient
      class="w-full text-center"
      v-if="link"
      :href="link"
      target="_blank"
      >{{
        button_text ??
        (past ? $t('home.schedule.results') : $t('home.schedule.register'))
      }}</ButtonGradient
    >
    <ButtonGradientDisabled v-else class="w-full text-center">{{
      button_text ?? $t('home.schedule.soon')
    }}</ButtonGradientDisabled>
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
  button_text: {
    type: String,
    default: null,
  },
  past: {
    type: Boolean,
    default: false,
  },
});
</script>
