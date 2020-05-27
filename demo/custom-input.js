import { LitElement, html } from 'lit-element';

export default class CustomInput extends LitElement {
  render() {
    return html`<div><input /></div>`;
  }
}

if (!customElements.get('custom-input')) {
  customElements.define('custom-input', CustomInput);
}
