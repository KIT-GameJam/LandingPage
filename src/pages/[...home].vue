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

  <LayoutSection id="join">
    <LayoutHeading> Join </LayoutHeading>
  </LayoutSection>
</template>
<script setup lang="ts"></script>
