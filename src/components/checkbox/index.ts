import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {buildEvent} from '../../utils/events';

const baseStyle = css`
  input[type='checkbox'] {
    /* position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    cursor: none; */
  }
`;

@customElement('wl-checkbox')
export class WlCheckbox extends LitElement {
  static styles = [baseStyle];

  @property({type: Boolean, reflect: true})
  checked = false;

  @property({type: Boolean, reflect: true})
  disabled = false;

  private onChange(e: Event): void {
    this.checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(buildEvent('change'));
  }

  render(): TemplateResult {
    return html`<label>
      <input
        type="checkbox"
        value=${this.checked}
        .checked=${this.checked}
        .disabled=${this.disabled}
        @change=${this.onChange}
      />
      <span class="checkbox"></span>
      <slot part="label"></slot>
    </label> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wl-checkbox': WlCheckbox;
  }
}
