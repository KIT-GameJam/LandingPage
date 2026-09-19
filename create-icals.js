import ical from 'ical-generator';
import events from './app/assets/events.json' with { type: 'json' };
import de from './app/locales/de-DE.json' with { type: 'json' };
import en from './app/locales/en-US.json' with { type: 'json' };
import fs from 'node:fs';

const i18n = {
  de,
  en,
};

function getValueByPath(obj, path) {
  return path.split('.').reduce((current, key) => current[key], obj);
}

var events_all = [];

for (const [lang_code, lang] of Object.entries(i18n)) {
  for (const [i, event] of Object.entries(events)) {
    const event_data = {
      summary: getValueByPath(lang, event.title),
      description: getValueByPath(lang, event.desc),
      url: event.link,
      organizer: 'KT GameJam <info@kit-gamejam.de>',
      location: '',
      timezone: 'Europe/Berlin',
      start: event.start,
      end: event.end,
    };

    const calendar = ical();
    calendar.createEvent(event_data);

    events_all.push(event_data);
    fs.writeFileSync(
      `public/events/event-${i}-${lang_code}.ics`,
      calendar.toString(),
    );
  }
  const calendar = ical({ events: events_all });
  fs.writeFileSync(
    `public/events/events-all-${lang_code}.ics`,
    calendar.toString(),
  );
}
