import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {grey, primary, primaryDark, primaryLight, white, whiteDark} from '../../utils/colors';

export type WlButtonType = 'primary' | 'secondary';

const style = css`
  :host {
    --wl-button-text-color: var(--wl-color-grey-100, ${white});

    --wl-button-background-color: var(--wl-color-primary-500, ${primary});
    --wl-button-hover-background-color: var(--wl-color-primary-300, ${primaryLight});
    --wl-button-active-background-color: var(--wl-color-primary-700, ${primaryDark});
    --wl-button-disabled-background-color: var(--wl-color-grey-500, ${grey});

    display: inline-block;
  }

  :host([type='secondary']) {
    --wl-button-text-color: var(--wl-color-primary-500, ${primary});

    --wl-button-background-color: var(--wl-color-grey-100, ${white});
    --wl-button-hover-background-color: var(--wl-color-grey-300, ${whiteDark});
    --wl-button-active-background-color: var(--wl-color-grey-500, ${primaryLight});
  }

  button {
    background-color: var(--wl-button-background-color);
    color: var(--wl-button-text-color);
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  button.secondary {
    border: 2px solid var(--wl-button-text-color);
  }

  button:hover {
    background-color: var(--wl-button-hover-background-color);
    color: var(--wl-button-text-color);
  }

  button:active {
    background-color: var(--wl-button-active-background-color);
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

  private onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation;
    }
  }

  render(): TemplateResult {
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
        <slot name="left-icon" part="left-icon"></slot>
        <slot part="text" class="text">BUTTON</slot>
        <slot name="right-icon" part="right-icon"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wl-button': WlButton;
  }
}
