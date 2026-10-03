export default defineI18nConfig(() => ({
  datetimeFormats: {
    en: {
      long: {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    },
    de: {
      long: {
        weekday: 'short',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
    },
  },
}));
