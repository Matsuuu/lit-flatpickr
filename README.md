# lit-flatpickr

[![npm version](https://badge.fury.io/js/lit-flatpickr.svg)](https://badge.fury.io/js/lit-flatpickr)

[Flatpickr](https://github.com/flatpickr/flatpickr) for Lit Element

## Installation

Lit-Flatpickr can be installed through npm

```bash
npm install lit-flatpickr
```

## Usage

It is highly recommended that you use lit-flatpickr as a wrapper for your own custom input elements, to provide the
best User experience for the users.

```js
import 'lit-flatpickr';
import { html, LitElement } from 'lit';

class MyApp extends LitElement {
  getValue() {
    this.shadowRoot.querySelector('#my-date-picker').getValue();
  }

  render() {
    return html`
      <lit-flatpickr
        id="my-date-picker"
        altInput
        altFormat="F j, Y"
        dateFormat="Y-m-d"
        theme="material_orange"
        minDate="2020-01"
        maxDate="2020-12-31"
      ></lit-flatpickr>
    `;
  }
}
```

#### Styling the input component

```js
html`
  <style>
    lit-flatpickr {
      cursor: pointer;
      font-size: 38px;
    }
  </style>
  <lit-flatpickr id="my-date-picker" altInput altFormat="F j, Y" dateFormat="Y-m-d" theme="material_orange" minDate="2020-01" maxDate="2020-12-31"></lit-flatpickr> `;
`
```

#### Using your own custom input Web Component

```js
// Web Component
html`
  <lit-flatpickr>
    <my-custom-input></my-custom-input>
  </lit-flatpickr>
`;

// HTML
html`
  <lit-flatpickr>
    <div>
      <input />
    </div>
  </lit-flatpickr>
`;
```

#### Define your own CDN source

```javascript
import { setCDNBase } from 'lit-flatpickr/src/CdnManager.js';

setCDNBase('https://unpkg.com/flatpickr@4.6.13/dist/');
```

## Properties

| Property                | Attribute               | Type                                                                                                                                  | Default  | Description                                                                                                                                                                                                                                                                   |
| ----------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowInput`            | `allowInput`            | `boolean`                                                                                                                             | false    | Allows the user to enter a date directly input the input field. By default, direct entry is disabled.                                                                                                                                                                         |
| `altFormat`             | `altFormat`             | `string`                                                                                                                              | "F j, Y" | Exactly the same as date format, but for the altInput field                                                                                                                                                                                                                   |
| `altInput`              | `altInput`              | `boolean`                                                                                                                             | false    | Show the user a readable date (as per altFormat), but return something totally different to the server.                                                                                                                                                                       |
| `altInputClass`         | `altInputClass`         | `string`                                                                                                                              | ""       | This class will be added to the input element created by the altInput option.<br />Note that altInput already inherits classes from the original input.                                                                                                                       |
| `ariaDateFormat`        | `ariaDateFormat`        | `string`                                                                                                                              | "F j, Y" | Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat.<br />If you change this, you should choose a value that will make sense if a screen reader reads it out loud                                                 |
| `clickOpens`            | `clickOpens`            | `boolean`                                                                                                                             | true     | Whether clicking on the input should open the picker.<br />You could disable this if you wish to open the calendar manually with.open()                                                                                                                                       |
| `dateFormat`            | `dateFormat`            | `string`                                                                                                                              | "Y-m-d"  | A string of characters which are used to define how the date will be displayed in the input box.                                                                                                                                                                              |
| `defaultDate`           | `defaultDate`           | `DateOption \| DateOption[]`                                                                                                          |          | Sets the initial selected date(s).<br /><br />If you're using mode: "multiple" or a range calendar supply an Array of<br />Date objects or an Array of date strings which follow your dateFormat.<br /><br />Otherwise, you can supply a single Date object or a date string. |
| `defaultHour`           | `defaultHour`           | `number`                                                                                                                              | 12       | Initial value of the hour element.                                                                                                                                                                                                                                            |
| `defaultMinute`         | `defaultMinute`         | `number`                                                                                                                              | 0        | Initial value of the minute element.                                                                                                                                                                                                                                          |
| `disable`               | `disable`               | `DateLimit<DateOption>[]`                                                                                                             | []       | Dates selected to be unavailable for selection.                                                                                                                                                                                                                               |
| `disableMobile`         | `disableMobile`         | `boolean`                                                                                                                             | false    | Set disableMobile to true to always use the non-native picker.<br />By default, flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.                                                                                                    |
| `enable`                | `enable`                | `DateLimit<DateOption>[]`                                                                                                             | []       | Dates selected to be available for selection.                                                                                                                                                                                                                                 |
| `enableSeconds`         | `enableSeconds`         | `boolean`                                                                                                                             | false    | Enables seconds in the time picker                                                                                                                                                                                                                                            |
| `enableTime`            | `enableTime`            | `boolean`                                                                                                                             | false    | Enables time picker                                                                                                                                                                                                                                                           |
| `formatDateFn`          | `formatDateFn`          | `((date: Date, format: string, locale: Locale) => string) \| undefined`                                                               |          | Allows using a custom date formatting function instead of the built-in<br />handling for date formats using dateFormat, altFormat, etc.<br /><br />Function format: (date: Date, format: string, locale: Locale) => string                                                    |
| `hourIncrement`         | `hourIncrement`         | `number`                                                                                                                              | 1        | Adjusts the step for the hour input (incl. scrolling)                                                                                                                                                                                                                         |
| `inline`                | `inline`                | `boolean`                                                                                                                             | false    | Displays the calendar inline                                                                                                                                                                                                                                                  |
| `maxDate`               | `maxDate`               | `string \| number \| Date \| undefined`                                                                                               |          | The maximum date that a user can pick to (inclusive).                                                                                                                                                                                                                         |
| `minDate`               | `minDate`               | `string \| number \| Date \| undefined`                                                                                               |          | The minimum date that a user can pick to (inclusive).                                                                                                                                                                                                                         |
| `minuteIncrement`       | `minuteIncrement`       | `number`                                                                                                                              | 5        | Adjusts the step for the minute input (incl. scrolling)                                                                                                                                                                                                                       |
| `mode`                  | `mode`                  | `"single" \| "multiple" \| "range"`                                                                                                   | "single" | "single", "multiple", or "range"                                                                                                                                                                                                                                              |
| `nextArrow`             | `nextArrow`             | `string`                                                                                                                              | ">"      | HTML for the arrow icon, used to switch months.                                                                                                                                                                                                                               |
| `noCalendar`            | `noCalendar`            | `boolean`                                                                                                                             | false    | Hides the day selection in calendar.<br />Use it along with enableTime to create a time picker.                                                                                                                                                                               |
| `onChange`              | `onChange`              | `Hook \| undefined`                                                                                                                   |          | Function(s) to trigger on every date selection                                                                                                                                                                                                                                |
| `onClose`               | `onClose`               | `Hook \| undefined`                                                                                                                   |          | Function(s) to trigger every time the calendar is closed                                                                                                                                                                                                                      |
| `onMonthChange`         | `onMonthChange`         | `Hook \| undefined`                                                                                                                   |          | Function(s) to trigger every time the calendar month is changed by the user or programmatically                                                                                                                                                                               |
| `onOpen`                | `onOpen`                | `Hook \| undefined`                                                                                                                   |          | Function(s) to trigger every time the calendar is opened                                                                                                                                                                                                                      |
| `onReady`               | `onReady`               | `Hook \| undefined`                                                                                                                   |          | Function(s) to trigger when the calendar is ready                                                                                                                                                                                                                             |
| `onValueUpdate`         | `onValueUpdate`         | `Hook \| undefined`                                                                                                                   |          | Function(s) to trigger when the input value is updated with a new date string                                                                                                                                                                                                 |
| `onYearChange`          | `onYearChange`          | `Hook \| undefined`                                                                                                                   |          | Function(s) to trigger every time the calendar year is changed by the user or programmatically                                                                                                                                                                                |
| `parseDateFn`           | `parseDateFn`           | `((date: string, format: string) => Date) \| undefined`                                                                               |          | Function that expects a date string and must return a Date object.<br /><br />Function format: (date: string, format: string) => string                                                                                                                                       |
| `position`              | `position`              | `"auto" \| "above" \| "below"`                                                                                                        | "auto"   | Where the calendar is rendered relative to the input                                                                                                                                                                                                                          |
| `prevArrow`             | `prevArrow`             | `string`                                                                                                                              | "<"      | HTML for the arrow icon, used to switch months.                                                                                                                                                                                                                               |
| `shorthandCurrentMonth` | `shorthandCurrentMonth` | `boolean`                                                                                                                             | false    | Show the month using the shorthand version (ie, Sep instead of September)                                                                                                                                                                                                     |
| `showMonths`            | `showMonths`            | `number`                                                                                                                              | 1        | The number of months showed                                                                                                                                                                                                                                                   |
| `static`                | `static`                | `boolean`                                                                                                                             | false    | Position the calendar inside the wrapper and next to the input element                                                                                                                                                                                                        |
| `theme`                 | `theme`                 | `"light" \| "dark" \| "material_blue" \| "material_red" \| "material_green" \| "material_orange" \| "airbnb" \| "confetti" \| "none"` | "light"  | The set theme of flatpickr. Use "none" if you would like to provide custom theme on your own.                                                                                                                                                                                 |
| `time_24hr`             | `time_24hr`             | `boolean`                                                                                                                             | false    | Displays the time picker in 24 hour mode without AM/PM selection when enabled                                                                                                                                                                                                 |
| `weekNumbers`           | `weekNumbers`           | `boolean`                                                                                                                             | false    | Enabled display of week numbers in calendar                                                                                                                                                                                                                                   |
| `wrap`                  | `wrap`                  | `boolean`                                                                                                                             | false    | flatpickr can parse an input group of textboxes and buttons, common in Bootstrap and other frameworks.<br />This permits additional markup, as well as custom elements to trigger the state of the calendar.                                                                  |

## Methods

| Method                | Type                                                                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `changeMonth`         | `(monthNum: number, isOffset?: boolean): void`                                                                                                                                                                                                                 |
| `clear`               | `(): void`                                                                                                                                                                                                                                                     |
| `close`               | `(): void`                                                                                                                                                                                                                                                     |
| `destroy`             | `(): void`                                                                                                                                                                                                                                                     |
| `formatDate`          | `(dateObj: Date, formatStr: string): string`                                                                                                                                                                                                                   |
| `getValue`            | `(): string`                                                                                                                                                                                                                                                   |
| `getConfig`           | `(): ParsedOptions`                                                                                                                                                                                                                                            |
| `getCurrentMonth`     | `(): number`                                                                                                                                                                                                                                                   |
| `getCurrentYear`      | `(): number`                                                                                                                                                                                                                                                   |
| `getOptions`          | `(): Partial<BaseOptions>`                                                                                                                                                                                                                                     |
| `getSelectedDates`    | `(): Date[]`                                                                                                                                                                                                                                                   |
| `init`                | `(): Promise<void>`                                                                                                                                                                                                                                            |
| `initializeComponent` | `(): void`                                                                                                                                                                                                                                                     |
| `jumpToDate`          | `(date: Date, triggerChange: boolean): void`                                                                                                                                                                                                                   |
| `open`                | `(): void`                                                                                                                                                                                                                                                     |
| `parseDate`           | `(dateStr: string, dateFormat: string): Date \| undefined`                                                                                                                                                                                                     |
| `redraw`              | `(): void`                                                                                                                                                                                                                                                     |
| `set`                 | `(option: "allowInput" \| "altFormat" \| "altInput" \| "altInputClass" \| "animate" \| "appendTo" \| "ariaDateFormat" \| "clickOpens" \| "closeOnSelect" \| "conjunction" \| "dateFormat" \| "defaultDate" \| ... 48 more ... \| { ...; }, value?: any): void` |
| `setDate`             | `(date: string \| number \| Date \| DateOption[], triggerChange: boolean, dateStrFormat: string): void`                                                                                                                                                        |
| `toggle`              | `(): void`                                                                                                                                                                                                                                                     |
