import {css, html, LitElement, PropertyValues, svg, TemplateResult} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';

const style = css``;

@customElement('wl-icon')
export default class WlIcon extends LitElement {
  static styles = [style];

  @property({reflect: true})
  name = 'question-mark-circle-outline';

  @property({type: Number, reflect: true})
  size = 24;

  @state()
  private icon = '';

  async updated(changedProps: PropertyValues<this>): Promise<void> {
    if (changedProps.has('name')) {
      this.icon = await import(`../../assets/icons/eva/${this.name}.svg`).then(
        (module) => module.default
      );
    }
  }

  render(): TemplateResult {
    const style = html`<style>
      :host {
        fill: currentColor;
        width: ${this.size}px;
        height: ${this.size}px;
      }
    </style>`;

    return svg`${style} ${unsafeSVG(this.icon)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wl-icon': WlIcon;
  }
}
