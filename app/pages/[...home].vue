<template>
  <LayoutSection id="hero">
    <EffectBackgroundGradient />
    <div
      class="flex flex-col-reverse items-center justify-center gap-x-20 md:flex-row"
    >
      <div class="flex flex-col items-start justify-center gap-y-5">
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
        <Socials class="gap-x-4!" />
      </div>
      <EffectLogoDripping class="items-center justify-center md:flex" />
    </div>
  </LayoutSection>

  <LayoutDividerWave rotate />
  <LayoutSection id="schedule" class="bg-second-100 dark:bg-second-900">
    <LayoutHeading>
      Events
      <a
        class="inline-flex items-center"
        :href="`webcal://${$config.public.domain}/api/event/${$i18n.locale}/all/event.ics`"
      >
        <BellAlertIcon
          class="text-second-600 group-hover:text-second-500 dark:text-second-400 h-8 w-8"
          aria-hidden="true"
        />
      </a>
    </LayoutHeading>
    <div
      class="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <CardEvent
        v-for="(event, i) in events"
        :title="$t(event.title)"
        :desc="$t(event.desc)"
        :calendar="`/api/event/${$i18n.locale}/${i}/event.ics`"
        :start="event.start"
        :end="event.end"
        :link="event.link"
        :key="event.title"
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
  <LayoutSection id="faq">
    <LayoutHeading>{{ $t('home.faq.title') }}</LayoutHeading>
    <div class="mt-6">
      <Faq
        :faqs="[
          {
            question: $t('home.faq.faqs.who.question'),
            answer: $t('home.faq.faqs.who.answer'),
          },
          {
            question: $t('home.faq.faqs.attendance.question'),
            answer: $t('home.faq.faqs.attendance.answer'),
          },
          {
            question: $t('home.faq.faqs.teams.question'),
            answer: $t('home.faq.faqs.teams.answer'),
          },
          {
            question: $t('home.faq.faqs.prize.question'),
            answer: $t('home.faq.faqs.prize.answer'),
          },
          {
            question: $t('home.faq.faqs.costs.question'),
            answer: $t('home.faq.faqs.costs.answer'),
          },
          {
            question: $t('home.faq.faqs.food.question'),
            answer: $t('home.faq.faqs.food.answer'),
          },
          {
            question: $t('home.faq.faqs.ai.question'),
            answer: $t('home.faq.faqs.ai.answer'),
          },
          {
            question: $t('home.faq.faqs.items.question'),
            answer: $t('home.faq.faqs.items.answer'),
          },
          {
            question: $t('home.faq.faqs.theme.question'),
            answer: $t('home.faq.faqs.theme.answer'),
          },
          {
            question: $t('home.faq.faqs.publish.question'),
            answer: $t('home.faq.faqs.publish.answer'),
          },
          {
            question: $t('home.faq.faqs.copyright.question'),
            answer: $t('home.faq.faqs.copyright.answer'),
          },
          {
            question: $t('home.faq.faqs.content.question'),
            answer: $t('home.faq.faqs.content.answer'),
          },
          {
            question: $t('home.faq.faqs.sleep.question'),
            answer: $t('home.faq.faqs.sleep.answer'),
          },
          {
            question: $t('home.faq.faqs.ensurance.question'),
            answer: $t('home.faq.faqs.ensurance.answer'),
          },
          {
            question: $t('home.faq.faqs.deadline.question'),
            answer: $t('home.faq.faqs.deadline.answer'),
          },
          {
            question: $t('home.faq.faqs.continue.question'),
            answer: $t('home.faq.faqs.continue.answer'),
          },
        ]"
      />
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
import { BellAlertIcon } from '@heroicons/vue/24/outline';
import Sponsor from '~/components/sponsor.vue';
import events from '#shared/events.json';
</script>
