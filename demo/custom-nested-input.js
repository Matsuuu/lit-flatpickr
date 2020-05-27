import { LitElement, html } from 'lit-element';
import './custom-input';

class FirstLevelInput extends LitElement {
  render() {
    return html`<second-level-input></second-level-input>`;
  }
}

class SecondLevelInput extends LitElement {
  render() {
    return html`<custom-input></custom-input>`;
  }
}

class SlottedInput extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}

if (!customElements.get('first-level-input')) {
  customElements.define('first-level-input', FirstLevelInput);
}

if (!customElements.get('second-level-input')) {
  customElements.define('second-level-input', SecondLevelInput);
}

if (!customElements.get('slotted-input')) {
  customElements.define('slotted-input', SlottedInput);
}
