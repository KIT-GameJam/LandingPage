<template>
  <LayoutSection id="hero">
    <EffectBackgroundGradient />
    <div class="flex flex-col items-center justify-center gap-y-14">
      <img src="/svg/kgj_logo.svg" alt="KIT GameJam" height="256" width="256" />

      <div class="text-center">
        <h1
          class="font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-second-900 dark:text-second-100 sm:text-7xl"
        >
          KIT GameJam
        </h1>
        <h2
          class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-second-700 dark:text-second-300"
        >
          Entwickle Spiele. Lerne Coole Menschen Kennen. Alles Lokal Am KIT.
        </h2>
      </div>
    </div>
  </LayoutSection>

  <LayoutDividerWave rotate />
  <LayoutSection id="schedule" class="h-screen bg-black dark:bg-white">
    <LayoutHeading>Schedule</LayoutHeading>
  </LayoutSection>
  <LayoutDividerWave />

  <LayoutSection id="join" class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-second-950 px-6 py-24 shadow-2xl dark:bg-second-900 sm:rounded-3xl sm:px-24 xl:py-32"
      >
        <h2
          class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {{ $t('home.community.head') }}
        </h2>
        <p class="mx-auto mt-6 max-w-lg text-center text-lg text-second-300">
          {{ $t('home.community.content') }}
        </p>
        <a
          class="shadow-xs mx-auto mt-10 flex w-min items-center justify-center gap-x-2 rounded-md bg-white px-12 py-2.5 text-sm font-semibold text-second-900 hover:bg-second-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xs:w-fit"
          type="button"
          href="https://chat.whatsapp.com/HF1UyLxp5Yc33L8s5rHFGi"
          target="_blank"
        >
          <span>{{ $t('home.community.join') }}</span>
        </a>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
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
    </div>
  </LayoutSection>
</template>
<script setup lang="ts"></script>
