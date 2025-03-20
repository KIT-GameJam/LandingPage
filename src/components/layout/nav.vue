<template>
  <header class="z-10">
    <nav>
      <div
        class="flex w-full items-center justify-between gap-x-12 bg-gradient-to-br from-red-200 to-violet-200 p-6 dark:from-red-800 dark:to-violet-800"
      >
        <div class="flex gap-x-12">
          <a
            class="group flex items-center justify-center gap-x-4 text-2xl font-bold"
            href="/"
          >
            <img
              class="hidden transition-transform group-hover:-rotate-12 xs:inline-block"
              height="48"
              width="48"
              src="/svg/kgj_logo.svg"
              alt="logo"
            />
            <span>
              <span>KIT&nbsp;GameJam</span>
            </span>
          </a>

          <div
            class="text-md hidden items-center space-x-12 font-medium text-second-700 dark:text-second-300 xs:flex"
          >
            <a
              class="hidden rounded-md px-2 py-1 hover:bg-prime-50 dark:hover:bg-prime-950 sm:inline"
              href="/#schedule"
              >{{ $t('nav.schedule') }}</a
            >
            <a
              class="hidden rounded-md px-2 py-1 hover:bg-prime-50 dark:hover:bg-prime-950 sm:inline"
              href="/#join"
              >{{ $t('nav.join') }}</a
            >
          </div>
        </div>
        <div class="flex gap-x-6">
          <SettingTheme />
          <SettingLang />
        </div>
      </div>

      <div
        class="h-1 bg-gradient-to-r from-red-300 to-violet-300 dark:from-red-700 dark:to-violet-700"
      />
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
