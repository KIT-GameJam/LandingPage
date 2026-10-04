import ical from 'ical-generator';
import events from './app/assets/events.json' with { type: 'json' };
import de from './app/locales/de-DE.json' with { type: 'json' };
import en from './app/locales/en-US.json' with { type: 'json' };
import fs from 'node:fs';

const i18n = {
  de,
  en,
};

for (const [lang_code, lang] of Object.entries(i18n)) {
  const calendar_all = ical();

  for (const event of events) {
    const event_data = {
      summary: lang.home.schedule.events[event.id].title,
      description: lang.home.schedule.events[event.id].desc,
      url: event.link,
      organizer: 'KT GameJam <info@kit-gamejam.de>',
      location: event.location,
      timezone: 'Europe/Berlin',
      allDay: true,
      start: event.start,
      end: new Date(Date.parse(event.end) + 24 * 60 * 60 * 1000),
    };

    const calendar = ical();
    calendar.createEvent(event_data);
    calendar_all.createEvent(event_data);

    fs.writeFileSync(
      `public/events/event-${event.id}-${lang_code}.ics`,
      calendar.toString(),
    );
  }
  fs.writeFileSync(
    `public/events/events-all-${lang_code}.ics`,
    calendar_all.toString(),
  );
}
