<template>
  <LayoutSection id="hero">
    <EffectBackgroundGradient />
    <div
      class="flex flex-col-reverse items-center justify-center gap-x-20 md:flex-row"
    >
      <div class="flex flex-col items-center justify-center gap-y-14">
        <div class="text-left">
          <h1
            class="from-crimson-600 dark:from-crimson-500 mx-auto max-w-4xl bg-gradient-to-br to-violet-600 bg-clip-text text-5xl font-semibold tracking-tight text-transparent select-none sm:text-7xl dark:to-violet-500"
          >
            Entwickeln.<br />Spielen.<br />Treffen.
          </h1>
          <p
            class="text-second-700 dark:text-second-300 mx-auto mt-6 max-w-lg text-lg tracking-tight"
          >
            Als quirlig-kreative Hochschulgruppe lassen wir die
            Spieleentwicklungskultur an Karlsruher Hochschulen aufleben. Dafür
            veranstalten wir regelmäßig eigene lokale GameJams für alle, die
            Lusts aufs Experimentieren, Entwickeln und gemeinschaftliche Tüfteln
            haben. Dabei spielt es keine Rolle, ob du noch Neuling oder echter
            Veteran*in bist - bei uns sind alle herzlich willkommen!
          </p>
        </div>
      </div>
      <LogoDripping class="items-center justify-center md:flex" />
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
