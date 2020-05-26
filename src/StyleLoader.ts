import { getStyleRepository, FlatpickrTheme } from './styles/Themes';

export default class StyleLoader {
  constructor(public theme: FlatpickrTheme) {
    this.theme = theme;
  }

  async initStyles(): Promise<void> {
    const themeIsLoaded: boolean = this.isChosenThemeLoaded();
    if (!themeIsLoaded) {
      this.appendThemeStyles();
      await this.waitForStyleToLoad();
    }
  }

  /**
   * We want to prevent the styles from flickering, so we halt the
   * initialization process until the styles have been loaded
   * */
  waitForStyleToLoad(): Promise<void> {
    return new Promise((resolve, reject) => {
      const checkIfStylesHaveLoaded = (iteration = 0) => {
        if (this.isChosenThemeLoaded()) return resolve();
        if (iteration > 10) {
          throw Error('Styles took too long to load, or were not able to be loaded');
          reject();
        }
        setTimeout(() => checkIfStylesHaveLoaded(iteration++), 100);
      };
      checkIfStylesHaveLoaded();
    });
  }

  isChosenThemeLoaded(): boolean {
    const styleRepository: string = getStyleRepository(this.theme as FlatpickrTheme);
    const styleSheets: StyleSheetList = document.styleSheets;
    let styleSheetAlreadyImported = false;
    for (let i = 0; i < styleSheets.length; i += 1) {
      if (styleSheets[i].href === styleRepository) {
        styleSheetAlreadyImported = true;
        break;
      }
    }
    return styleSheetAlreadyImported;
  }

  appendThemeStyles(): void {
    const styleElem = document.createElement('link');
    styleElem.rel = 'stylesheet';
    styleElem.type = 'text/css';
    styleElem.href = getStyleRepository(this.theme as FlatpickrTheme);
    document.head.append(styleElem);
  }
}
