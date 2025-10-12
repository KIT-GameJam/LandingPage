<template>
  <LayoutSection id="hero">
    <EffectBackgroundGradient />
    <div class="flex flex-col items-center justify-center gap-y-14">
      <img src="/svg/kgj_logo.svg" alt="KIT GameJam" height="256" width="256" />

      <div class="text-center">
        <h1
          class="font-display text-second-900 dark:text-second-100 mx-auto max-w-4xl text-5xl font-medium tracking-tight sm:text-7xl"
        >
          KIT GameJam
        </h1>
        <h2
          class="text-second-700 dark:text-second-300 mx-auto mt-6 max-w-2xl text-lg tracking-tight"
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
        :title="$t('home.schedule.events.1.title')"
        :desc="$t('home.schedule.events.1.desc')"
        :date="$t('home.schedule.events.1.date')"
        link="https://itch.io/jam/birne-kit-gamejam"
      />
    </div>
  </LayoutSection>
  <LayoutDividerWave />

  <LayoutSection id="join" class="py-16 sm:py-24">
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
  </LayoutSection>

  <LayoutSection id="schedule">
    <LayoutHeading>{{ $t('home.sponsors.title') }}</LayoutHeading>
    <div class="mt-16 flex items-center justify-center gap-12">
      <Sponsor link="https://gameforge.com" name="gameforge" has_dark />
      <Sponsor link="https://energy4u.org/" name="energy4u" has_dark />
    </div>
  </LayoutSection>
</template>
<script setup lang="ts">
import Sponsor from '~/components/sponsor.vue';
</script>
