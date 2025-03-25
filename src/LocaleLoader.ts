import { getCDNBase } from './CdnManager';

export async function loadLocale(locale: string) {
  const themeUrl = getCDNBase() + 'l10n/' + locale + '.js';
  const themeData = await import(themeUrl);
}
