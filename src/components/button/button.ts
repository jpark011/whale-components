import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('wl-button')
export default class WlButton extends LitElement {
  static styles = css`
    :host {
      background-color: var(--color, blue);
    }
  `;

  render() {
    return html` <button><slot></slot></button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wl-button': WlButton;
  }
}
