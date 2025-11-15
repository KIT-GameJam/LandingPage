<template>
  <header class="font-fredoka z-10">
    <div>
      <nav class="flex w-full items-center justify-between gap-x-12 p-6">
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
                class="from-crimson-600 dark:from-crimson-500 bg-gradient-to-r to-violet-600 bg-clip-text font-bold text-transparent dark:to-violet-500"
              >
                KIT&nbsp;GameJam
              </span>
              <span
                class="text-second-600 dark:text-second-400 text-xs font-medium"
                >Spieleentwicklung</span
              >
            </span>
          </a>
        </div>
        <div class="flex items-center gap-x-6">
          <div
            class="text-md text-second-700 dark:text-second-300 xs:flex hidden items-center space-x-12 font-medium"
          >
            <a
              class="dark:hover:text-prime-300 hover:text-prime-700 text-second-700 dark:text-second-300 hidden rounded-md px-2 py-1 sm:inline"
              href="/#schedule"
              >{{ $t('nav.schedule') }}</a
            >
            <a
              class="from-crimson-600 hidden rounded-3xl bg-gradient-to-r to-violet-600 px-5 py-2 text-white transition ease-in-out hover:scale-110 sm:inline"
              href="/#join"
              >{{ $t('nav.join') }}</a
            >
          </div>
          <SettingTheme />
          <SettingLang />
        </div>
      </nav>
    </div>
  </header>
</template>
