import ical from 'ical-generator';
import { events, locales, type Locale } from '#shared/events';
import { addDays } from '#shared/utils/date';
import de from '~~/app/locales/de-DE.json';
import en from '~~/app/locales/en-US.json';

const messages: Record<Locale, unknown> = { de, en };

const SITE_HOST = 'gamejam.hsg.kit.edu';
const SITE_URL = `https://${SITE_HOST}`;

function translate(locale: Locale, path: string): string {
  const value = path
    .split('.')
    .reduce<unknown>(
      (current, key) =>
        current && typeof current === 'object'
          ? (current as Record<string, unknown>)[key]
          : undefined,
      messages[locale],
    );
  return typeof value === 'string' ? value : path;
}

export default defineEventHandler((e) => {
  const lang = getRouterParam(e, 'lang') ?? '';
  const file = getRouterParam(e, 'file') ?? '';

  if (!(locales as readonly string[]).includes(lang)) {
    throw createError({ statusCode: 404, statusMessage: 'Unknown language' });
  }
  const locale = lang as Locale;

  if (!file.endsWith('.ics')) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' });
  }
  const id = file.slice(0, -'.ics'.length);

  const selected =
    id === 'all' ? events : events.filter((event) => event.id === id);
  if (selected.length === 0) {
    throw createError({ statusCode: 404, statusMessage: 'Unknown event' });
  }

  const calendar = ical({
    name: 'KIT GameJam',
    prodId: { company: 'KIT GameJam', product: 'Landing Page', language: lang },
    url: SITE_URL,
    ttl: 60 * 60 * 24,
  });

  for (const event of selected) {
    calendar.createEvent({
      id: `${event.id}@${SITE_HOST}`,
      allDay: true,
      start: event.start,
      // DTEND is exclusive for all-day events
      end: addDays(event.end, 1),
      summary: translate(locale, `${event.key}.title`),
      description: translate(locale, `${event.key}.desc`),
      location: event.location ?? null,
      url: event.link ?? SITE_URL,
      organizer: { name: 'KIT GameJam', email: 'info@kit-gamejam.de' },
    });
  }

  setHeader(e, 'Content-Type', 'text/calendar; charset=utf-8');
  if (id !== 'all') {
    setHeader(e, 'Content-Disposition', `attachment; filename="${id}.ics"`);
  }
  return calendar.toString();
});
