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
          {{ $t('home.hero.subtitle') }}
        </h2>
      </div>
    </div>
  </LayoutSection>

  <LayoutDividerWave rotate />
  <LayoutSection id="schedule" class="bg-second-100 dark:bg-second-900">
    <LayoutHeading>{{ $t('nav.schedule') }}</LayoutHeading>
    <div class="mt-12 flex flex-col gap-y-4">
      <CardEvent
        title="Erste KIT GameJam"
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet."
        date="Erstes Aprilwochenende: Fr. 04.04. - So 06.04."
      />
      <CardEvent
        title="GPN GameJam"
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet."
        date="GPN Wochenende: 19.06.2025 bis 22.06.2025"
      />
    </div>
  </LayoutSection>
  <LayoutDividerWave />

  <section id="join" class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <CardLink
        :title="$t('home.community.head')"
        :content="$t('home.community.content')"
        href="https://discord.gg/A6vQ7bPuSp"
      >
        <span class="flex items-center justify-center gap-x-2">
          <img
            height="16"
            width="16"
            src="/svg/discord.svg"
            alt="discord_logo"
          />
          <span>{{ $t('home.community.join') }}</span>
        </span>
      </CardLink>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
