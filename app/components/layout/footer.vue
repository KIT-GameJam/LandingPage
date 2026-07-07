<script setup lang="ts">
import {
  ClipboardDocumentCheckIcon,
  IdentificationIcon,
} from '@heroicons/vue/24/outline';
</script>
<template>
  <footer class="z-10">
    <div
      class="mx-auto max-w-7xl space-y-4 px-6 py-12 md:flex md:items-center md:justify-between md:space-y-0 lg:px-8"
    >
      <p
        class="text-second-400 dark:text-second-500 mt-8 text-center text-sm/6 md:order-1 md:mt-0"
      >
        &copy; 2025-2026 KIT GameJam. All rights reserved.
      </p>
      <Socials>
        <a href="/imprint" :title="$t('imprint.title')"
          ><IdentificationIcon
            class="text-second-400 hover:text-second-500 dark:text-second-500 dark:hover:text-second-400 size-6"
        /></a>
        <a href="/privacy" :title="$t('privacy.title')"
          ><ClipboardDocumentCheckIcon
            class="text-second-400 hover:text-second-500 dark:text-second-500 dark:hover:text-second-400 size-6"
        /></a>
      </Socials>
    </div>
  </footer>
</template>
