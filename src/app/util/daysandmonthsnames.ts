export const weekDayNames = weekDays();
export const monthNames = months();

function weekDays(countryCode?: string): Readonly<string[]> {
  const date = new Date();
  const day = date.getDate();
  if (typeof navigator === 'undefined') {
    return [];
  }
  countryCode ??= navigator.language;
  return Array.from({ length: 7 })
    .map((e, i) => {
      const workDate = new Date(date.setDate(day + i));
      return [
        new Intl.DateTimeFormat(countryCode, {
          weekday: 'long'
        }).format(workDate),
        workDate.getDay()
      ];
    })
    .sort((a, b) => (a[1] < b[1] ? -1 : 1))
    .map(d => d[0] as string);
}

function months(countryCode?: string): readonly string[] {
  if (typeof navigator === 'undefined') {
    return [];
  }
  countryCode ??= navigator.language;
  return Array.from({ length: 12 }).map((e, i) => {
    return new Intl.DateTimeFormat(countryCode, {
      month: 'short'
    })
      .format(new Date(2000, i, 2))
      .substr(0, 3);
  });
}
