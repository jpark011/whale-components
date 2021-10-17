import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {grey, greyDark, greyLight, primary, white} from '../../utils/colors';
import {buildEvent} from '../../utils/events';

const baseStyle = css`
  :host {
    --wl-checkbox-size: 16px;
    --wl-checkbox-color: var(--wl-color-primary-500, ${primary});
    --wl-checkbox-background-color: var(--wl-color-grey-100, ${white});
    --wl-checkbox-border-color: var(--wl-color-grey-800, ${greyDark});
  }

  :host([disabled]) {
    --wl-checkbox-color: var(--wl-color-grey-600, ${greyDark});
    --wl-checkbox-background-color: var(--wl-color-grey-200, ${greyLight});
    --wl-checkbox-border-color: var(--wl-color-grey-400, ${grey});
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    cursor: none;
  }

  .checkbox {
    position: relative;
    width: var(--wl-checkbox-size);
    height: var(--wl-checkbox-size);
    background-color: var(--wl-checkbox-background-color);
    border: 1px solid var(--wl-checkbox-border-color);
    border-radius: calc(var(--wl-checkbox-size) / 8);
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  :host([checked]:not([indeterminate])) .checkbox::before {
    content: '';
    position: absolute;
    width: calc(var(--wl-checkbox-size) / 2);
    height: calc(var(--wl-checkbox-size) / 2);
    border-radius: calc(var(--wl-checkbox-size) / 16);
    background-color: var(--wl-checkbox-color);
  }

  :host([indeterminate]) .checkbox::before {
    content: '';
    position: absolute;
    width: calc(var(--wl-checkbox-size) / 2);
    height: calc(var(--wl-checkbox-size) / 8);
    border-radius: calc(var(--wl-checkbox-size) / 16);
    background-color: var(--wl-checkbox-color);
  }
`;

@customElement('wl-checkbox')
export class WlCheckbox extends LitElement {
  static styles = [baseStyle];

  @property({type: Boolean, reflect: true})
  checked = false;

  @property({type: Boolean, reflect: true})
  disabled = false;

  @property({type: Boolean, reflect: true})
  indeterminate = false;

  private onChange(e: Event): void {
    this.checked = (e.target as HTMLInputElement).checked;
    this.indeterminate = false;
    this.dispatchEvent(buildEvent('change'));
  }

  render(): TemplateResult {
    return html`<label>
      <input
        type="checkbox"
        value=${this.checked}
        .checked=${this.checked}
        .indeterminate=${this.indeterminate}
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
