<template>
  <div
    class="bg-second-50 dark:bg-second-950 flex h-full transform flex-col items-start gap-y-2 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
  >
    <div class="flex w-full flex-row items-center justify-between gap-x-2">
      <h3 class="text-2xl font-bold">
        {{ title }}
      </h3>
      <Badge v-if="past">{{ $t('home.schedule.past') }}</Badge>
      <a
        v-else
        :href="calendar"
        :title="$t('home.schedule.add_to_calendar')"
        :aria-label="$t('home.schedule.add_to_calendar')"
        download
        class="text-second-600 hover:text-second-500 dark:text-second-400 dark:hover:text-second-300 shrink-0 transition-colors"
      >
        <CalendarIcon class="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
    <p class="text-prime-600 dark:text-prime-400 text-sm font-medium">
      {{ $d(parseLocalDate(start), 'long') }} -
      {{ $d(parseLocalDate(end), 'long') }}
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
import { CalendarIcon } from '@heroicons/vue/24/outline';
import { parseLocalDate } from '#shared/utils/date';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  /** first day, YYYY-MM-DD */
  start: {
    type: String,
    required: true,
  },
  /** last day (inclusive), YYYY-MM-DD */
  end: {
    type: String,
    required: true,
  },
  /** URL of the .ics file for this event */
  calendar: {
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
});

// The last day still counts as "ongoing"; only afterwards the event is past.
const past = computed(() => {
  const endOfEvent = parseLocalDate(props.end);
  endOfEvent.setHours(23, 59, 59, 999);
  return endOfEvent.getTime() < Date.now();
});
</script>
