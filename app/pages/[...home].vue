<template>
  <LayoutSection id="hero">
    <EffectBackgroundGradient />
    <div
      class="flex flex-col-reverse items-center justify-center gap-x-20 md:flex-row"
    >
      <div class="flex flex-col items-center justify-center gap-y-14">
        <div class="text-left">
          <h1
            class="font-fredoka! gradient-br mx-auto max-w-4xl bg-clip-text text-5xl font-semibold tracking-tight text-transparent select-none sm:text-7xl"
          >
            {{ $t('home.hero.title.develop') }}<br />
            {{ $t('home.hero.title.meet') }}<br />
            {{ $t('home.hero.title.play') }}
          </h1>
          <p
            class="text-second-700 dark:text-second-300 mx-auto mt-6 max-w-lg text-lg tracking-tight"
          >
            {{ $t('home.hero.subtitle') }}
          </p>
        </div>
      </div>
      <EffectLogoDripping class="items-center justify-center md:flex" />
    </div>
  </LayoutSection>

  <LayoutDividerWave rotate />
  <LayoutSection id="schedule" class="bg-second-100 dark:bg-second-900">
    <LayoutHeading>Events</LayoutHeading>
    <div
      class="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <CardEvent
        :title="$t('home.schedule.events.4.title')"
        :desc="$t('home.schedule.events.4.desc')"
        :date="$t('home.schedule.events.4.date')"
      />
      <CardEvent
        :title="$t('home.schedule.events.3.title')"
        :desc="$t('home.schedule.events.3.desc')"
        :date="$t('home.schedule.events.3.date')"
      />
      <CardEvent
        :title="$t('home.schedule.events.2.title')"
        :desc="$t('home.schedule.events.2.desc')"
        :date="$t('home.schedule.events.2.date')"
        link="https://itch.io/jam/birne-kit-gamejam/results"
        past
      />
      <CardEvent
        :title="$t('home.schedule.events.1.title')"
        :desc="$t('home.schedule.events.1.desc')"
        :date="$t('home.schedule.events.1.date')"
        :button_text="$t('home.schedule.view_game')"
        link="https://kit-gamejam.itch.io/gpn23-jam"
        past
      />
      <CardEvent
        :title="$t('home.schedule.events.0.title')"
        :desc="$t('home.schedule.events.0.desc')"
        :date="$t('home.schedule.events.0.date')"
        link="https://itch.io/jam/apfel-kit-gamejam/results"
        past
      />
    </div>
  </LayoutSection>
  <LayoutDividerWave />

  <LayoutSection id="join" class="py-16 sm:py-24" no_padding>
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
    <div
      class="mt-16 flex flex-col items-center justify-center gap-12 md:flex-row"
    >
      <Sponsor link="https://gameforge.com" name="gameforge" has_dark />
      <Sponsor link="https://energy4u.org/" name="energy4u" has_dark />
    </div>
  </LayoutSection>
</template>
<script setup lang="ts">
import Sponsor from '~/components/sponsor.vue';
</script>
