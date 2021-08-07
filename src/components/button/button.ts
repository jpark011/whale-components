import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

export type WlButtonType = 'primary' | 'secondary';

const style = css`
  :host {
    --wl-button-text-color: var(--wl-color-grey-300, white);
    --wl-button-text-color-light: var(--wl-color-grey-100, white);
    --wl-button-text-color-dark: var(--wl-color-grey-500, white);

    --wl-button-background-color: var(--wl-color-primary-500, black);
    --wl-button-background-color-light: var(--wl-color-primary-300, black);
    --wl-button-background-color-dark: var(--wl-color-primary-700, black);

    --wl-button-disabled-background-color: var(--wl-color-grey-500, darkgrey);
    --wl-button-disabled-background-color-light: var(--wl-color-grey-300, darkgrey);
    --wl-button-disabled-background-color-dark: var(--wl-color-grey-700, darkgrey);
  }

  :host([type='secondary']) {
    --wl-button-text-color: var(--wl-color-primary-500);
    --wl-button-text-color-light: var(--wl-color-primary-300);
    --wl-button-text-color-dark: var(--wl-color-primary-700);

    --wl-button-background-color: var(--wl-color-grey-100, darkgrey);
    --wl-button-background-color-light: var(--wl-color-grey-300, darkgrey);
    --wl-button-background-color-dark: var(--wl-color-grey-500, darkgrey);
  }

  button {
    background-color: var(--wl-button-background-color);
    color: var(--wl-button-text-color-light);
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: bold;
  }

  button:hover {
    background-color: var(--wl-button-background-color-light);
    color: var(--wl-button-text-color);
  }

  button:active {
    background-color: var(--wl-button-background-color-dark);
  }

  button:disabled {
    background-color: var(--wl-button-disabled-background-color);
    cursor: not-allowed;
  }
`;

@customElement('wl-button')
export default class WlButton extends LitElement {
  static styles = [style];

  @property({reflect: true})
  type: WlButtonType = 'primary';

  @property({type: Boolean, reflect: true})
  disabled = false;

  protected render(): TemplateResult {
    return html`
      <button
        part="button"
        class=${classMap({
          primary: this.type === 'primary',
          secondary: this.type === 'secondary',
        })}
        .disabled=${this.disabled}
        @click=${this.onClick}
      >
        <slot part="text" class="text">BUTTON</slot>
      </button>
    `;
  }

  private onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wl-button': WlButton;
  }
}
