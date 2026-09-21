import ical from 'ical-generator';
import events from '#shared/events.json' with { type: 'json' };
import de from '#shared/locales/de-DE.json' with { type: 'json' };
import en from '#shared/locales/en-US.json' with { type: 'json' };

const i18n = {
  de,
  en,
};

function getValueByPath(obj, path) {
  return path.split('.').reduce((current, key) => current[key], obj);
}

export default defineEventHandler(e => {
  const id = getRouterParam(e, 'event');
  const lang = getRouterParam(e, 'lang');
  const event_is_all = id == "all";
  const event_id = Number.parseInt(id);

  if (!Object.keys(i18n).includes(lang)) {
    throw createError({
      status: 400,
      statusText: `Unknown language "${lang}". Supported languages: ${Object.keys(i18n).join(',')}. `,
    })
  }

  if (!event_is_all && isNaN(event_id) && (event_id < 0 || event_id >= events.length)) {
    throw createError({
      status: 400,
      statusText: `Unknown event "${id}". Supported events: ${Object.keys(events).join(',')}, all. `,
    })
  }

  const calendar = ical();
  for (const [i, event] of Object.entries(events)) {
    if (!event_is_all && Number.parseInt(i) != event_id) continue;
    const event_data = {
      summary: getValueByPath(i18n[lang], event.title),
      description: getValueByPath(i18n[lang], event.desc),
      url: event.link,
      organizer: 'KT GameJam <info@kit-gamejam.de>',
      location: 'TRIANGEL Space https://osm.org/go/0DPvjeSf_?m=',
      timezone: 'Europe/Berlin',
      start: event.start,
      end: event.end,
    };
    calendar.createEvent(event_data);
  }

  return calendar.toString();
})
