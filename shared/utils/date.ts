/**
 * Parse a `YYYY-MM-DD` string as a local date at noon, so formatting it in
 * any browser time zone yields the same calendar day.
 */
export function parseLocalDate(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number) as [
    number,
    number,
    number,
  ];
  return new Date(year, month - 1, day, 12);
}

/** Add `days` to a `YYYY-MM-DD` string and return `YYYY-MM-DD`. */
export function addDays(iso: string, days: number): string {
  const date = new Date(`${iso}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}
