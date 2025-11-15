<template>
  <div
    class="bg-second-950 dark:bg-second-900 relative isolate overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
  >
    <h2
      class="font-fredoka! mx-auto max-w-3xl text-center text-4xl font-semibold text-white sm:text-5xl"
    >
      {{ title }}
    </h2>
    <p class="text-second-300 mx-auto mt-6 max-w-lg text-center text-lg">
      {{ content }}
    </p>
    <a
      class="text-second-900 hover:bg-second-100 xs:w-fit mx-auto mt-10 flex w-min items-center justify-center gap-x-2 rounded-md bg-white px-12 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      type="button"
      :href="href"
      target="_blank"
    >
      <slot />
    </a>
    <svg
      viewBox="0 0 1024 1024"
      class="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2"
      aria-hidden="true"
    >
      <circle
        cx="512"
        cy="512"
        r="512"
        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
        fill-opacity="0.7"
      />
      <defs>
        <radialGradient
          id="759c1415-0410-454c-8f7c-9a820de03641"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(512 512) rotate(90) scale(512)"
        >
          <stop stop-color="#7775D6" />
          <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>
