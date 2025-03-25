import { getCDNBase } from '../CdnManager';

export enum FlatpickrTheme {
  light = 'light',
  dark = 'dark',
  materialBlue = 'material_blue',
  materialGreen = 'material_green',
  materialOrange = 'material_orange',
  materialRed = 'material_red',
  airbnb = 'airbnb',
  confetti = 'confetti',
  none = 'none',
}

export function getStyleRepository(theme: FlatpickrTheme): string {
  return `${getCDNBase()}themes/${theme}.css`;
}
