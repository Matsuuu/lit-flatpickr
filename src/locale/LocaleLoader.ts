import { CONFIG_LOCALE } from './Locale';
import english from 'flatpickr/dist/l10n/default';
import { CustomLocale } from 'flatpickr/dist/types/locale';

export default class LocaleLoader {
  constructor(public locale: string) {
    this.locale = locale;
  }

  async initializeLocale(): Promise<CustomLocale> {
    if (!this.locale) {
      return Promise.resolve(english);
    }
    const locale = Object.values(CONFIG_LOCALE).filter(lang => lang['key'] === this.locale)[0];
    if (!locale) {
      return Promise.resolve(english);
    }
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const lang: any = await import(`flatpickr/dist/l10n/${locale['key']}.js`);

    return Promise.resolve(lang[locale['value']]);
  }
}
