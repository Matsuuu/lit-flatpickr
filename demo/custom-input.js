import { LitElement, html } from 'lit-element';

export default class CustomInput extends LitElement {
  render() {
    return html`<div><input placeholder="dd/mm/yyyy" /></div>`;
  }
}

if (!customElements.get('custom-input')) {
  customElements.define('custom-input', CustomInput);
}
