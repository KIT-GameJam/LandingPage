export default defineI18nConfig(() => {
  return {
    datetimeFormats: {
      en: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
        },
      },
      de: {
        short: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          weekday: 'short',
        },
      },
    },
  };
});
