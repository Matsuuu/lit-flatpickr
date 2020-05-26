import { html, LitElement, property } from 'lit-element';
import 'flatpickr';
import { FlatpickrTheme } from './styles/Themes';
import StyleLoader from './StyleLoader';

declare const flatpickr: any;

export class LitFlatpickr extends LitElement {
  @property({ type: String })
  theme = 'light';

  firstUpdated() {
    this.init();
  }

  async init(): Promise<void> {
    const styleLoader = new StyleLoader(this.theme as FlatpickrTheme);
    await styleLoader.initStyles();
    this.initializeComponent();
  }

  initializeComponent(): void {
    const inputElement = this.shadowRoot?.querySelector('.lit-flatpickr');
    flatpickr(inputElement);
  }

  render() {
    return html` <input class="lit-flatpickr" /> `;
  }
}
