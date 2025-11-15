<template>
  <header class="font-fredoka z-10">
    <div>
      <nav
        class="flex w-full items-center justify-between gap-x-12 bg-gradient-to-br from-red-200 to-violet-200 p-6 dark:from-red-800 dark:to-violet-800"
      >
        <div class="flex gap-x-12">
          <a
            class="group flex items-center justify-center gap-x-4 text-2xl font-bold"
            href="/"
          >
            <img
              class="xs:inline-block hidden transition-transform group-hover:-rotate-12"
              height="64"
              width="64"
              src="/svg/kgj_logo.svg"
              alt="logo"
            />
            <span class="flex flex-col">
              <span
                class="bg-gradient-to-l from-[#d91e3b] to-[#9c27b0] bg-clip-text font-bold text-transparent dark:from-red-700 dark:to-violet-700"
              >
                KIT&nbsp;GameJam
              </span>
              <span class="text-second-600 text-xs">Spieleentwicklung</span>
            </span>
          </a>

          <div
            class="text-md text-second-700 dark:text-second-300 xs:flex hidden items-center space-x-12 font-medium"
          >
            <a
              class="hover:bg-prime-50 dark:hover:bg-prime-950 hidden rounded-md px-2 py-1 sm:inline"
              href="/#schedule"
              >{{ $t('nav.schedule') }}</a
            >
            <a
              class="hover:bg-prime-50 dark:hover:bg-prime-950 hidden rounded-md px-2 py-1 sm:inline"
              href="/#join"
              >{{ $t('nav.join') }}</a
            >
          </div>
        </div>
        <div class="flex gap-x-6">
          <SettingTheme />
          <SettingLang />
        </div>
      </nav>
      <div
        class="h-1 bg-gradient-to-r from-red-300 to-violet-300 dark:from-red-700 dark:to-violet-700"
      />
    </div>
  </header>
</template>
<script setup lang="ts"></script>
