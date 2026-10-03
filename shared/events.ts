export interface GameJamEvent {
  /** URL-stable slug, used for the .ics file name and the iCal UID */
  id: string;
  /** i18n key prefix, resolved to `${key}.title` and `${key}.desc` */
  key: string;
  /** first day, YYYY-MM-DD */
  start: string;
  /** last day (inclusive), YYYY-MM-DD */
  end: string;
  location?: string;
  link?: string;
  /** i18n key for the card button label */
  button_text?: string;
}

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

/** Newest event first, matching the order on the landing page. */
export const events: GameJamEvent[] = [
  {
    id: 'dattel-jam',
    key: 'home.schedule.events.6',
    start: '2026-10-02',
    end: '2026-10-04',
    location: 'TRIANGEL Space, Karlsruhe',
    link: 'https://itch.io/jam/dattel-kit-gamejam',
  },
  {
    id: 'haeckerspiele-gpn24',
    key: 'home.schedule.events.5',
    start: '2026-06-04',
    end: '2026-06-07',
    location: 'GPN 24, Karlsruhe',
    link: 'https://kit-gamejam.itch.io/gpn23-jam',
    button_text: 'home.schedule.view_game',
  },
  {
    id: 'clementinen-jam',
    key: 'home.schedule.events.4',
    start: '2026-04-24',
    end: '2026-04-26',
    location: 'TRIANGEL Space, Karlsruhe',
    link: 'https://itch.io/jam/clementine-kit-gamejam/results',
  },
  {
    id: 'ggj-2026',
    key: 'home.schedule.events.3',
    start: '2026-01-30',
    end: '2026-02-01',
    location: 'TRIANGEL Space, Karlsruhe',
    link: 'https://globalgamejam.org/group/31532/games',
  },
  {
    id: 'birnen-jam',
    key: 'home.schedule.events.2',
    start: '2025-10-13',
    end: '2025-10-15',
    location: 'TRIANGEL Space, Karlsruhe',
    link: 'https://itch.io/jam/birne-kit-gamejam/results',
  },
  {
    id: 'haeckerspiele-gpn23',
    key: 'home.schedule.events.1',
    start: '2025-06-19',
    end: '2025-06-22',
    location: 'GPN 23, Karlsruhe',
    link: 'https://kit-gamejam.itch.io/gpn23-jam',
    button_text: 'home.schedule.view_game',
  },
  {
    id: 'apfel-jam',
    key: 'home.schedule.events.0',
    start: '2025-04-02',
    end: '2025-04-04',
    location: 'TRIANGEL Space, Karlsruhe',
    link: 'https://itch.io/jam/apfel-kit-gamejam/results',
  },
];

export function icsPath(locale: string, id: string): string {
  return `/events/${locale}/${id}.ics`;
}
