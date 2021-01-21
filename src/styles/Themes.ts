const styleRepository = 'https://npmcdn.com/flatpickr@4.6.9/dist/themes/';

export enum FlatpickrTheme {
  light = 'light',
  dark = 'dark',
  materialBlue = 'material_blue',
  materialGreen = 'material_green',
  materialOrange = 'material_orange',
  materialRed = 'material_red',
  airbnb = 'airbnb',
  confetti = 'confetti',
}

export function getStyleRepository(theme: FlatpickrTheme): string {
  return `${styleRepository}${theme}.css`;
}
