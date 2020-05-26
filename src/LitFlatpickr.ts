import { html, LitElement, property } from 'lit-element';
import 'flatpickr';
import { FlatpickrTheme } from './styles/Themes';
import StyleLoader from './StyleLoader';
import { DateLimit, DateOption, Hook, Options, BaseOptions } from 'flatpickr/dist/types/options';
import { Locale } from 'flatpickr/dist/types/locale';

declare const flatpickr: any;

export class LitFlatpickr extends LitElement {
  /**
   * Exactly the same as date format, but for the altInput field
   * @prop
   * @type string
   **/
  @property({ type: String })
  altFormat = 'F j, Y';
  /**
   * Show the user a readable date (as per altFormat), but return something totally different to the server.
   * @prop
   * @type boolean
   * */
  @property({ type: Boolean })
  altInput = false;
  /**
   * This class will be added to the input element created by the altInput option.
   * Note that altInput already inherits classes from the original input.
   * @prop
   * @type string
   * */
  @property({ type: String })
  altInputClass = '';
  /**
   * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
   * @prop
   * @type boolean
   **/
  @property({ type: Boolean })
  allowInput = false;
  /**
   * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat.
   * If you change this, you should choose a value that will make sense if a screen reader reads it out loud
   * @prop
   * @type string
   **/
  @property({ type: String })
  ariaDateFormat = 'F j, Y';

  /**
   * Whether clicking on the input should open the picker.
   * You could disable this if you wish to open the calendar manually with.open()
   * */
  @property({ type: Boolean })
  clickOpens = true;

  @property({ type: String })
  dateFormat = 'Y-m-d';

  @property({ type: String })
  defaultDate?: string;

  @property({ type: Number })
  defaultHour = 12;

  @property({ type: Number })
  defaultMinute = 0;

  @property({ type: Array })
  disable: DateLimit<DateOption>[] = [];

  @property({ type: Boolean })
  disableMobile = false;

  @property({ type: Array })
  enable: DateLimit<DateOption>[] = [];

  @property({ type: Boolean })
  enableTime = false;

  @property({ type: Boolean })
  enableSeconds = false;

  @property({ type: Function })
  formatDate?: (date: Date, format: string, locale: Locale) => string;

  @property({ type: Number })
  hourIncrement = 1;

  @property({ type: Number })
  minuteIncrement = 5;

  @property({ type: Boolean })
  inline = false;

  @property({ type: String })
  maxDate?: DateOption;

  @property({ type: String })
  minDate?: DateOption;

  @property({ type: String })
  mode: 'single' | 'multiple' | 'range' | 'time' = 'single';

  @property({ type: String })
  nextArrow = '>';

  @property({ type: String })
  prevArrow = '<';

  @property({ type: Boolean })
  noCalendar = false;

  @property({ type: Function })
  onChange?: Hook;

  @property({ type: Function })
  onClose?: Hook;

  @property({ type: Function })
  onOpen?: Hook;

  @property({ type: Function })
  onReady?: Hook;

  @property({ type: Function })
  parseDate?: (date: string, format: string) => Date;

  @property({ type: String })
  position: 'auto' | 'above' | 'below' = 'auto';

  @property({ type: Boolean })
  shorthandCurrentMonth = false;

  @property({ type: Number })
  showMonths = 1;

  @property({ type: Boolean })
  static = false;

  @property({ type: Boolean })
  time_24hr = false;

  @property({ type: Boolean })
  weekNumbers = false;

  @property({ type: Boolean })
  wrap = false;

  @property({ type: String })
  theme = 'light';

  firstUpdated() {
    this.init();
  }

  async init(): Promise<void> {
    const styleLoader = new StyleLoader(this.theme as FlatpickrTheme);
    await styleLoader.initStyles();
    this.initializeComponent();
    this.getConfig();
  }

  getConfig(): Options {
    return {
      altFormat: this.altFormat,
      altInput: this.altInput,
      altInputClass: this.altInputClass,
      allowInput: this.allowInput,
      ariaDateFormat: this.ariaDateFormat,
      clickOpens: this.clickOpens,
      dateFormat: this.dateFormat,
      defaultDate: this.defaultDate,
      defaultHour: this.defaultHour,
      defaultMinute: this.defaultMinute,
      disable: this.disable,
      disableMobile: this.disableMobile,
      enable: this.enable,
      enableTime: this.enableTime,
      enableSeconds: this.enableSeconds,
      formatDate: this.formatDate,
      hourIncrement: this.hourIncrement,
      inline: this.inline,
      maxDate: this.maxDate,
      minDate: this.minDate,
      minuteIncrement: this.minuteIncrement,
      mode: this.mode,
      nextArrow: this.nextArrow,
      prevArrow: this.prevArrow,
      noCalendar: this.noCalendar,
      onChange: this.onChange,
      onClose: this.onClose,
      onOpen: this.onOpen,
      onReady: this.onReady,
      parseDate: this.parseDate,
      position: this.position,
      shorthandCurrentMonth: this.shorthandCurrentMonth,
      showMonths: this.showMonths,
      static: this.static,
      // eslint-disable-next-line @typescript-eslint/camelcase
      time_24hr: this.time_24hr,
      weekNumbers: this.weekNumbers,
      wrap: this.wrap,
    };
  }

  initializeComponent(): void {
    const inputElement = this.shadowRoot?.querySelector('.lit-flatpickr');
    flatpickr(inputElement, this.getConfig());
  }

  render() {
    return html` <input class="lit-flatpickr" /> `;
  }
}
