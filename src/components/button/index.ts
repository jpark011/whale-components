import {html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {primaryStyle, secondaryStyle} from './style';

export type WlButtonType = 'primary' | 'secondary';

@customElement('wl-button')
export class WlButton extends LitElement {
  static styles = [primaryStyle, secondaryStyle];

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
        <slot part="text" class="text"></slot>
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
