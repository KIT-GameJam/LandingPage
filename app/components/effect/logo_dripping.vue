<template>
  <div class="h-96 min-h-96 md:h-full">
    <div class="inset-0 flex items-center justify-center">
      <div class="relative h-64 w-64">
        <div
          class="from-crimson-200 dark:from-crimson-800 to-violet-eggplant-200 dark:to-violet-eggplant-800 absolute inset-0 rounded-2xl bg-gradient-to-br blur-3xl"
        ></div>

        <div
          class="animate-float-random-slow border-crimson-600 dark:border-crimson-400 absolute -top-12 -left-12 h-24 w-24 rounded-full border-4 opacity-60"
        ></div>
        <div
          class="animate-float-slow border-violet-eggplant-600 dark:border-violet-eggplant-400 absolute -right-12 -bottom-12 h-32 w-32 rounded-full border-4 opacity-60"
          :style="{ animationDirection: 'reverse' }"
        ></div>

        <div class="absolute inset-0 flex items-center justify-center">
          <img
            src="/svg/kgj_logo.svg"
            alt="KIT GameJam Logo"
            height="256"
            width="256"
            class="h-full w-full object-contain drop-shadow-2xl"
          />
        </div>

        <div
          class="animate-jam-drip bg-crimson-600 absolute bottom-20 left-1/4 h-4 w-4 rounded-full opacity-80"
        ></div>
        <div
          class="animate-jam-drip bg-violet-eggplant-500 absolute bottom-40 left-1/3 h-3 w-3 rounded-full opacity-60"
          :style="{ animationDelay: '0.5s' }"
        ></div>
        <div
          class="animate-jam-drip bg-crimson-300 absolute right-1/4 bottom-32 h-2 w-2 rounded-full opacity-70"
          :style="{ animationDelay: '1s' }"
        ></div>
      </div>
    </div>
  </div>
</template>
