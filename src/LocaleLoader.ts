const themeUrlPrefix = 'https://npmcdn.com/flatpickr@4.6.9/dist/l10n';

export async function loadLocale(locale: string) {
  const themeUrl = themeUrlPrefix + '/' + locale + '.js';
  const themeData = await import(themeUrl);
}
